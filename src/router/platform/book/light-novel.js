import fictionList from './../../../page/book/light-novel/fictionList.vue'
import fictionAdd from './../../../page/book/light-novel/fictionAdd.vue'

export default [
  {
    path: 'lightNovel/fictionList',
    meta: {
      requireAuth: true
    },
    component: fictionList
  },
  {
    path: 'lightNovel/fictionAdd',
    meta: {
      requireAuth: true
    },
    component: fictionAdd
  }
]
