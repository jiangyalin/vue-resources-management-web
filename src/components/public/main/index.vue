<template>
  <div class="g-mn" :style="'background-image: url(' + skin.img + ')'">
    <top_header :skin="skin"></top_header>
    <div class="g-bd" @scroll="scroll" :style="'padding-top: ' + main.top + 'px'">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Navigation from './../header/navigation.vue'
  import Header from './../../../components/public/header/index.vue'
  export default {
    data () {
      return {
        state: {
          mini: []
        },
        main: {
          state: 'auto',
          height: 225,
          top: 225
        },
        miniMain: {
          state: 'mini',
          height: 55,
          top: 55
        },
        initMain: {
          state: 'auto',
          height: 225,
          top: 225
        },
        skin: {
          bgc: {
            backgroundColor: 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0.4 + ')',
            boxShadow: 0 + ' ' + 1 + 'px ' + 2 + 'px' + ' rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.1 + ')'
          },
          bgi: {
            backgroundImage: 'url(' + '"http://192.168.17.111:8088/skiin/bg-03.png"' + ')',
            backgroundSize: 1920 + 'px',
            filter: 'blur(' + 4 + 'px)'
          },
          img: 'http://192.168.17.111:8088/skiin/bg-03.png',
          box: {
            opacity: 0.95
          },
          font: {
            color: [255, 255, 255, 0.95]
          }
        }
      }
    },
    components: {
      navigation: Navigation,
      top_header: Header
    },
    methods: {
      init () {
        this.state.mini = ['/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + this.$route.params.lightNovelId + '/viewText/' + this.$route.params.chapterId]
        this.main = this.initMain
        this.state.mini.forEach(data => {
          if (this.$route.path === data) this.main = this.miniMain
        })
      },
      scroll (e) {
        if (e.target.scrollTop > 225) this.main.height = 42
        if (e.target.scrollTop <= 225) this.main.height = 225
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
  .g-mn{
    display: flex;
    width: 100%;
    min-width: 1200px;
    height: 100%;
    flex-direction: column;
    background-size: 1920px;
    background-position: center -10px;
    background-repeat: no-repeat;
  }
  .g-bd{
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 auto;
    padding-top: 225px;
    width: 1200px;
    height: 100%;
    box-sizing: border-box;
    transition: .5s .1s;
  }
  .g-bd::-webkit-scrollbar{
    width: 0;
    background-color: rgba(255, 255, 255, .0);
  }
</style>
