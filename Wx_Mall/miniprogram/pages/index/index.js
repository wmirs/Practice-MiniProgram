const { envList } = require('../../envList.js');

var app = getApp()
Page({
    data: {
        menuID: 1,
    },
    // 菜单切换监听
    menuClick(e) {
        var id = e.currentTarget.id;
        this.setData({
            menuID: id,
        })
    },
});
