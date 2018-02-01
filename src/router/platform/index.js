import home from './home'
import operateCenter from './operate-center'
import financialCenter from './financial-center'
import systemManagement from './system-management'
import error from './../../components/error/404.vue'

const platform = [
  {
    path: '/',
    redirect: '/zh-cn/home/forwardNews/forwardNewsList'
  },
  {
    path: '/:lang',
    redirect: '/:lang/home/forwardNews/forwardNewsList'
  },
  home,
  operateCenter,
  financialCenter,
  systemManagement,
  {
    path: '*',
    component: error
  }
]

export default platform
