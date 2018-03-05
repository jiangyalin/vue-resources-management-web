<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <ul class="u-list">
      <li class="u-li" v-for="data in navList">
        <a class="u-a" href="javascript:void(0)" @click="toPath(data.path)">{{data.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    data () {
      return {
        navList: [{
          title: '首页',
          path: '/'
        }, {
          title: '动画',
          path: '/'
        }, {
          title: '漫画',
          path: '/'
        }, {
          title: '轻小说',
          path: '/lightNovel'
        }, {
          title: '游戏',
          path: '/'
        }]
      }
    },
    components: {},
    methods: {
      toPath (path) {
        this.$router.push('/' + this.$route.params.lang + path)
      }
    }
  }
</script>

<style scoped>
  .m-box{
    position: relative;
    width: 100%;
    height: 55px;
  }
  .u-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0,0%,100%,.4);
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
  .u-bg:after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-image: url("./../../assets/images/public/bg-03.png");
    background-size: 100%;
    background-position: center -180px;
    background-repeat: no-repeat;
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }
  .u-list{
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    font-size: 16px;
    color: #fff;
    line-height: 55px;
  }
  .u-li{
    float: left;
    height: 100%;
  }
  .u-a{
    display: block;
    padding: 0 10px;
    opacity: .9;
    transition: .3s;
  }
  .u-a:hover{
    background-color: hsla(0, 0%, 100%, .3);
  }
</style>
