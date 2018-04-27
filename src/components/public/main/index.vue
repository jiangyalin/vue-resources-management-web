<template>
  <div class="g-mn">
    <header class="g-hd">
      <topHeader></topHeader>
      <navigation></navigation>
    </header>
    <div class="g-bd" @scroll="scroll">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import TopHeader from './../../../components/public/topHeader.vue'
  import Navigation from './../../../components/public/navigation.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      topHeader: TopHeader,
      navigation: Navigation
    },
    methods: {
      scroll (e) {
        console.log('ppp', e.target.scrollTop)
      }
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .g-mn{
    width: 100%;
    min-width: 1200px;
    height: 100%;
    background-image: url("./../../../assets/images/public/bg-03.png");
    background-size: 1920px;
    background-position: center -10px;
    background-repeat: no-repeat;
  }
  .g-hd{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 225px;
  }
  .g-bd{
    overflow: auto;
    margin: 0 auto;
    padding-top: 225px;
    width: 1200px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
