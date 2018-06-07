<template>
  <div class="m-box">
    <div class="u-bg" :style="bg"></div>
    <div class="u-mn">
      <div class="u-row">
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">类型a盒子背景颜色：</p>
            <div class="u-color-gp">
              <div class="u-color" :style="'background-color: rgba(' + type_a_backgroundColor.rgba.r + ',' + type_a_backgroundColor.rgba.g + ',' + type_a_backgroundColor.rgba.b + ',' + type_a_backgroundColor.rgba.a + ')'"></div>
            </div>
          </div>
          <chrome v-model="type_a_backgroundColor"></chrome>
        </div>
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">类型a盒子阴影大小：</p>
          </div>
          <div class="u-gp-s">
            <p class="u-p">距左位移：</p>
            <input class="u-it-nb" type="number" :value="type_a_boxShadowSize[0]">
          </div>
          <div class="u-gp-s">
            <p class="u-p">距上位移：</p>
            <input class="u-it-nb" type="number" :value="type_a_boxShadowSize[1]">
          </div>
          <div class="u-gp-s">
            <p class="u-p">扩展大小：</p>
            <input class="u-it-nb" type="number" :value="type_a_boxShadowSize[2]">
          </div>
          <div class="u-gp-s">
            <p class="u-p">阴影大小：</p>
            <input class="u-it-nb" type="number" :value="type_a_boxShadowSize[3]">
          </div>
        </div>
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">类型a盒子阴影颜色：</p>
            <div class="u-color-gp">
              <div class="u-color" :style="'background-color: rgba(' + type_a_boxShadowColor.rgba.r + ',' + type_a_boxShadowColor.rgba.g + ',' + type_a_boxShadowColor.rgba.b + ',' + type_a_boxShadowColor.rgba.a + ')'"></div>
            </div>
          </div>
          <chrome v-model="type_a_boxShadowColor"></chrome>
        </div>
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">类型a盒子背景图片：</p>
          </div>
          <div class="u-gp-s">
            <p class="u-p">背景图片选择：</p>
            <vue-core-image-upload
              class="btn btn-primary"
              :crop="upload.crop"
              :cropRatio="upload.cropRatio"
              :headers="upload.headers"
              :text="upload.text"
              @imagechanged="imageChanged"
              @imageuploaded="imageUploaded"
              @errorhandle="errorHandle"
              :data="upload.data"
              :max-file-size="5242880"
              :credentials="upload.credentials"
              :isXhr="upload.isXhr"
              :url="upload.action"></vue-core-image-upload>
          </div>
          <div class="u-gp-s">
            <p class="u-p">背景图片大小：</p>
            <input class="u-it-nb" type="number" :value="type_a_backgroundSize">
          </div>
        </div>
      </div>
      <div class="u-row">
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">类型b盒子背景颜色：</p>
            <div class="u-color-gp">
              <div class="u-color" :style="'background-color: rgba(' + type_b_backgroundColor.rgba.r + ',' + type_b_backgroundColor.rgba.g + ',' + type_b_backgroundColor.rgba.b + ',' + type_b_backgroundColor.rgba.a + ')'"></div>
            </div>
          </div>
          <chrome v-model="type_b_backgroundColor"></chrome>
        </div>
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">类型b盒子背景不透明度：</p>
            <input class="u-it-nb" type="number" :value="type_b_opacity">
          </div>
        </div>
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">类型b盒子字体颜色：</p>
            <div class="u-color-gp">
              <div class="u-color" :style="'background-color: rgba(' + type_b_fontColor.rgba.r + ',' + type_b_fontColor.rgba.g + ',' + type_b_fontColor.rgba.b + ',' + type_b_fontColor.rgba.a + ')'"></div>
            </div>
          </div>
          <chrome v-model="type_b_fontColor"></chrome>
        </div>
        <div class="u-box">
          <div class="u-gp">
            <p class="u-p">网页背景图片：</p>
          </div>
          <div class="u-gp-s">
            <p class="u-p">背景图片选择：</p>
            <vue-core-image-upload
              class="btn btn-primary"
              :crop="upload.crop"
              :cropRatio="upload.cropRatio"
              :headers="upload.headers"
              :text="upload.text"
              @imagechanged="imageChanged"
              @imageuploaded="imageUploaded"
              @errorhandle="errorHandle"
              :data="upload.data"
              :max-file-size="5242880"
              :credentials="upload.credentials"
              :isXhr="upload.isXhr"
              :url="upload.action"></vue-core-image-upload>
          </div>
        </div>
      </div>
      <div class="u-row-s">
        <button class="u-img-btn" type="button">保存</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Chrome } from 'vue-color'
  import VueCoreImageUpload from 'vue-core-image-upload'
  // 上传文件
  const UploadFile = (vue, data) => {
    return new Promise((resolve, reject) => {
      vue.$http({
        method: 'post',
        url: window.config.server + '/api/upload/',
        data,
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
//  const colorRgbToHex = color => '#' + ((1 << 24) + (color[0] << 16) + (color[1] << 8) + color[2]).toString(16).slice(1)
  const colorRgbToHsl = (r, g, b) => {
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = (max + min) / 2
    let s = (max + min) / 2
    let l = (max + min) / 2

    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g: h = (b - r) / d + 2
          break
        case b: h = (r - g) / d + 4
          break
      }
      h /= 6
    }
    return [Math.floor(h * 100), Math.round(s * 100) + '%', Math.round(l * 100) + '%']
  }
  export default {
    name: '',
    data () {
      return {
        bg: {},
        type_a_backgroundColor: {
          hex: '#194d33',
          hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1
          },
          hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1
          },
          rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1
          },
          a: 1
        },
        type_a_boxShadowColor: {
          hex: '#194d33',
          hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1
          },
          hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1
          },
          rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1
          },
          a: 1
        },
        type_a_boxShadowSize: [1, 2, 3, 4],
        type_a_backgroundSize: 2000,
        type_a_backgroundImage: '',
        type_b_backgroundColor: {
          hex: '#194d33',
          hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1
          },
          hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1
          },
          rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1
          },
          a: 1
        },
        type_b_opacity: 0.9,
        type_b_fontColor: {
          hex: '#194d33',
          hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1
          },
          hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1
          },
          rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1
          },
          a: 1
        },
        backgroundImage: '',
        upload: {
          text: '点击选择图片',
          data: {},
          crop: false,
          cropRatio: 'auto',
          credentials: false,
          headers: {
            'languageCode': this.$route.params.lang,
            'Authorization': 'Bearer ' + this.$cookie.get('token')
          },
          isXhr: false,
          action: window.config.upload + '/api/upload',
          src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
        }
      }
    },
    props: ['skin'],
    components: {
      chrome: Chrome,
      'vue-core-image-upload': VueCoreImageUpload
    },
    methods: {
      init () {
        this.bg = {
          backgroundColor: this.skin.box.backgroundColor
        }
      },
      imageChanged (res) {
        const formData = new FormData()
        formData.append('file', res)
        UploadFile(this, formData).then((resolve) => {
          this.type_a_backgroundImage = resolve.data.data.id
          this.backgroundImage = resolve.data.data.id
          this.upload.text = resolve.data.data.id
        }).catch((reject) => {
          window.publicFunction.error(reject, this)
        })
      },
      imageUploaded (res) {
      },
      errorHandle (err) {
        console.log('err', err)
      }
    },
    mounted: function () {
    },
    created: function () {
      this.init()
      console.log('spectra', this.$spectra({r: this.skin.font.color[0], g: this.skin.font.color[1], b: this.skin.font.color[2], a: this.skin.font.color[3]}).hue())
      this.type_b_fontColor = {
        hex: this.$spectra({r: this.skin.font.color[0], g: this.skin.font.color[1], b: this.skin.font.color[2], a: this.skin.font.color[3]}).hex(),
        hsl: {
          h: colorRgbToHsl(this.skin.font.color[0], this.skin.font.color[1], this.skin.font.color[2])[0],
          s: colorRgbToHsl(this.skin.font.color[0], this.skin.font.color[1], this.skin.font.color[2])[1],
          l: colorRgbToHsl(this.skin.font.color[0], this.skin.font.color[1], this.skin.font.color[2])[2],
          a: this.skin.font.color[3]
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: this.skin.font.color[0],
          g: this.skin.font.color[1],
          b: this.skin.font.color[2],
          a: this.skin.font.color[3]
        },
        a: this.skin.font.color[3]
      }
//      console.log('skin', this.skin.font.color)
    }
  }
