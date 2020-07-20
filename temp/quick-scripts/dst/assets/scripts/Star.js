
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSaWR1cyIsIm9uTG9hZCIsImdldFBsYXllckRpc3RhbmNlIiwicGxheWVyUG9zIiwiZ2FtZSIsInBsYXllciIsImdldFBvc2l0aW9uIiwiZGlzdCIsIm5vZGUiLCJwb3NpdGlvbiIsInN1YiIsIm1hZyIsIm9uUGlja2VkIiwic3Bhd25OZXdTdGFyIiwiZ2FpblNjb3JlIiwiZGVzdHJveSIsInVwZGF0ZSIsImR0Iiwib3BhY2l0eVJhdGlvIiwidGltZXIiLCJzdGFydER1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxTQUFTLEVBQUM7QUFoQkYsR0FIUDtBQXFCTEMsRUFBQUEsTUFBTSxFQUFDLGtCQUFVLENBRWhCLENBdkJJO0FBd0JMQyxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBVTtBQUN6QjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCLENBRnlCLENBR3pCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCUCxTQUF2QixFQUFrQ1EsR0FBbEMsRUFBWDtBQUNBLFdBQU9KLElBQVA7QUFDSCxHQTlCSTtBQStCTEssRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCO0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxZQUFWLEdBRmdCLENBR2hCOztBQUNBLFNBQUtULElBQUwsQ0FBVVUsU0FBVjtBQUNBLFNBQUtOLElBQUwsQ0FBVU8sT0FBVjtBQUNILEdBckNJO0FBc0NMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLEVBQVQsRUFBWTtBQUNoQjtBQUNBLFFBQUcsS0FBS2YsaUJBQUwsS0FBeUIsS0FBS0YsU0FBakMsRUFBMkM7QUFDdkM7QUFDQSxXQUFLWSxRQUFMO0FBQ0E7QUFDSDs7QUFDRCxRQUFJTSxZQUFZLEdBQUcsSUFBSSxLQUFLZCxJQUFMLENBQVVlLEtBQVYsR0FBZ0IsS0FBS2YsSUFBTCxDQUFVZ0IsYUFBakQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLYixJQUFMLENBQVVjLE9BQVYsR0FBb0JELFVBQVUsR0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFlBQVksSUFBRSxNQUFNRyxVQUFSLENBQXZCLENBQS9CO0FBQ0gsR0FoREksQ0FvREw7O0FBcERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBwaWNrUmlkdXM6MCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQ6ZnVuY3Rpb24oKXtcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8v5qC55o2ucGxheWVy6IqC54K55L2N572u5Yik5pat6Led56a7XHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvL+agueaNruS4pOeCueS9jee9ruiuoeeul+S4pOeCueS5i+mXtOeahOi3neemu1xyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuICAgIG9uUGlja2VkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8v5b2T5pif5pif6KKr5pS26ZuG5pe2LOiwg+eUqCBHYW1l6ISa5pys5Lit55qE5o6l5Y+j77yM55Sf5oiQ5LiA5Liq5pif5pifXHJcbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIC8v5YiG5pWw5aKe5YqgXHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbihkdCl7XHJcbiAgICAgICAgLy/liKTmlq3mr4/luKfnmoTot53nprvmmK/lkKblsI/kuo7mkJzpm4bot53nprtcclxuICAgICAgICBpZih0aGlzLmdldFBsYXllckRpc3RhbmNlKCk8dGhpcy5waWNrUmlkdXMpe1xyXG4gICAgICAgICAgICAvL+iwg+eUqOaUtumbhuihjOS4ulxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9wYWNpdHlSYXRpbyA9IDEgLSB0aGlzLmdhbWUudGltZXIvdGhpcy5nYW1lLnN0YXJ0RHVyYXRpb247XHJcbiAgICAgICAgdmFyIG1pbk9wYWNpdHkgPSA1MDtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IG1pbk9wYWNpdHkrTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8qKDI1NSAtIG1pbk9wYWNpdHkpKTtcclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==