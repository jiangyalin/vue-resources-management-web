<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-mn" v-html="chapter"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 获取章详情
  const GetChapter = vue => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/lightNovel/chapterInfo',
        params: {
          id: vue.$route.params.chapterId
        },
        headers: {
          'languageCode': vue.$route.params.lang,
          'Authorization': 'Bearer ' + vue.$cookie.get('token')
        }
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
  export default {
    name: '',
    data () {
      return {
        clientWidth: 0,
        offsetLeft: 0,
        offsetTop: 0,
        uBgStyle: {},
        chapter: {}
      }
    },
    components: {},
    methods: {
      UBgStyle () {
        this.clientWidth = document.body.clientWidth
        const width = 1920
        const offsetLeft = this.clientWidth > 1200 ? this.$el.offsetLeft + (width - this.clientWidth) / 2 : this.$el.offsetLeft + (1920 - 1200) / 2
        const offsetTop = this.$el.offsetTop ? this.$el.offsetTop + 9 : 9
        this.uBgStyle = {
          backgroundSize: width + 'px',
          backgroundPosition: -offsetLeft + 'px ' + -offsetTop + 'px'
        }
      }
    },
    mounted: function () {
      this.UBgStyle()
      window.onresize = () => {
        return (() => {
          this.UBgStyle()
        })()
      }
    },
    created: function () {
      // 获取章详细信息
      GetChapter(this).then((resolve) => {
        this.chapter = resolve.data.data.file.content
      }).catch((reject) => {
        window.publicFunction.error(reject, this)
      })
    }
  }
</script>

<style scoped>
  .m-box{
    position: relative;
    margin-top: 25px;
    width: 100%;
    height: 1080px;
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
    background-color: rgba(246, 246, 246, 1);
    border-radius: 5px;
    box-sizing: border-box;
  }
</style>
