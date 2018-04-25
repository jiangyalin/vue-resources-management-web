import lightNovel from './../../../page/light-novel/lightNovel.vue'
import lightNovelInfo from './../../../page/light-novel/lightNovelInfo.vue'
import viewText from './../../../page/light-novel/viewText.vue'

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
  },
  {
    path: 'lightNovelInfo/:lightNovelId/viewText/:chapterId',
    // meta: {
    //   requireAuth: true
    // },
    component: viewText
  }
]
