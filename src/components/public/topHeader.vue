<template>
  <div class="m-box">
    <topNav></topNav>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopNav from './topNav.vue'
  export default {
    name: 'topHeader',
    data () {
      return {}
    },
    components: {
      topNav: TopNav
    },
    methods: {}
  }
</script>

<style scoped>
  .m-box{
    width: 100%;
    height: 170px;
  }
</style>
