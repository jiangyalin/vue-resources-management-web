<template>
  <div class="m-box" :style="'height: ' + topHeader.height + 'px'">
    <topNav></topNav>
    <div class="u-mn" v-if="topHeader.state !== 'mini'">
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
      }
    },
    props: ['topHeader'],
    components: {
      topNav: TopNav,
      search: Search
    },
    methods: {},
    created: function () {
    },
    watch: {
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
