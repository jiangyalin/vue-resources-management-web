import lightNovel from './../../../page/light-novel/lightNovel.vue'
import lightNovelInfo from './../../../page/light-novel/lightNovelInfo.vue'
import viewText from './../../../page/light-novel/viewText.vue'

export default [
  {
    path: '',
    component: lightNovel
  },
  {
    path: 'lightNovelInfo/:lightNovelId',
    component: lightNovelInfo
  },
  {
    path: 'lightNovelInfo/:lightNovelId/viewText/:chapterId',
    component: viewText
  }
]