</script>

<style scoped>
  .m-box{
    position: relative;
    margin-top: 20px;
    width: 1200px;
    height: 700px;
    border-radius: 5px;
  }
  .u-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
  .u-mn{
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 15px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .u-row{
    overflow: auto;
    width: 100%;
  }
  .u-row:nth-of-type(2){
    padding-top: 30px;
  }
  .u-box{
    float: left;
  }
  .u-gp{
    display: flex;
    width: 290px;
    height: 30px;
    line-height: 30px;
  }
  .u-gp-s{
    display: flex;
    padding-top: 10px;
    width: 290px;
    height: 30px;
    color: rgba(255, 255, 255, .9);
    line-height: 30px;
  }
  .u-p{
    padding-right: 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, .9);
  }
  .u-it-nb{
    width: 60px;
    color: rgba(255, 255, 255, .9);
    text-indent: 1em;
    border: 1px solid rgba(255, 255, 255, .9);
    background-color: rgba(0, 0, 0, 0);
  }
  .u-color-gp{
    position: relative;
    margin-top: 2px;
    width: 26px;
    height: 26px;
    border: 1px solid rgba(255, 255, 255, .9);
    background-image: url("./../../assets/images/public/color-backfround-01.png");
    box-sizing: border-box;
  }
  .u-color{
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
  }
  .u-row-s{
    padding-top: 30px;
    width: 100%;
    text-align: center;
  }
  .u-img-btn{
    padding: 0 5px;
    width: 100px;
    color: rgba(255, 255, 255, .9);
    line-height: 28px;
    border: 1px solid rgba(255, 255, 255, .9);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
</style>
