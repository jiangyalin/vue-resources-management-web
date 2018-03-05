<template>
  <div class="m-box">
    <div class="u-bg"></div>
    <div class="u-mn">
      <div class="u-bd">
        <ul class="u-nav">
          <li class="u-li">
            <img class="u-img" src="../../assets/images/public/logo/miku-01.png">
          </li>
          <li class="u-li">
            <a class="u-a" href="javascript:void(0)">主站</a>
          </li>
          <li class="u-li">
            <a class="u-a" href="javascript:void(0)">P站</a>
          </li>
          <li class="u-li">
            <a class="u-a" href="javascript:void(0)">B站</a>
          </li>
          <li class="u-li">
            <a class="u-a" href="javascript:void(0)">A站</a>
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
      }
    },
    components: {
      navUser: NavUser
    },
    methods: {
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .m-box{
    position: relative;
    width: 100%;
    height: 42px;
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
    background-position: center -10px;
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
