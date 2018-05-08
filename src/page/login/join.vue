<template>
  <div class="m-lgn" :style="'background-image: url(' + skin.img + ')'">
    <div class="u-mn">
      <img class="u-img" src="./../../assets/images/public/logo/logo-01.png">
      <div class="u-group">
        <i class="fa fa-user-o"></i>
        <input class="u-it" type="text" :value="eMail" ref="eMail" @keyup.enter="join" placeholder="请输入邮箱">
      </div>
      <div class="u-group">
        <i class="fa fa-unlock-alt"></i>
        <input class="u-it" type="password" :value="pwd" ref="pwd" @keyup.enter="join" placeholder="请输入密码">
      </div>
      <div class="u-group">
        <i class="fa fa-unlock-alt"></i>
        <input class="u-it" type="password" :value="pwd2" ref="pwd2" @keyup.enter="join" placeholder="请再次输入密码">
        <i class="fa fa-arrow-circle-o-right" @click="join"></i>
      </div>
      <div class="u-p-gp">
        <p class="u-p"></p>
        <p class="u-p" @click="toLogin">去登录</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 用户注册
  const JoinUser = vue => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'post',
        url: window.config.server + '/api/join',
        data: {
          eMail: vue.eMail,
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
    name: 'join',
    data () {
      return {
        eMail: '',
        pwd: '',
        pwd2: ''
      }
    },
    props: ['skin'],
    components: {},
    methods: {
      // 去登录
      toLogin () {
        this.$router.push('/' + this.$route.params.lang + '/login')
      },
      // 数据同步
      dataSync () {
        this.eMail = this.$refs.eMail.value
        this.pwd = this.$refs.pwd.value
        this.pwd2 = this.$refs.pwd2.value
      },
      // 验证
      verification (callback) {
        if (this.eMail === '') {
          this.$message.info('邮箱不能为空')
        } else if (!new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$').test(this.eMail)) {
          this.$message.info('邮箱格式错误')
        } else if (this.pwd === '') {
          this.$message.info('密码不能为空')
        } else if (!new RegExp('^[a-zA-Z0-9_\u4e00-\u9fa5]{6,18}$').test(this.pwd)) {
          this.$message.info('密码应为有数字，字母，下划线组成的6-18位的组合')
        } else if (this.pwd2 !== this.pwd) {
          this.$message.info('两次密码不相同')
        } else {
          callback()
        }
      },
      join () {
        this.dataSync()
        this.verification(() => {
          // 注册用户
          JoinUser(this).then((resolve) => {
            if (resolve.data.code !== '200') return this.$message.info(resolve.data.message)
            this.$message.info('已向你的邮箱发送验证邮件，请查看邮件激活账号')
            this.$router.push('/')
          }).catch((reject) => {
            window.publicFunction.error(reject, this)
          })
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
    height: 400px;
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
