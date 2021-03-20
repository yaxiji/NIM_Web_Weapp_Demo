"use strict";

Component({
  properties: {
    selectType: {
      type: Number,
      value: 1 //1-商圈 2-距离 3-标签
    }
  },
  data: {},
  attached: function attached() {},

  methods: {
    closePop: function closePop(e) {
      var myEventDetail = {
        // detail对象，提供给事件监听函数
        selectType: 0
      };
      this.triggerEvent("changePop", myEventDetail);
    }
  }
});