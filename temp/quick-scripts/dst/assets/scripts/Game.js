
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eba4ca5oKFPBIFzxmchPVvq', 'Game');
// scripts/Game.js

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
    //这个属性引用星星的预制资源
    startPrefab: {
      "default": null,
      type: cc.Prefab
    },
    maxStarDuration: 0,
    minStarDuration: 0,
    ground: {
      "default": null,
      type: cc.Node
    },
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      //得分音效
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    //获取地平面y轴的坐标
    this.groundY = this.ground.y + this.ground.height / 2;
    this.startDuration = 0;
    this.timer = 0; //生成一个人小星星

    this.spawnNewStar();
    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    //使用给定的模板在场景中生成一个新的节点
    var newStar = cc.instantiate(this.startPrefab); //将新增的节点挂在在Canvas节点下面

    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
    this.startDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0; //在星星组件上暂存Game对象的引用

    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; //根据地平面的位置和主角的跳跃高度，随机得到一个星星的y坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; //根据屏幕的宽度,随机得到一个星星x的坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },
  gainScore: function gainScore() {
    this.score += 1; //更新label的文字

    this.scoreDisplay.string = 'Score: ' + this.score;
    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); //停止 player 节点的跳跃动作

    cc.director.loadScene('game');
  },
  update: function update(dt) {
    //判断是否超时
    if (this.timer > this.startDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0UHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJEdXJhdGlvbiIsIm1pblN0YXJEdXJhdGlvbiIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlQXVkaW8iLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJncm91bmRZIiwieSIsImhlaWdodCIsInN0YXJ0RHVyYXRpb24iLCJ0aW1lciIsInNwYXduTmV3U3RhciIsInNjb3JlIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJNYXRoIiwicmFuZG9tIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsInJhbmRYIiwicmFuZFkiLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJnYW1lT3ZlciIsInN0b3BBbGxBY3Rpb25zIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsV0FBVyxFQUFDO0FBQ1IsaUJBQVEsSUFEQTtBQUVSQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQSxLQWpCSjtBQXFCUkMs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SCxHQXpGSTtBQTBGTEMsRUFBQUEsTUFBTSxFQUFDLGdCQUFTQyxFQUFULEVBQVk7QUFDZjtBQUNDLFFBQUcsS0FBSzVCLEtBQUwsR0FBVyxLQUFLRCxhQUFuQixFQUNEO0FBQ0ksV0FBS3dCLFFBQUw7QUFDQTtBQUNIOztBQUNBLFNBQUt2QixLQUFMLElBQWE0QixFQUFiO0FBQ0o7QUFsR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8v6L+Z5Liq5bGe5oCn5byV55So5pif5pif55qE6aKE5Yi26LWE5rqQXHJcbiAgICAgICAgc3RhcnRQcmVmYWI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXhTdGFyRHVyYXRpb246MCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246MCxcclxuICAgICAgICBncm91bmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjb3JlRGlzcGxheTp7XHJcbiAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY29yZUF1ZGlvOntcclxuICAgICAgICAgICAgLy/lvpfliIbpn7PmlYhcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuICAgIG9uTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAvL+iOt+WPluWcsOW5s+mdonnovbTnmoTlnZDmoIdcclxuICAgICAgICB0aGlzLmdyb3VuZFk9dGhpcy5ncm91bmQueSt0aGlzLmdyb3VuZC5oZWlnaHQvMjtcclxuICAgICAgICB0aGlzLnN0YXJ0RHVyYXRpb249MDtcclxuICAgICAgICB0aGlzLnRpbWVyPTA7XHJcbiAgICAgICAgLy/nlJ/miJDkuIDkuKrkurrlsI/mmJ/mmJ9cclxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmU9MDtcclxuICBcclxuICAgIH0sXHJcbiAgICBzcGF3bk5ld1N0YXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICAvL+S9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+S4reeUn+aIkOS4gOS4quaWsOeahOiKgueCuVxyXG4gICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFydFByZWZhYik7XHJcbiAgICAgICAgLy/lsIbmlrDlop7nmoToioLngrnmjILlnKjlnKhDYW52YXPoioLngrnkuIvpnaJcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLnN0YXJ0RHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgLy/lnKjmmJ/mmJ/nu4Tku7bkuIrmmoLlrZhHYW1l5a+56LGh55qE5byV55SoXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcclxuXHJcbiAgICB9LFxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHJhbmRYPTA7XHJcbiAgICAgICAgLy/moLnmja7lnLDlubPpnaLnmoTkvY3nva7lkozkuLvop5LnmoTot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoR55Z2Q5qCHXHJcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZK01hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQrNTA7XHJcbiAgICAgICAgLy/moLnmja7lsY/luZXnmoTlrr3luqYs6ZqP5py65b6X5Yiw5LiA5Liq5pif5pifeOeahOWdkOagh1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoLzI7XHJcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKS0wLjUpICogMiAqIG1heFg7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLHJhbmRZKTtcclxuICAgIH0sXHJcbiAgICBnYWluU2NvcmU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNjb3JlICs9MTtcclxuICAgICAgICAvL+abtOaWsGxhYmVs55qE5paH5a2XXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nPSdTY29yZTogJyt0aGlzLnNjb3JlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBnYW1lT3ZlcjpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7IC8v5YGc5q2iIHBsYXllciDoioLngrnnmoTot7Pot4PliqjkvZxcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6ZnVuY3Rpb24oZHQpe1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm6LaF5pe2XHJcbiAgICAgICAgIGlmKHRoaXMudGltZXI+dGhpcy5zdGFydER1cmF0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLnRpbWVyICs9ZHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG59KTtcclxuXHJcblxyXG5cclxuIl19