import home from './home'
import lightNovel from './light-novel'
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
  {
    path: '*',
    component: error
  }
]

export default operator
