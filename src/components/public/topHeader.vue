<template>
  <div class="m-box" :style="'height: ' + header.height + 'px'">
    <topNav></topNav>
    <div class="u-mn" v-if="header.state !== 'mini'">
      <img class="u-logo" src="./../../assets/images/public/logo/logo-01.png">
      <search class="m-search"></search>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopNav from './topNav.vue'
  import Search from './search.vue'
  export default {
    name: 'topHeader',
    data () {
      return {
        state: {
          mini: []
        },
        header: {
          state: 'auto',
          height: 170
        },
        miniHeader: {
          state: 'mini',
          height: 42
        },
        initHeader: {
          state: 'auto',
          height: 170
        }
      }
    },
    components: {
      topNav: TopNav,
      search: Search
    },
    methods: {
      init () {
        this.state.mini = ['/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + this.$route.params.lightNovelId + '/viewText/' + this.$route.params.chapterId]
        this.header = this.initHeader
        this.state.mini.forEach(data => {
          if (this.$route.path === data) this.header = this.miniHeader
        })
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
  .m-box{
    width: 100%;
  }
  .u-mn{
    display: flex;
    margin: 0 auto;
    width: 1200px;
    height: 128px;
    justify-content: space-between;
    align-items: center;
  }
  .u-logo{
    padding-top: 20px;
    padding-left: 40px;
    height: 30px;
  }
  .m-search{
    padding-top: 52px;
  }
</style>
