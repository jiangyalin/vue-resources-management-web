<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-mn">
      <div class="u-tt">
        <h2 class="u-h2">最近更新</h2>
        <p class="u-more">更多>></p>
      </div>
      <div class="u-ct">
        <ul class="u-list">
          <li class="u-li" v-for="data in list">
            <div class="u-img-group" @click="to(data.id)">
              <img class="u-img" :src="data.imgSrc">
              <p class="u-update-time">{{data.updateTime}}</p>
            </div>
            <p class="u-book-tt">{{data.name}}</p>
            <p class="u-tips">{{data.tips}}</p>
          </li>
        </ul>
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
        name: data.name,
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
  // 纪录点击
  const SetClickRecords = (vue, id) => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/basis/statistics/click/book/' + id,
        params: {},
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
        list: []
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
      },
      to (path) {
//        window.open(window.config.domainName + '#/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + path)
        this.$router.push('/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + path)

        SetClickRecords(this, path)
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
    padding: 0 20px 0 5px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .u-tt{
    display: flex;
    padding: 0 0 0 20px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: rgba(255, 255, 255, .9);
    justify-content: space-between;
    box-sizing: border-box;
  }
  .u-h2{
    font-size: 16px;
    font-weight: 500;
  }
  .u-more{
    font-size: 14px;
    color: rgba(255, 255, 255, .7);
    cursor: pointer;
  }
  .u-more:hover{
    color: rgba(255, 255, 255, .9);
  }
  .u-ct{
    width: 100%;
    height: 550px;
  }
  .u-list{
    width: 100%;
    height: 100%;
  }
  .u-li{
    float: left;
    padding-left: 15px;
    padding-bottom: 15px;
    width: 150px;
    height: 260px;
  }
  .u-img-group{
    position: relative;
    width: 100%;
    height: 200px;
    border: 1px solid rgba(255, 255, 255, .9);
    box-sizing: border-box;
  }
  .u-img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .u-update-time{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 5px 0 5px;
    width: 100%;
    height: 32px;
    font-size: 12px;
    line-height: 22px;
    color: rgba(255, 255, 255, .9);
    text-align: right;
    background: -webkit-linear-gradient(transparent,rgba(0, 0, 0, .6));
    box-sizing: border-box;
  }
  .u-book-tt{
    overflow: hidden;
    padding-top: 4px;
    width: 100%;
    font-size: 14px;
    color: rgba(255, 255, 255, .9);
    line-height: 26px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .u-tips{
    overflow: hidden;
    width: 100%;
    height: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, .7);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
