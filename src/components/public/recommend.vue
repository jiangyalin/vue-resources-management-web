<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-mn">
      <a class="u-a" :href="href">
        <img class="u-img" :src="imgSrc">
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'recommend',
    data () {
      return {
        clientWidth: 0,
        offsetLeft: 0,
        offsetTop: 0,
        uBgStyle: {}
      }
    },
    props: ['imgSrc', 'href'],
    components: {},
    methods: {
      UBgStyle () {
        this.clientWidth = document.body.clientWidth
        const width = 1920
        const offsetLeft = this.clientWidth > 1200 ? this.$el.offsetLeft + (width - this.clientWidth) / 2 : this.$el.offsetLeft + (1200 - this.clientWidth) / 2
        const offsetTop = this.$el.offsetTop ? this.$el.offsetTop + 9 : 9
        this.uBgStyle = {
          backgroundSize: width + 'px',
          backgroundPosition: -offsetLeft + 'px ' + -offsetTop + 'px'
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
    width: 280px;
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
    background-image: url("./../../assets/images/public/bg-03.png");
    background-size: 1920px;
    background-position: 0 -255px;
    background-repeat: no-repeat;
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }
  .u-mn{
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .u-a{
    display: block;
  }
  .u-img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
</style>
