<template>
  <div class="m-navigation-box">
    <div class="u-bgc" :style="bgc"></div>
    <div class="u-bgi" :style="bgi"></div>
    <div class="u-mn">
      <ul class="u-list">
        <li class="u-li" v-for="data in navList">
          <a class="u-a" href="javascript:void(0)" @click="toPath(data.path)">{{data.title}}</a>
        </li>
      </ul>
      <search class="m-search" :style="searchStyle"></search>
      <previousPage class="m-previous-page" :skin="skin"></previousPage>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Search from './search.vue'
  import PreviousPage from './previousPage.vue'
  export default {
    name: 'navigation',
    data () {
      return {
        navList: [{
          title: '首页',
          path: '/'
        }, {
          title: '动画',
          path: '/'
        }, {
          title: '漫画',
          path: '/'
        }, {
          title: '轻小说',
          path: '/lightNovel'
        }, {
          title: '插画',
          path: '/'
        }, {
          title: '游戏',
          path: '/'
        }],
        bgc: {},
        bgi: {},
        searchStyle: {},
        opacity: 0,
        width: 340,
        state: {
          mini: []
        },
        backgroundPositionY: -180
      }
    },
    props: ['skin'],
    components: {
      search: Search,
      previousPage: PreviousPage
    },
    methods: {
      toPath (path) {
        this.$router.push('/' + this.$route.params.lang + path)
      },
      init () {
        this.state.mini = ['/' + this.$route.params.lang + '/home', '/' + this.$route.params.lang + '/lightNovel']
        this.backgroundPositionY = -180
        this.searchStyle = {
          opacity: 0,
          width: 0,
          transition: 0.5 + 's ' + 0.1 + 's opacity, 0s 0.6s width'
        }
        let state = true
        this.state.mini.forEach(data => {
          if (this.$route.path === data) state = false
        })
        if (state) {
          this.backgroundPositionY = -10
          this.searchStyle = {
            opacity: 1,
            width: 340 + 'px',
            transition: 0.5 + 's ' + 0.1 + 's opacity'
          }
        }
        this.bgc = {
          backgroundColor: this.skin.bgc.backgroundColor,
          boxShadow: this.skin.bgc.boxShadow
        }
        this.bgi = {
          backgroundImage: this.skin.bgi.backgroundImage,
          backgroundSize: this.skin.bgi.backgroundSize,
          filter: this.skin.bgi.filter,
          backgroundPosition: 'center ' + this.backgroundPositionY + 'px'
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
  .m-navigation-box{
    position: relative;
    width: 100%;
    height: 55px;
  }
  .u-bgc{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .u-bgi{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    transition: .5s .1s;
  }
  .u-mn{
    display: flex;
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    font-size: 16px;
    color: #fff;
    line-height: 55px;
    justify-content: space-between;
    align-items: center;
  }
  .u-list{
    height: 100%;
    font-size: 16px;
    color: #fff;
    line-height: 55px;
  }
  .u-li{
    float: left;
    height: 100%;
  }
  .u-a{
    display: block;
    padding: 0 10px;
    opacity: .9;
    transition: .3s;
  }
  .u-a:hover{
    background-color: hsla(0, 0%, 100%, .3);
  }
  .m-search{
    overflow: hidden;
    position: absolute;
    top: 10px;
    right: 0;
    opacity: 0;
    transition: .5s .1s opacity;
  }
  .m-previous-page{
    transform: translate(65px, 75px);
  }
</style>
