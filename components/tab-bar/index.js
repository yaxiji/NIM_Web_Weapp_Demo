"use strict";

Component({
  properties: {
    tabIndex: {
      type: Number,
      value: 0
    }
  },
  data: {
    selected: 0,
    color: "#A5A8C2",
    selectedColor: "#FCDB4D",
    list: [{
      pagePath: "/pages/merchant/index",
      iconPath: "https://ugc.hitv.com/platform_oss/522EF37E83024E8FA61F1E30234D3D4D.png",
      selectedIconPath: "https://ugc.hitv.com/platform_oss/522EF37E83024E8FA61F1E30234D3D4D.png",
      text: "门店"
    }, {
      pagePath: "/pages/theme/index",
      iconPath: "https://ugc.hitv.com/platform_oss/B55FDED7B20F4047888455672E7A97E5.png",
      selectedIconPath: "https://ugc.hitv.com/platform_oss/B55FDED7B20F4047888455672E7A97E5.png",
      text: "主题"
    }, {
      pagePath: "/pages/merchant/index",
      iconPath: "https://ugc.hitv.com/platform_oss/1A17D2A9F3834C749ED753AE68AC35CB.png",
      selectedIconPath: "https://ugc.hitv.com/platform_oss/1A17D2A9F3834C749ED753AE68AC35CB.png",
      text: "MT星人"
    }, {
      pagePath: "/pages/merchant/index",
      iconPath: "https://ugc.hitv.com/platform_oss/E1DACBBC3FF342D5AEBDD425D7C95F1C.png",
      selectedIconPath: "https://ugc.hitv.com/platform_oss/E1DACBBC3FF342D5AEBDD425D7C95F1C.png",
      text: "预订"
    }, {
      pagePath: "/pages/merchant/index",
      iconPath: "https://ugc.hitv.com/platform_oss/686D397E93104DD6A8998EDDF2AB4731.png",
      selectedIconPath: "https://ugc.hitv.com/platform_oss/686D397E93104DD6A8998EDDF2AB4731.png",
      text: "我的"
    }]
  },
  attached: function attached() {},

  methods: {
    switchTab: function switchTab(e) {
      var data = e.currentTarget.dataset;
      var url = data.path;
      wx.navigateTo({ url: url });
      this.setData({
        selected: data.index
      });
    }
  }
});