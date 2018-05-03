<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-mn">
      <div class="u-tt">
        <h2 class="u-h2">排行榜</h2>
      </div>
      <div class="u-ct">
        <ul class="u-list">
          <li class="u-li" :class="{active: data.active}" v-for="(data, index) in list" @mouseover="hover($event, index)">
            <p class="u-idx" v-if="!data.active">{{index + 1}}</p>
            <h4 class="u-h4" v-if="!data.active">{{data.name}}</h4>
            <p class="u-pop-s" v-if="!data.active">人气：<span>{{data.pop}}</span></p>
            <div class="u-img-gp" v-if="data.active">
              <img class="u-img" :src="data.imgSrc" @click="to(data.id)">
            </div>
            <div class="u-fr" v-if="data.active">
              <h3 class="u-h3">{{data.name}}</h3>
              <p class="u-tips">{{data.tips}}</p>
              <p class="u-pop">人气：<span>{{data.pop}}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 获取排行榜
  const GetBookTop = (vue) => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/lightNovel/fictionTopList',
        params: {
          size: 12,
          type: 'book',
          sort: 'click'
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
  // 获取文件详情
  const GetFile = (vue, id) => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/file/' + id,
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
    name: 'bookTop',
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
      hover (ev, index) {
        this.list = this.list.map((data, index2) => {
          data.active = index === index2
          return {
            ...data
          }
        })
      },
      to (id) {
        this.$router.push('/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + id)
        SetClickRecords(this, id)
      }
    },
    mounted: function () {
      this.UBgStyle()
    },
    created: function () {
      // 获取轻小说列表
      const bookTop = GetBookTop(this)

      bookTop.then((resolve) => {
        this.list = resolve.data.data.content.map(data => {
          return {
            id: data.book._id,
            active: false,
            imgSrc: data.book.cover,
            name: data.book.name,
            tips: data.book.introduction.replace(/\s+/g, ''),
            pop: data.click
          }
        })
        return {}
      }).then(() => {
        this.list.forEach((data, index) => {
          GetFile(this, data.imgSrc).then((resolve) => {
            this.list[index].imgSrc = window.config.upload + resolve.data.data.path + resolve.data.data.name
          }).catch((reject) => {
            window.publicFunction.error(reject, this)
          })
        })
        this.list[0].active = true
      }).catch((reject) => {
        window.publicFunction.error(reject, this)
      })
    }
  }
</script>

<style scoped>
  .m-box{
    position: relative;
    width: 330px;
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
    padding: 0 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .u-tt{
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: rgba(255, 255, 255, .9);
    line-height: 50px;
  }
  .u-ct{
    width: 100%;
  }
  .u-list{
    padding: 0 10px;
    width: 100%;
    box-sizing: border-box;
  }
  .u-li{
    display: flex;
    width: 100%;
    height: 35px;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
  }
  .u-li .u-idx{
    margin: 10px 10px 10px 0;
    width: 15px;
    height: 15px;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: rgba(255, 255, 255, .8);
    background-color: rgba(44, 44, 44, 1);
  }
  .u-li .u-h4{
    flex: 1;
    height: 35px;
    font-size: 12px;
    font-weight: 500;
    line-height: 35px;
    color: rgba(255, 255, 255, .8);
  }
  /*.u-li .u-img{*/
    /*display: none;*/
  /*}*/
  /*.u-li .u-fr{*/
    /*display: none;*/
  /*}*/
  .u-li:nth-of-type(1) .u-idx{
    color: rgba(0, 0, 0, .8);
    background-color: rgba(249, 249, 249, 1);
  }
  .u-li:nth-of-type(2) .u-idx{
    color: rgba(0, 0, 0, .8);
    background-color: rgba(249, 249, 249, 1);
  }
  .u-li:nth-of-type(3) .u-idx{
    color: rgba(0, 0, 0, .8);
    background-color: rgba(249, 249, 249, 1);
  }
  .u-li .u-pop-s{
    font-size: 12px;
    line-height: 35px;
    color: rgba(255, 255, 255, .8);
  }
  .u-li .u-img-gp{
    position: relative;
    width: 90px;
    height: 120px;
    border: 1px solid rgba(255, 255, 255, .9);
    box-sizing: border-box;
  }
  .u-li:nth-of-type(1) .u-img-gp:after{
    position: absolute;
    top: -25px;
    left: -25px;
    width: 0;
    height: 0;
    content: '';
    border: 25px solid rgba(0, 0, 0, 0);
    border-left-color: rgba(209, 18, 0, 1);
    transform: rotate(-135deg);
  }
  .u-li:nth-of-type(1) .u-img-gp:before{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 20px;
    height: 20px;
    content: '1';
    font-size: 12px;
    color: rgba(255, 255, 255, .9);
    text-align: center;
    line-height: 20px;
  }
  .u-li:nth-of-type(2) .u-img-gp:after{
    position: absolute;
    top: -25px;
    left: -25px;
    width: 0;
    height: 0;
    content: '';
    border: 25px solid rgba(0, 0, 0, 0);
    border-left-color: rgba(255, 126, 0, 1);
    transform: rotate(-135deg);
  }
  .u-li:nth-of-type(2) .u-img-gp:before{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 20px;
    height: 20px;
    content: '2';
    font-size: 12px;
    color: rgba(255, 255, 255, .9);
    text-align: center;
    line-height: 20px;
  }
  .u-li:nth-of-type(3) .u-img-gp:after{
    position: absolute;
    top: -25px;
    left: -25px;
    width: 0;
    height: 0;
    content: '';
    border: 25px solid rgba(0, 0, 0, 0);
    border-left-color: rgba(255, 186, 0, 1);
    transform: rotate(-135deg);
  }
  .u-li:nth-of-type(3) .u-img-gp:before{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 20px;
    height: 20px;
    content: '3';
    font-size: 12px;
    color: rgba(255, 255, 255, .9);
    text-align: center;
    line-height: 20px;
  }
  .active{
    padding: 10px 0;
    height: 140px;
    box-sizing: border-box;
  }
  .active .u-img{
    width: 100%;
    height: 100%;
  }
  .active .u-fr{
    padding-left: 10px;
    flex: 1;
  }
  .active .u-h3{
    padding-bottom: 10px;
    height: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: rgba(255, 255, 255, .8);
  }
  .active .u-tips{
    overflow: hidden;
    margin-bottom: 10px;
    height: 36px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: rgb(207, 207, 207);
  }
  .active .u-pop{
    padding: 20px 0;
    height: 20px;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: rgb(207, 207, 207);
  }
</style>
