<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-bg-after" :style="uBgStyle"></div>
    <div class="u-mn">
      <ul class="u-tt-list">
        <li class="u-tt-li" v-for="data in list">
          <h2 class="u-h2">{{data.title}}</h2>
          <ul class="u-list">
            <li class="u-li" v-for="node in data.node">
              <p class="u-p" @click="viewText(node.id)">{{node.title}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 获取轻小说卷列表
  const GetVolume = vue => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/lightNovel/chapter',
        params: {
          book: vue.$route.params.lightNovelId,
          page: 0
        },
        headers: {
          'languageCode': vue.$route.params.lang,
          'Authorization': 'Bearer ' + vue.$cookie.get('token')
        }
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
  export default {
    name: 'chapter',
    data () {
      return {
        clientWidth: 0,
        offsetLeft: 0,
        offsetTop: 0,
        uBgStyle: {},
        list: []
      }
    },
    components: {},
    methods: {
      UBgStyle () {
        this.clientWidth = document.body.clientWidth
        const width = 1920
        const offsetLeft = this.clientWidth > 1200 ? this.$el.offsetLeft + (width - this.clientWidth) / 2 : this.$el.offsetLeft + (1920 - 1200) / 2
        const offsetTop = this.$el.offsetTop ? this.$el.offsetTop + 9 : 9
        this.uBgStyle = {
          backgroundSize: width + 'px',
          backgroundPosition: -offsetLeft + 'px ' + -offsetTop + 'px'
        }
      },
      viewText (id) {
        this.$router.push('/' + this.$route.params.lang + '/lightNovel/lightNovelInfo/' + this.$route.params.lightNovelId + '/viewText/' + id)
      },
      init () {
        this.list = []
        // 获取轻小说卷列表
        GetVolume(this).then((resolve) => {
          let sequence = -1
          let index = -1
          let list = []
          resolve.data.data.content.forEach((data) => {
            if (sequence !== data.volume.sequence) {
              sequence = data.volume.sequence
              index++
              list.push({
                title: '第' + this.$nzh.encodeS(data.volume.sequence) + '卷 ' + data.volume.name,
                node: []
              })
            }
            list[index].node.push({
              id: data._id,
              title: '第' + this.$nzh.encodeS(data.sequence) + '章 ' + data.name
            })
          })
          this.list = list
        }).catch((reject) => {
          window.publicFunction.error(reject, this)
        })
      }
    },
    mounted: function () {
      this.UBgStyle()
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
  .m-box{
    position: relative;
    width: 1200px;
    height: 600px;
    border-radius: 5px;
  }
  .u-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  }
  .u-bg-after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 5px;
    background-image: url("./../../assets/images/public/bg-03.png");
    background-size: 1920px;
    background-position: 0 -255px;
    background-repeat: no-repeat;
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }
  .u-mn{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .u-tt-list{
    padding: 10px 30px;
    width: 100%;
    box-sizing: border-box;
  }
  .u-tt-li{
    width: 100%;
    font-size: 14px;
    line-height: 40px;
  }
  .u-h2{
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: rgba(255, 255, 255, .9);
    /*border-bottom: 1px dashed rgba(255, 255, 255, .4);*/
  }
  .u-list{
    overflow: auto;
    width: 100%;
    color: rgba(255, 255, 255, .9);
  }
  .u-li{
    float: left;
    padding-left: 40px;
    width: 25%;
    border-bottom: 1px dashed rgba(255, 255, 255, .4);
    box-sizing: border-box;
  }
</style>
