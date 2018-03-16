<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-mn">
      <ul class="u-tt-list">
        <li class="u-tt-li" v-for="data in list">
          <h2 class="u-h2">{{data.title}}</h2>
          <ul class="u-list">
            <li class="u-li" v-for="node in data.node">
              <p class="u-p">{{node.title}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'chapter',
    data () {
      return {
        clientWidth: 0,
        offsetLeft: 0,
        offsetTop: 0,
        uBgStyle: {},
        list: [{
          title: '第一卷 听说游戏玩家兄妹要征服异世界',
          node: [{
            title: '序章'
          }, {
            title: '第一章 外行人'
          }, {
            title: '第二章 挑战者'
          }, {
            title: '第三章 老手'
          }, {
            title: '第四章 国王'
          }, {
            title: '终章'
          }, {
            title: '后记'
          }, {
            title: '插画'
          }]
        }, {
          title: '第一卷 听说游戏玩家兄妹要征服异世界',
          node: [{
            title: '序章'
          }, {
            title: '第一章 外行人'
          }, {
            title: '第二章 挑战者'
          }, {
            title: '第三章 老手'
          }, {
            title: '第四章 国王'
          }, {
            title: '终章'
          }, {
            title: '后记'
          }, {
            title: '插画'
          }]
        }, {
          title: '第一卷 听说游戏玩家兄妹要征服异世界',
          node: [{
            title: '序章'
          }, {
            title: '第一章 外行人'
          }, {
            title: '第二章 挑战者'
          }, {
            title: '第三章 老手'
          }, {
            title: '第四章 国王'
          }, {
            title: '终章'
          }, {
            title: '后记'
          }, {
            title: '插画'
          }]
        }, {
          title: '第一卷 听说游戏玩家兄妹要征服异世界',
          node: [{
            title: '序章'
          }, {
            title: '第一章 外行人'
          }, {
            title: '第二章 挑战者'
          }, {
            title: '第三章 老手'
          }, {
            title: '第四章 国王'
          }, {
            title: '终章'
          }, {
            title: '后记'
          }, {
            title: '插画'
          }]
        }]
      }
    },
    components: {},
    methods: {
      UBgStyle () {
        this.clientWidth = document.body.clientWidth

        const width = this.clientWidth > 1200 ? this.clientWidth : 1200
        const offsetLeft = this.$el.offsetLeft ? this.$el.offsetLeft : 0
        const offsetTop = this.$el.offsetTop ? this.$el.offsetTop + 9 : 9
        this.uBgStyle = {
          backgroundSize: width + 'px',
          backgroundPosition: -offsetLeft + 'px -' + offsetTop + 'px'
        }
      }
    },
    mounted: function () {
      this.UBgStyle()
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .m-box{
    position: relative;
    width: 1200px;
    height: 600px;
    border-radius: 5px;
  }
  .u-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  }
  .u-bg-after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 5px;
    background-image: url("./../../assets/images/public/bg-03.png");
    background-size: 100%;
    background-position: 0 -255px;
    background-repeat: no-repeat;
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }
  .u-mn{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .u-tt-list{
    padding: 10px 30px;
    width: 100%;
    box-sizing: border-box;
  }
  .u-tt-li{
    width: 100%;
    font-size: 14px;
    line-height: 40px;
  }
  .u-h2{
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: rgba(255, 255, 255, .9);
    /*border-bottom: 1px dashed rgba(255, 255, 255, .4);*/
  }
  .u-list{
    overflow: auto;
    width: 100%;
    color: rgba(255, 255, 255, .9);
  }
  .u-li{
    float: left;
    padding-left: 40px;
    width: 25%;
    border-bottom: 1px dashed rgba(255, 255, 255, .4);
    box-sizing: border-box;
  }
</style>
