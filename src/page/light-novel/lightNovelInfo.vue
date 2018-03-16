<template>
  <div class="m-box">
    <div class="m-top">
      <div class="u-info">
        <bookInfo ref="bookInfo"></bookInfo>
      </div>
      <div class="u-rec">
        <ad ref="bookAd"></ad>
      </div>
    </div>
    <div class="u-chapter">
      <chapter ref="bookChapter"></chapter>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BookInfo from './../../components/book/info.vue'
  import Ad from './../../components/book/ad.vue'
  import Chapter from './../../components/book/chapter.vue'
  export default {
    name: 'lightNovelInfo',
    data () {
      return {}
    },
    components: {
      bookInfo: BookInfo,
      ad: Ad,
      chapter: Chapter
    },
    mounted: function () {
      window.onresize = () => {
        return (() => {
          this.$refs.bookInfo.UBgStyle()
          this.$refs.bookAd.UBgStyle()
          this.$refs.bookChapter.UBgStyle()
        })()
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .m-box{
    width: 100%;
  }
  .m-top{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .u-info{
    padding-top: 20px;
    width: 850px;
  }
  .u-rec{
    padding-top: 20px;
    width: 330px;
  }
  .u-chapter{
    padding-top: 20px;
    width: 100%;
  }
</style>
