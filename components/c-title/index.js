"use strict";

Component({
  properties: {
    navType: {
      type: Number,
      value: 1
    }
  },
  data: {
    curCity: ""
  },
  attached: function attached() {},

  methods: {
    openPop: function openPop(e) {
      var data = e.currentTarget.dataset;
      this.triggerEvent("changePop", { selectType: data.type });
    },
    changeNav: function changeNav(e) {
      var type = e.currentTarget.dataset.type;
      this.triggerEvent("changeNav", { navType: type });
      // let url = "/pages/merchant/index";
      // switch (type) {
      //   case "2":
      //     url = "/pages/theme/index";
      //     break;
      //   case "3":
      //     url = "/pages/group/index";
      //     break;
      // }
      // wx.navigateTo({ url });
    },
    handleSearch: function handleSearch() {
      console.log(11);
    }
  }
});