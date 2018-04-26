<template>
  <div class="g-mn">
    <topHeader></topHeader>
    <navigation></navigation>
    <div class="g-bd">
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

