<template>
  <div class="m-box">
    <div class="u-bgc" :style="bgc"></div>
    <div class="u-bgi" :style="bgi"></div>
    <div class="u-mn">
      <div class="u-bd">
        <ul class="u-nav">
          <li class="u-li">
            <img class="u-img" src="../../../assets/images/public/logo/miku-01.png">
          </li>
          <li class="u-li" v-for="data in list">
            <a class="u-a" href="javascript:void(0)" @click="to(data.path)">{{data.title}}</a>
          </li>
        </ul>
        <navUser></navUser>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavUser from './navUser.vue'
  export default {
    name: 'topNav',
    data () {
      return {
        list: [{
          title: '主站',
          path: '/'
        }, {
          title: 'P站',
          path: '/'
        }, {
          title: 'B站',
          path: '/'
        }, {
          title: 'A站',
          path: '/'
        }],
        bgc: {},
        bgi: {},
        backgroundPositionY: -10
      }
    },
    props: ['skin'],
    components: {
      navUser: NavUser
    },
    methods: {
      to (path) {
        this.$router.push(path)
      },
      init () {
        this.bgc = {
          backgroundColor: this.skin.bgc.backgroundColor,
          boxShadow: this.skin.bgc.boxShadow
        }
        this.bgi = {
          backgroundImage: this.skin.bgi.backgroundImage,
          backgroundSize: this.skin.bgi.backgroundSize,
          filter: this.skin.bgi.filter,
          backgroundPosition: 'center ' + this.backgroundPositionY + 'px'
        }
      }
    },
    created: function () {
      this.init()
    }
  }
</script>

<style scoped>
  .m-box{
    position: relative;
    width: 100%;
    height: 42px;
  }
  .u-bgc{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .u-bgi{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    transition: .5s .1s;
  }
  .u-mn{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .u-bd{
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }
  .u-nav{
    float: left;
    height: 100%;
  }
  .u-li{
    float: left;
  }
  .u-img{
    padding: 5px;
    width: 42px;
    height: 42px;
    box-sizing: border-box;
  }
  .u-a{
    display: block;
    padding: 0 12px;
    font-size: 12px;
    color: #fff;
    line-height: 42px;
    opacity: .9;
    transition: .3s;
  }
  .u-a:hover{
    background-color: hsla(0, 0%, 100%, .3);
  }
</style>
