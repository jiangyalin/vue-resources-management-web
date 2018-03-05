<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-ban">
      <ul class="u-list" ref="ban" :style="uBanStyle">
        <li class="u-li">
          <a class="u-a" href="javascript:void(0)">
            <img class="u-img" src="./../../../assets/images/public/ban/ban-01.jpg">
          </a>
        </li>
        <li class="u-li">
          <a class="u-a" href="javascript:void(0)">
            <img class="u-img" src="./../../../assets/images/public/ban/ban-01.jpg">
          </a>
        </li>
        <li class="u-li">
          <a class="u-a" href="javascript:void(0)">
            <img class="u-img" src="./../../../assets/images/public/ban/ban-01.jpg">
          </a>
        </li>
        <li class="u-li">
          <a class="u-a" href="javascript:void(0)">
            <img class="u-img" src="./../../../assets/images/public/ban/ban-01.jpg">
          </a>
        </li>
      </ul>
      <ul class="u-tt" ref="banTt" :style="uBanStyle">
        <li class="u-tt-li">初音未来2013魔法的未来演唱会</li>
        <li class="u-tt-li">初音未来2013魔法的未来演唱会</li>
        <li class="u-tt-li">初音未来2013魔法的未来演唱会</li>
        <li class="u-tt-li">初音未来2013魔法的未来演唱会</li>
      </ul>
    </div>
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
        uBgStyle: {},
        uBanStyle: {},
        translateX: 0
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
      window.setInterval(() => {
        this.translateX = this.translateX - 580 <= 4 * -580 ? 0 : this.translateX - 580
        this.uBanStyle = {
          transform: 'translateX(' + this.translateX + 'px)'
        }
      }, 10000)
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
  .u-ban{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 10px;
    padding: 10px 0;
    width: 580px;
    height: 100%;
    box-sizing: border-box;
  }
  .u-list{
    width: 400%;
    height: 100%;
    box-sizing: border-box;
    transform: translateX(0);
    transition: .3s;
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
  .u-tt{
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 400%;
    height: 35px;
    background: -webkit-linear-gradient(transparent,rgba(0, 0, 0, .5));
    box-sizing: border-box;
    transform: translateX(0);
    transition: .3s;
  }
  .u-tt-li{
    float: left;
    width: 580px;
    font-size: 14px;
    color: rgba(255, 255, 255, .9);
    line-height: 35px;
    text-indent: 1em;
  }
</style>
