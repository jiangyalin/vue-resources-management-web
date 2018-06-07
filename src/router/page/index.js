import home from './home'
import lightNovel from './light-novel'
import set from './set'
import error from './../../components/error/404.vue'

const operator = [
  {
    path: '/',
    redirect: '/zh-cn/home'
  },
  {
    path: '/:lang',
    redirect: '/:lang/home'
  },
  home,
  lightNovel,
  set,
  {
    path: '*',
    component: error
  }
]

export default operator
