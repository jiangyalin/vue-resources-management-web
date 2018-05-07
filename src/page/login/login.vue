<template>
  <div class="m-lgn" :style="'background-image: url(' + skin.img + ')'">
    <div class="u-mn">
      <img class="u-img" src="./../../assets/images/public/logo/logo-01.png">
      <div class="u-group">
        <i class="fa fa-user-o"></i>
        <input class="u-it" type="text" :value="name" ref="name" @keyup.enter="login">
      </div>
      <div class="u-group">
        <i class="fa fa-unlock-alt"></i>
        <input class="u-it" type="password" :value="pwd" ref="pwd" @keyup.enter="login">
        <i class="fa fa-arrow-circle-o-right" @click="login"></i>
      </div>
      <div class="u-p-gp">
        <p class="u-p">找回密码</p>
        <p class="u-p">去注册</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 用户登录
  const LoginAccount = vue => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'post',
        url: window.config.server + '/api/login',
        data: {
          username: vue.name,
          password: vue.pwd
        },
        headers: {
          'languageCode': vue.$route.params.lang
        }
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
  export default {
    name: 'login',
    data () {
      return {
        name: '',
        pwd: '',
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
      login () {
        this.name = this.$refs.name.value
        this.pwd = this.$refs.pwd.value
        // 登录用户
        LoginAccount(this).then((resolve) => {
          if (resolve.data.code === '200') {
            this.$cookie.set('userId', resolve.data.data.user._id, 7)
            this.$cookie.set('userName', resolve.data.data.user.nickname, 7)
            this.$cookie.set('token', resolve.data.data.token, 7)
            window.setTimeout(() => {
              this.$router.push('/')
            }, 1)
          } else {
            this.$message.info('登录失败,账号或者密码错误请重试！')
          }
        }).catch((reject) => {
          window.publicFunction.error(reject, this)
        })
      }
    },
    mounted: function () {
    },
    watch: {
    }
  }
</script>

<style scoped>
  .m-lgn{
    display: flex;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, .9);
    justify-content: center;
    align-items: center;
    background-size: 1920px;
    background-position: center 0;
  }
  .u-mn{
    display: flex;
    width: 500px;
    height: 350px;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .6);
  }
  .u-img{
    padding: 40px 0;
    width: 220px;
  }
  .u-group{
    display: flex;
    margin-bottom: 20px;
    width: 340px;
    height: 45px;
    line-height: 44px;
    border-bottom: 1px solid rgba(255, 255, 255, .9);
    box-sizing: border-box;
  }
  .u-group .fa{
    width: 40px;
    font-size: 18px;
    line-height: 44px;
    text-align: center;
  }
  .u-it{
    flex: 1;
    height: 44px;
    font-size: 18px;
    color: rgba(255, 255, 255, .9);
    border: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  .fa-arrow-circle-o-right{
    width: 40px;
    cursor: pointer;
  }
  .u-p-gp{
    display: flex;
    width: 340px;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
  }
  .u-p{
    cursor: pointer;
  }
</style>

<style>
</style>
