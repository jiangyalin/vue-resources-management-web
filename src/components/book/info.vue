<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-mn">
      <div class="u-tp">
        <div class="u-img-mn">
          <img class="u-img">
        </div>
        <div class="u-info">
          <h2 class="u-h2">某科学的超电磁炮</h2>
          <div class="u-tips">
            <p class="u-tips-p">字数：<span class="u-sn">545</span>万</p>
            <p class="u-tips-p">更新时间：<span class="u-sn">2015-05-05</span></p>
          </div>
          <div class="u-author">
            <p class="u-atr-p">作者：<span class="u-sn">镰池和马</span></p>
            <p class="u-atr-p">插画师：<span class="u-sn">灰村清孝</span></p>
            <p class="u-atr-p">收藏数：<span class="u-sn">251</span></p>
            <p class="u-atr-p">下载数：<span class="u-sn">6651</span></p>
          </div>
          <p class="u-introduction">故事讲述在将“超能力开发”作为学校课程的学园都市将“超能力开发”作为学校课程的学园都市将“超能力开发”作为学校课程的学园都市里，人们每天都在超能力开发上进行相互竞争。根据能力高低不同，可以分为6级，从无能力（level 0）到超能力（level 5）。主角上条当麻是一个无能力者，但并非完全没有能力，他的能力是能够将一切异能之力无效化……</p>
          <div class="u-btn-mn">
            <button class="u-btn" type="button">开始阅读</button>
            <button class="u-btn" type="button">插画</button>
            <button class="u-btn" type="button">下载</button>
          </div>
        </div>
      </div>
      <div class="u-bt">
        <div class="u-line">
          <ve-line
            width="860px"
            height="320px"
            :data="chartData"
            :legend-visible="false"
            :settings="chartSettings"></ve-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const List = (vue, response) => {
    let tableData = []
    tableData = response.data.data.content.map((data) => {
      return {
        id: data._id,
        imgSrc: window.config.upload + data.cover.path + data.cover.name,
        updateTime: '5天前更新至第4卷第3章',
        bookName: data.bookName,
        tips: data.introduction.replace(/\s+/g, '')
      }
    })
    return {
      tableData: tableData,
      total: response.data.data.totalElements
    }
  }
  // 获取轻小说列表
  const GetFictionList = vue => {
    const fiction = new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/lightNovel/fiction',
        params: {
          pageNum: 0,
          pageSize: 10
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
    return fiction
  }
  export default {
    name: 'bookList',
    data () {
      return {
        clientWidth: 0,
        offsetLeft: 0,
        offsetTop: 0,
        uBgStyle: {},
        list: [],
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
        }
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
      // 获取轻小说列表
      const fictionList = GetFictionList(this)

      fictionList.then((resolve) => {
        const list = List(this, resolve)
        this.list = list.tableData
      }).catch((reject) => {
        window.publicFunction.error(reject, this)
      })
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
    height: 90px;
    font-size: 12px;
    line-height: 18px;
    color: rgba(255, 255, 255, .8);
    border-bottom: 1px solid rgba(255, 255, 255, .2);
  }
  .u-btn-mn{
    padding-top: 40px;
    width: 100%;
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
