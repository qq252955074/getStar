// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    
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
        jumpHeight:0,
        //主角跳跃的时间
        jumpDuration:0,
        //最大的移动速度
        maxMoveSpeed:0,
        //加速度
        accel:0,
        //跳跃音效
        jumpAudio:{
            default: null,
            type: cc.AudioClip

        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    setJumpAction:function()
    {
        //跳跃上升
        var jumpUp=cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeCubicActionOut());
        //下落
        var jumpDown = cc.moveBy(this.jumpDuration,cc.v2(0,-this.jumpHeight)).easing(cc.easeCubicActionOut());
       //添加一个回调函数,用于动作结束后调用定义的其他方法
       var callback = cc.callFunc(this.playJumpSound,this);
        //不断重复
        return cc.repeatForever(cc.sequence(jumpUp,jumpDown,callback));
    },
    playJumpSound:function(){
        //调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio,false);
    },
    onKeyDown(event)
    {
        switch(event.keyCode)
        {
            case cc.macro.KEY.a:
                this.accLeft =true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    },
    onKeyUp(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
            }
    },
    onLoad: function()
    {
        this.jumpAction=this.setJumpAction();
        this.node.runAction(this.jumpAction);

        //加速度方向开关
        this.accLeft = false;
        this.accRight = false;
        //主角当前的水平方向速度
        this.xSpeed = 0;
        
        //初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    },
    onDestroy()
    {
        //取消键盘监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)
    },
     update:function(dt) {
         if(this.accLeft){
             this.xSpeed -= this.accel * dt;
         }else if(this.accRight){
             this.xSpeed += this.accel * dt;
         }
         //限制主角的速度不能超过最大值
         if(Math.abs(this.xSpeed)>this.maxMoveSpeed)
         {
             this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed);
         }
         //根据当前的速度更新主角的位置
         this.node.x+=this.xSpeed * dt;
 
     },
});
