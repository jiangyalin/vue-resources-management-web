<template>
  <div class="g-mn">
    <topHeader></topHeader>
    <navigation></navigation>
    <router-view></router-view>
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
    height: 100%;
    min-height: 1400px;
    background-image: url("./../../../assets/images/public/bg-03.png");
    background-size: 1920px;
    background-position: center -10px;
    background-repeat: no-repeat;
  }
</style>

