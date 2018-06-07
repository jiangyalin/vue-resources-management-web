<template>
  <div class="m-box">
    <img class="u-img" src="../../../assets/images/public/user/user-01.jpg">
    <ul class="u-list">
      <li class="u-li" v-for="data in nav">
        <p class="u-a" @click="toPath(data.href)">{{data.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'navUser',
    data () {
      return {
        nav: [{
          title: '消息',
          href: '/'
        }, {
          title: '收藏',
          href: '/'
        }, {
          title: '历史',
          href: '/'
        }, {
          title: '皮肤',
          href: '/set/skin'
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
    float: right;
    width: auto;
    height: 42px;
  }
  .u-img{
    float: left;
    margin-top: 3px;
    padding: 0 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .u-list{
    float: left;
    height: 100%;
  }
  .u-li{
    float: left;
  }
  .u-a{
    display: block;
    padding: 0 12px;
    font-size: 12px;
    color: #fff;
    line-height: 42px;
    opacity: .9;
    transition: .3s;
    cursor: pointer;
  }
  .u-a:hover{
    background-color: hsla(0, 0%, 100%, .3);
  }
</style>
