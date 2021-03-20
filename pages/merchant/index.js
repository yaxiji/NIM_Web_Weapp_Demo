// import { fetchVideoInfo } from "../../service/api";
import { merchantMockData, themeMockData } from "./mockData";
import IMController from '../../controller/im.js'
const app = getApp();
// const Util = app.Util;
let store = app.store
Page({
  data: {
    tabIndex: 0, //tab-bar页签
    navType: 1, // 1-门店 2-主题 3-组队
    selectType: 0, //浮层类型
    merchantMockData: merchantMockData,
    themeMockData: themeMockData,
  },
  onLoad(params) {
    if (params.navType) {
      this.setData({ navType: params.navType });
    }
    new IMController({
      token: 'lovedan',
      account: 'lidan'
    })
  },
  changePop(e) {
    let selectType = e.detail.selectType;
    this.setData({ selectType: parseInt(selectType) });
  },
  changeNav(e) {
    let navType = e.detail.navType;
    this.setData({ navType: parseInt(navType) });
  },
  switchToChating() {
    let account = 'lidan123'
    // 更新会话对象
    store.dispatch({
      type: 'CurrentChatTo_Change',
      payload: 'p2p-' + account
    })
    wx.navigateTo({
      url: '../../partials/chating/chating?chatTo=' + account + '&type=p2p',
    })
  }
});
