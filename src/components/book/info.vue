<template>
  <div class="m-box">
    <div class="u-bg" :style="bg"></div>
    <!--<div class="u-bg-after" :style="uBgStyle"></div>-->
    <div class="u-mn">
      <div class="u-tp">
        <div class="u-img-mn">
          <img class="u-img" :src="book.imgSrc">
        </div>
        <div class="u-info">
          <h2 class="u-h2">{{book.name}}</h2>
          <div class="u-tips">
            <p class="u-tips-p">字数：<span class="u-sn">545</span>万</p>
            <p class="u-tips-p">更新时间：<span class="u-sn">{{book.updateTime}}</span></p>
          </div>
          <div class="u-author">
            <p class="u-atr-p">作者：<span class="u-sn">{{book.author}}</span></p>
            <p class="u-atr-p">插画师：<span class="u-sn">{{book.illustrator}}</span></p>
            <p class="u-atr-p">点击量：<span class="u-sn">{{book.click}}</span></p>
            <p class="u-atr-p">收藏量：<span class="u-sn">{{book.collect}}</span></p>
            <p class="u-atr-p">下载量：<span class="u-sn">{{book.down}}</span></p>
          </div>
          <p class="u-introduction">{{book.introduction}}</p>
          <div class="u-btn-mn">
            <button class="u-btn" type="button" @click="viewText">开始阅读</button>
            <button class="u-btn" type="button">插画</button>
            <button class="u-btn" type="button" @click="down">下载</button>
          </div>
        </div>
      </div>
      <div class="u-bt">
        <div class="u-line">
          <ve-line width="860px" height="320px" :data="chartData" :legend-visible="false" :settings="chartSettings"></ve-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 获取轻小说列表
  const GetFiction = vue => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/lightNovel/fictionInfo',
        params: {
          id: vue.$route.params.lightNovelId
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
  // 获取第一章
  const GetChapterOne = vue => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/lightNovel/chapter/one',
        params: {
          book: vue.$route.params.lightNovelId
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
  // 获取轻小说统计
  const GetStatistics = vue => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/basis/statistics',
        params: {
          id: vue.$route.params.lightNovelId,
          type: 'book'
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
    name: 'bookList',
    data () {
      return {
        clientWidth: 0,
        offsetLeft: 0,
        offsetTop: 0,
        uBgStyle: {},
        book: {
          name: '',
          author: '',
          illustrator: '',
          introduction: '',
          imgSrc: '',
          updateTime: '',
          collect: '',
          down: ''
        },
        chapterOne: '',
        chartData: {
          columns: ['时间', '收藏数'], // 10-100
          rows: [{ '时间': '2016-01-01', '收藏数': 81 },
            { '时间': '2016-02-01', '收藏数': 53 },
            { '时间': '2016-03-01', '收藏数': 23 },
            { '时间': '2016-04-01', '收藏数': 11 },
            { '时间': '2016-05-01', '收藏数': 44 },
            { '时间': '2016-06-01', '收藏数': 64 },
            { '时间': '2016-07-01', '收藏数': 70 },
            { '时间': '2016-08-01', '收藏数': 59 },
            { '时间': '2016-09-01', '收藏数': 86 },
            { '时间': '2016-10-01', '收藏数': 78 },
            { '时间': '2016-11-01', '收藏数': 12 },
            { '时间': '2016-12-01', '收藏数': 48 }]
        },
        chartSettings: {
          stack: { '售价': ['成本', '利润'] },
          area: true,
          lineStyle: {
            normal: {
              color: '#69acf0' // 连线颜色
            }
          },
          areaStyle: {
            normal: {
              color: 'rgba(140, 193, 242, 0.2)' // 连线颜色
            }
          },
          itemStyle: {
            normal: {
              color: '#f09b45'
            }
          }
        },
        bg: {}
      }
    },
    props: ['skin'],
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
      },
      down () {
        window.open(window.config.upload + '/api/download/' + this.book.file, '_self')
      },
      viewText () {
        this.$router.push('/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + this.$route.params.lightNovelId + '/viewText/' + this.chapterOne)
      },
      init () {
        this.bg = {
          backgroundColor: this.skin.box.backgroundColor
        }
        this.book = {}
        // 获取轻小说列表
        GetFiction(this).then((resolve) => {
          this.book = {
            name: resolve.data.data.name,
            author: resolve.data.data.author,
            illustrator: resolve.data.data.illustrator,
            introduction: resolve.data.data.introduction.replace(/\s+/g, ''),
            imgSrc: window.config.upload + resolve.data.data.cover.path + resolve.data.data.cover.name,
            file: resolve.data.data.file,
            updateTime: this.$moment(resolve.data.data.updateTime).format('YYYY-MM-DD HH:mm'),
            collect: '',
            down: ''
          }
          return {}
        }).then((resolve) => {
          // 获取轻小说统计
          GetStatistics(this).then((resolve) => {
            this.book.collect = resolve.data.data.collect
            this.book.down = resolve.data.data.down
            this.book.click = resolve.data.data.click
          }).catch((reject) => {
            window.publicFunction.error(reject, this)
          })
        }).catch((reject) => {
          window.publicFunction.error(reject, this)
        })

        // 获取第一章
        GetChapterOne(this).then((resolve) => {
          this.chapterOne = resolve.data.data._id
        }).catch((reject) => {
          window.publicFunction.error(reject, this)
        })
      }
    },
    mounted: function () {
      this.UBgStyle()
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
  .m-box{
    position: relative;
    width: 850px;
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
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  }
  .u-bg-after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: url("./../../assets/images/public/bg-03.png");
    background-size: 1920px;
    background-position: 0 -255px;
    background-repeat: no-repeat;
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
  .u-tp{
    display: flex;
    padding: 35px 20px 20px 25px;
    width: 100%;
    height: 380px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    box-sizing: border-box;
  }
  .u-img-mn{
    width: 240px;
    height: 320px;
  }
  .u-img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .u-info{
    padding-left: 25px;
    flex: 1;
    box-sizing: border-box;
  }
  .u-h2{
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    color: rgba(255, 255, 255, .9);
  }
  .u-tips{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: rgba(255, 255, 255, .9);
  }
  .u-tips-p{
    padding-right: 30px;
  }
  .u-author{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: rgba(255, 255, 255, .9);
  }
  .u-atr-p{
    padding-right: 30px;
  }
  .u-introduction{
    overflow: hidden;
    display: -webkit-box;
    height: 72px;
    font-size: 12px;
    line-height: 18px;
    text-indent: 2em;
    color: rgba(255, 255, 255, .8);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .u-btn-mn{
    overflow: hidden;
    margin-top: 18px;
    padding-top: 40px;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, .2);
  }
  .u-btn{
    float: left;
    margin-right: 10px;
    width: 110px;
    height: 35px;
    font-size: 16px;
    line-height: 35px;
    border: 0;
    background-color: rgba(255, 255, 255, .8);
    cursor: pointer;
  }
  .u-bt{
    padding: 10px 25px;
    width: 100%;
    height: 220px;
    box-sizing: border-box;
  }
  .u-line{
    overflow: hidden;
    width: 800px;
    height: 200px;
  }
</style>

<style>
  .ve-line{
    transform: translateX(-32px) translateY(-50px);
  }
</style>
