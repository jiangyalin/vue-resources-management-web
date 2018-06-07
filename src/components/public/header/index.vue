<template>
  <header class="g-hd" :style="'background-image: url(' + skin.img + ')'">
    <div class="m-box" :style="'height: ' + header.height + 'px; opacity:' + header.opacity">
      <topNav :skin="skin"></topNav>
      <div class="u-mn" v-if="header.state !== 'mini'">
        <img class="u-logo" src="../../../assets/images/public/logo/logo-01.png">
        <search class="m-search"></search>
      </div>
    </div>
    <navigation :skin="skin"></navigation>
  </header>
</template>

<script type="text/ecmascript-6">
  import Navigation from './navigation.vue'
  import TopNav from './topNav.vue'
  import Search from './search.vue'
  export default {
    name: '',
    data () {
      return {
        state: {
          mini: []
        },
        header: {
          state: 'auto',
          height: 170,
          opacity: 1
        },
        miniHeader: {
          state: 'mini',
          height: 0,
          opacity: 0
        },
        initHeader: {
          state: 'auto',
          height: 170,
          opacity: 1
        }
      }
    },
    props: ['skin'],
    components: {
      navigation: Navigation,
      topNav: TopNav,
      search: Search
    },
    methods: {
      init () {
        this.state.mini = ['/' + this.$route.params.lang + '/home', '/' + this.$route.params.lang + '/lightNovel', '/' + this.$route.params.lang + '/set/skin']
        this.header = this.initHeader
        let state = true
        this.state.mini.forEach(data => {
          if (this.$route.path === data) state = false
        })
        if (state) this.header = this.miniHeader
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
  .g-hd{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    min-width: 1200px;
    background-image: url("./../../../assets/images/public/bg-03.png");
    background-size: 1920px;
    background-position: center -10px;
    background-repeat: no-repeat;
    transition: .5s;
  }
  .m-box{
    overflow: hidden;
    width: 100%;
    height: 170px;
    opacity: 1;
    transition: .5s .1s;
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
