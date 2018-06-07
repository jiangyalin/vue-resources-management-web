<template>
  <div class="g-mn" :style="'background-image: url(' + skin.img + ')'">
    <top_header :skin="skin" :headerState="header"></top_header>
    <div class="g-bd" :style="'padding-top: ' + main.top + 'px'" v-scroll="scroll">
      <router-view :skin="skin"></router-view>
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
          top: 225
        },
        miniMain: {
          state: 'mini',
          top: 55
        },
        initMain: {
          state: 'auto',
          top: 225
        },
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
        },
        scrollTop: 0,
        header: true
      }
    },
    components: {
      navigation: Navigation,
      top_header: Header
    },
    methods: {
      init () {
        this.state.mini = ['/' + this.$route.params.lang + '/home', '/' + this.$route.params.lang + '/lightNovel', '/' + this.$route.params.lang + '/set/skin']
        this.main = this.initMain
        let state = true
        this.state.mini.forEach(data => {
          if (this.$route.path === data) state = false
        })
        if (state) this.main = this.miniMain
      },
      scroll (e) {
        if (e.target.scrollTop > this.scrollTop) {
          if (e.target.scrollTop > 100) this.header = false
        } else {
          this.header = true
        }
        this.scrollTop = e.target.scrollTop
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
