<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <ul class="u-list">
      <li class="u-li">
        <a class="u-a" href="javascript:void(0)">
          <img class="u-img" src="./../../../assets/images/public/ban/ban-01.jpg">
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ban',
    data () {
      return {
        clientWidth: 0,
        offsetLeft: 0,
        offsetTop: 0,
        uBgStyle: {}
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
    width: 600px;
    height: 330px;
    border-radius: 5px;
  }
  .u-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: hsla(0,0%,100%,.4);
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
  .u-bg-after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 5px;
    background-image: url("./../../../assets/images/public/bg-03.png");
    background-size: 100%;
    background-position: 0 -255px;
    background-repeat: no-repeat;
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }
  .u-list{
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    width: 600px;
    height: 100%;
    box-sizing: border-box;
  }
  .u-li{
    float: left;
    width: 580px;
    height: 100%;
  }
  .u-a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .u-img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
</style>
