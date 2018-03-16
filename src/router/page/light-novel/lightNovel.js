import lightNovel from './../../../page/light-novel/lightNovel.vue'
import lightNovelInfo from './../../../page/light-novel/lightNovelInfo.vue'

export default [
  {
    path: '',
    // meta: {
    //   requireAuth: true
    // },
    component: lightNovel
  },
  {
    path: 'lightNovelInfo/:lightNovelId',
    // meta: {
    //   requireAuth: true
    // },
    component: lightNovelInfo
  }
]
