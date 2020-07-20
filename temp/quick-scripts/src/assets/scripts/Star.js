"use strict";
cc._RF.push(module, 'c9ac102lmZEJoXlfJ9qIIZW', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    pickRidus: 0
  },
  onLoad: function onLoad() {},
  getPlayerDistance: function getPlayerDistance() {
    //根据player节点位置判断距离
    var playerPos = this.game.player.getPosition(); //根据两点位置计算两点之间的距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    //当星星被收集时,调用 Game脚本中的接口，生成一个星星
    this.game.spawnNewStar(); //分数增加

    this.game.gainScore();
    this.node.destroy();
  },
  update: function update(dt) {
    //判断每帧的距离是否小于搜集距离
    if (this.getPlayerDistance() < this.pickRidus) {
      //调用收集行为
      this.onPicked();
      return;
    }

    var opacityRatio = 1 - this.game.timer / this.game.startDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  } // update (dt) {},

});

cc._RF.pop();