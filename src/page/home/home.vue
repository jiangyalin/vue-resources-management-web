<template>
  <div class="g-home-mn">
    <div class="m-rec">
      <ban class="m-ban" ref="ban"></ban>
      <recommend class="m-recommend" ref="recommend1" :href="recommendList[0].href" :imgSrc="recommendList[0].imgSrc"></recommend>
      <recommend class="m-recommend" ref="recommend2" :href="recommendList[1].href" :imgSrc="recommendList[1].imgSrc"></recommend>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Ban from './../../components/public/ban/ban.vue'
  import Recommend from './../../components/public/recommend.vue'
  export default {
    data () {
      return {
        clientWidth: 0,
        recommendList: [{
          href: 'javascript:void(0)',
          imgSrc: 'http://localhost:8088/books/1520240687659.png'
        }, {
          href: 'javascript:void(0)',
          imgSrc: 'http://localhost:8088/books/1520241189319.png'
        }]
      }
    },
    components: {
      ban: Ban,
      recommend: Recommend
    },
    methods: {
      CalculateImage () {
        this.clientWidth = document.body.clientWidth
      }
    },
    mounted: function () {
      window.onresize = () => {
        return (() => {
          this.$refs.ban.UBgStyle()
          this.$refs.recommend1.UBgStyle()
          this.$refs.recommend2.UBgStyle()
        })()
      }
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .g-home-mn{
    width: 100%;
    height: 600px;
  }
  .m-rec{
    margin-top: 20px;
    width: 100%;
    height: 600px;
  }
  .m-ban{
    float: left;
  }
  .m-recommend{
    float: left;
    margin-left: 20px;
  }
</style>
