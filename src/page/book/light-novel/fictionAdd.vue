<template>
  <div class="m-odr"
       v-loading="loading">
    <transition name="el-fade-in-linear">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        size="mini"
        class="demo-ruleForm">
        <el-form-item style="width: 50%;float: left;" label="书籍名称" prop="bookName">
          <el-input v-model="ruleForm.bookName"></el-input>
        </el-form-item>
        <el-form-item style="width: 50%;float: left;" label="地区" prop="area">
          <el-select style="width: 100%;" v-model="ruleForm.area">
            <el-option
              v-for="item in areaOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="width: 50%;float: left;" label="发售时间" prop="releaseTime">
          <el-date-picker
            v-model="ruleForm.releaseTime"
            type="date">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="width: 50%;float: left;" label="作者" prop="author">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item style="width: 50%;float: left;" label="插画师" prop="illustrator">
          <el-input v-model="ruleForm.illustrator"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%;float: left;" >
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  // 添加渠道
  const AddChannel = vue => {
    const channel = new Promise((resolve, reject) => {
      vue.$http({
        method: 'post',
        url: window.config.server + '/api/lightNovel/fiction',
        data: vue.ruleForm,
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
    return channel
  }
  export default {
    data () {
      return {
        props: {
          value: 'label',
          children: 'cities'
        },
        ruleForm: {
          bookName: '', // 书籍名称
          area: '0', // 地区
          releaseTime: this.$moment(), // 发售时间
          author: '', // 作者
          illustrator: '' // 插画师
        },
        rules: {
          bookName: [
            { required: true, message: '请输入书籍名称', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' },
            { pattern: /\S+/, message: '不能全为空格' }
          ],
          area: [
            { required: true, message: '请选择地区', trigger: 'blur' }
          ],
          releaseTime: [
            { required: true, message: '请输选择发售时间', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '请输入作者名称', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' },
            { pattern: /\S+/, message: '不能全为空格' }
          ],
          illustrator: [
            { required: true, message: '请输入插画师名称', trigger: 'blur' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' },
            { pattern: /\S+/, message: '不能全为空格' }
          ]
        },
        areaOptions: [{
          value: '0',
          label: '日本'
        }, {
          value: '1',
          label: '中国'
        }],
        stateOptions: [{
          value: '0',
          label: '未激活'
        }, {
          value: '1',
          label: '激活'
        }],
        loading: false
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 添加渠道
            const Channel = AddChannel(this)

            Channel.then((resolve) => {
              if (resolve.data.code === '200') {
                this.$confirm('创建渠道成功', '提示', {
                  confirmButtonText: '确定',
                  showCancelButton: false,
                  type: 'success'
                }).then(() => {
                  this.$router.push('/' + this.$route.params.lang + '/operateCenter/channel/channelList')
                })
              }
            }).catch((reject) => {
              window.publicFunction.error(reject, this)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    },
    created: function () {}
  }
</script>

<style scoped>
  .m-odr{
    overflow: auto;
    padding: 30px 30px 0 0;
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
</style>
