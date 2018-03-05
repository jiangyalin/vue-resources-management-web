<template>
  <div class="m-box">
    <topNav></topNav>
    <div class="u-mn">
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
      return {}
    },
    components: {
      topNav: TopNav,
      search: Search
    },
    methods: {}
  }
</script>

<style scoped>
  .m-box{
    width: 100%;
    height: 170px;
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
