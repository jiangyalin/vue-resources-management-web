<template>
  <div class="g-mn">
    <topHeader :topHeader="topHeader"></topHeader>
    <navigation v-if="navigation.state !== 'none'"></navigation>
    <div class="g-bd">
      <router-view @SetTopHeader="setTopHeader" @SetNavigation="setNavigation"></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import TopHeader from './../../../components/public/topHeader.vue'
  import Navigation from './../../../components/public/navigation.vue'
  export default {
    data () {
      return {
        topHeader: {
          state: 'auto',
          height: 170
        },
        navigation: {
          state: 'auto'
        }
      }
    },
    components: {
      topHeader: TopHeader,
      navigation: Navigation
    },
    methods: {
      setTopHeader (msg) {
        this.topHeader = msg
      },
      setNavigation (msg) {
        this.navigation = msg
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
    min-height: 1400px;
    background-image: url("./../../../assets/images/public/bg-03.png");
    background-size: 1920px;
    background-position: center -10px;
    background-repeat: no-repeat;
  }
  .g-bd{
    margin: 0 auto;
    width: 1200px;
  }
</style>

