
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ab376rUodMlqFz70OZq1TM', 'Player');
// scripts/Player.js

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
    //主角跳跃的高度：
    jumpHeight: 0,
    //主角跳跃的时间
    jumpDuration: 0,
    //最大的移动速度
    maxMoveSpeed: 0,
    //加速度
    accel: 0,
    //跳跃音效
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  setJumpAction: function setJumpAction() {
    //跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); //下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionOut()); //添加一个回调函数,用于动作结束后调用定义的其他方法

    var callback = cc.callFunc(this.playJumpSound, this); //不断重复

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    //调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); //加速度方向开关

    this.accLeft = false;
    this.accRight = false; //主角当前的水平方向速度

    this.xSpeed = 0; //初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    //取消键盘监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } //限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } //根据当前的速度更新主角的位置


    this.node.x += this.xSpeed * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInNldEp1bXBBY3Rpb24iLCJqdW1wVXAiLCJtb3ZlQnkiLCJ2MiIsImVhc2luZyIsImVhc2VDdWJpY0FjdGlvbk91dCIsImp1bXBEb3duIiwiY2FsbGJhY2siLCJjYWxsRnVuYyIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJhY2NMZWZ0IiwiZCIsImFjY1JpZ2h0Iiwib25LZXlVcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwicnVuQWN0aW9uIiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxVQUFVLEVBQUMsQ0FqQkg7QUFrQlI7QUFDQUMsSUFBQUEsWUFBWSxFQUFDLENBbkJMO0FBb0JSO0FBQ0FDLElBQUFBLFlB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T0FBdkQsRUFBK0QsSUFBL0Q7QUFDSCxHQXpGSTtBQTBGTFksRUFBQUEsU0ExRkssdUJBMkZMO0FBQ0k7QUFDQTlDLElBQUFBLEVBQUUsQ0FBQ3dDLFdBQUgsQ0FBZU8sR0FBZixDQUFtQi9DLEVBQUUsQ0FBQzBDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBcUQsS0FBS25CLFNBQTFELEVBQW9FLElBQXBFO0FBQ0F6QixJQUFBQSxFQUFFLENBQUN3QyxXQUFILENBQWVPLEdBQWYsQ0FBbUIvQyxFQUFFLENBQUMwQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJFLE1BQTVDLEVBQW1ELEtBQUtYLE9BQXhELEVBQWdFLElBQWhFO0FBQ0gsR0EvRkk7QUFnR0pjLEVBQUFBLE1BQU0sRUFBQyxnQkFBU0MsRUFBVCxFQUFhO0FBQ2hCLFFBQUcsS0FBS2xCLE9BQVIsRUFBZ0I7QUFDWixXQUFLUSxNQUFMLElBQWUsS0FBS2hDLEtBQUwsR0FBYTBDLEVBQTVCO0FBQ0gsS0FGRCxNQUVNLElBQUcsS0FBS2hCLFFBQVIsRUFBaUI7QUFDbkIsV0FBS00sTUFBTCxJQUFlLEtBQUtoQyxLQUFMLEdBQWEwQyxFQUE1QjtBQUNILEtBTGUsQ0FNaEI7OztBQUNBLFFBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsSUFBc0IsS0FBS2pDLFlBQTlCLEVBQ0E7QUFDSSxXQUFLaUMsTUFBTCxHQUFZLEtBQUtqQyxZQUFMLEdBQWtCLEtBQUtpQyxNQUF2QixHQUE4QlcsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS1osTUFBZCxDQUExQztBQUNILEtBVmUsQ0FXaEI7OztBQUNBLFNBQUtGLElBQUwsQ0FBVWUsQ0FBVixJQUFhLEtBQUtiLE1BQUwsR0FBY1UsRUFBM0I7QUFFSDtBQTlHRyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8v5Li76KeS6Lez6LeD55qE6auY5bqm77yaXHJcbiAgICAgICAganVtcEhlaWdodDowLFxyXG4gICAgICAgIC8v5Li76KeS6Lez6LeD55qE5pe26Ze0XHJcbiAgICAgICAganVtcER1cmF0aW9uOjAsXHJcbiAgICAgICAgLy/mnIDlpKfnmoTnp7vliqjpgJ/luqZcclxuICAgICAgICBtYXhNb3ZlU3BlZWQ6MCxcclxuICAgICAgICAvL+WKoOmAn+W6plxyXG4gICAgICAgIGFjY2VsOjAsXHJcbiAgICAgICAgLy/ot7Pot4Ppn7PmlYhcclxuICAgICAgICBqdW1wQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcbiAgICBzZXRKdW1wQWN0aW9uOmZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICAvL+i3s+i3g+S4iuWNh1xyXG4gICAgICAgIHZhciBqdW1wVXA9Y2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLGNjLnYyKDAsdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgICAgICAvL+S4i+iQvVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLC10aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xyXG4gICAgICAgLy/mt7vliqDkuIDkuKrlm57osIPlh73mlbAs55So5LqO5Yqo5L2c57uT5p2f5ZCO6LCD55So5a6a5LmJ55qE5YW25LuW5pa55rOVXHJcbiAgICAgICB2YXIgY2FsbGJhY2sgPSBjYy5jYWxsRnVuYyh0aGlzLnBsYXlKdW1wU291bmQsdGhpcyk7XHJcbiAgICAgICAgLy/kuI3mlq3ph43lpI1cclxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsanVtcERvd24sY2FsbGJhY2spKTtcclxuICAgIH0sXHJcbiAgICBwbGF5SnVtcFNvdW5kOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/osIPnlKjlo7Dpn7PlvJXmk47mkq3mlL7lo7Dpn7NcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd24oZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbktleVVwKGV2ZW50KXtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmp1bXBBY3Rpb249dGhpcy5zZXRKdW1wQWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmp1bXBBY3Rpb24pO1xyXG5cclxuICAgICAgICAvL+WKoOmAn+W6puaWueWQkeW8gOWFs1xyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvL+S4u+inkuW9k+WJjeeahOawtOW5s+aWueWQkemAn+W6plxyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvL+WIneWni+WMlumUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMub25LZXlVcCx0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIC8v5Y+W5raI6ZSu55uY55uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpcylcclxuICAgIH0sXHJcbiAgICAgdXBkYXRlOmZ1bmN0aW9uKGR0KSB7XHJcbiAgICAgICAgIGlmKHRoaXMuYWNjTGVmdCl7XHJcbiAgICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuYWNjUmlnaHQpe1xyXG4gICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8v6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XHJcbiAgICAgICAgIGlmKE1hdGguYWJzKHRoaXMueFNwZWVkKT50aGlzLm1heE1vdmVTcGVlZClcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy54U3BlZWQ9dGhpcy5tYXhNb3ZlU3BlZWQqdGhpcy54U3BlZWQvTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8v5qC55o2u5b2T5YmN55qE6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnhTcGVlZCAqIGR0O1xyXG4gXHJcbiAgICAgfSxcclxufSk7XHJcbiJdfQ==