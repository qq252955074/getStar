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
        //这个属性引用星星的预制资源
        startPrefab:{
            default:null,
            type:cc.Prefab
        },
        maxStarDuration:0,
        minStarDuration:0,
        ground:{
            default:null,
            type:cc.Node
        },
        player:{
            default:null,
            type:cc.Node
        },
        scoreDisplay:{
           default:null,
            type:cc.Label
        },
        scoreAudio:{
            //得分音效
            default:null,
            type:cc.AudioClip
        }
    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function(){
        //获取地平面y轴的坐标
        this.groundY=this.ground.y+this.ground.height/2;
        this.startDuration=0;
        this.timer=0;
        //生成一个人小星星
        this.spawnNewStar();
        this.score=0;
  
    },
    spawnNewStar:function(){
        //使用给定的模板在场景中生成一个新的节点
        var newStar = cc.instantiate(this.startPrefab);
        //将新增的节点挂在在Canvas节点下面
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
        this.startDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
        //在星星组件上暂存Game对象的引用
        newStar.getComponent('Star').game = this;

    },
    getNewStarPosition:function(){
        var randX=0;
        //根据地平面的位置和主角的跳跃高度，随机得到一个星星的y坐标
        var randY = this.groundY+Math.random() * this.player.getComponent('Player').jumpHeight+50;
        //根据屏幕的宽度,随机得到一个星星x的坐标
        var maxX = this.node.width/2;
        randX = (Math.random()-0.5) * 2 * maxX;
        return cc.v2(randX,randY);
    },
    gainScore:function(){
        this.score +=1;
        //更新label的文字
        this.scoreDisplay.string='Score: '+this.score;
        cc.audioEngine.playEffect(this.scoreAudio,false);
    },
    gameOver:function(){
        this.player.stopAllActions(); //停止 player 节点的跳跃动作
        cc.director.loadScene('game');
    },
    update:function(dt){
        //判断是否超时
         if(this.timer>this.startDuration)
        {
            this.gameOver();
            return;
        }
         this.timer +=dt;
    },

    
});



