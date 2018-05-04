<template>
  <div class="m-lgn" :style="'background-image: url(' + skin.img + ')'">
    这是登录
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data () {
      return {
        skin: {
          bgc: {
            backgroundColor: 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0.4 + ')',
            boxShadow: 0 + ' ' + 1 + 'px ' + 2 + 'px' + ' rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.1 + ')'
          },
          bgi: {
            backgroundImage: 'url(' + '"http://192.168.17.111:8088/skiin/bg-02.jpg"' + ')',
            backgroundSize: 1920 + 'px',
            filter: 'blur(' + 4 + 'px)'
          },
          img: 'http://192.168.17.111:8088/skiin/bg-02.jpg',
          box: {
            opacity: 0.95,
            backgroundColor: 'rgba(' + 4 + ',' + 18 + ',' + 19 + ',' + 0.9 + ')'
          },
          font: {
            color: [255, 255, 255, 0.95]
          }
        }
      }
    },
    components: {},
    methods: {
    },
    mounted: function () {
    },
    watch: {
    }
  }
</script>

<style scoped>
  .m-lgn{
    width: 100%;
    height: 100%;
    background-size: 1920px;
    background-position: center 0;
  }
</style>

<style>
</style>
