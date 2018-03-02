import index from './../../components/login/index.vue'
import login from './../../page/login/login.vue'

export default {
  path: '/:lang/login',
  component: index,
  children: [
    {
      path: '',
      component: login
    }
  ]
}
