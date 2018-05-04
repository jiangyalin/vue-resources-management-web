<template>
  <div class="m-previous-box">
    <div class="u-bgc" :style="bgc"></div>
    <div class="u-bgi" :style="bgi"></div>
    <div class="u-mn">
      <button class="u-btn" type="button" @click="toPath"><i class="fa fa-mail-reply"></i></button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'previousPage',
    data () {
      return {
        bgc: {},
        bgi: {},
        opacity: 0,
        state: {
          mini: []
        },
        backgroundPositionY: -257
      }
    },
    props: ['skin'],
    components: {},
    methods: {
      toPath () {
        this.$router.go(-1)
      },
      init () {
        this.state.mini = ['/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + this.$route.params.lightNovelId + '/viewText/' + this.$route.params.chapterId]
        this.backgroundPositionY = -257
        this.opacity = 0
        this.state.mini.forEach(data => {
          if (this.$route.path === data) {
            this.backgroundPositionY = -88
            this.opacity = 1
          }
        })
        this.bgc = {
          backgroundColor: this.skin.bgc.backgroundColor,
          boxShadow: this.skin.bgc.boxShadow
        }
        this.bgi = {
          backgroundImage: this.skin.bgi.backgroundImage,
          backgroundSize: this.skin.bgi.backgroundSize,
          filter: this.skin.bgi.filter,
          backgroundPosition: '-1576px ' + this.backgroundPositionY + 'px'
        }
      }
    },
    created: function () {
      this.init()
    },
    watch: {
      $route () {
        this.init()
      }
    }
  }
</script>

<style scoped>
  .m-previous-box{
    position: relative;
    width: 50px;
    height: 50px;
  }
  .u-bgc{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .u-bgi{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-repeat: no-repeat;
    transition: .5s .1s;
  }
  .u-mn{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .u-btn{
    width: 100%;
    height: 100%;
    font-size: 18px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    border: 0;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
</style>
