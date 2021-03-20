"use strict";

var QQMapWX = require("../../lib/qqmap-wx-jssdk.min.js");
Component({
  properties: {},
  data: {
    barHeight: wx.getSystemInfoSync().statusBarHeight,
    curCity: ""
  },
  attached: function attached() {
    var city = wx.getStorageSync("mt-curCity");
    if (city) {
      this.setData({ curCity: city });
    } else {
      this.getMapCity();
    }
  },

  methods: {
    getMapCity: function getMapCity() {
      var qqmapsdk = new QQMapWX({
        key: "CE2BZ-6UYEX-WBK47-Z75NA-DP3V7-WHFLI"
      });

      // let location = {
      //   latitude: app.globalData.location.latitude,
      //   longitude: app.globalData.location.longitude,
      // };
      var _this = this;
      qqmapsdk.reverseGeocoder({
        location: "", //获取表单传入的位置坐标,不填默认当前位置,示例为string格式
        //get_poi: 1, //是否返回周边POI列表：1.返回；0不返回(默认),非必须参数
        success: function success(res) {
          //成功后的回调
          if (res.status == 0) {
            var city = res.result.address_component.city;
            _this.setData({ curCity: city });
            wx.setStorageSync("mt-curCity", city);
          }
        },
        fail: function fail(error) {
          console.error(error);
        },
        complete: function complete(res) {
          console.log(res);
        }
      });
    }
  }
});