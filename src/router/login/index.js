import index from './../../components/login/index.vue'
import login from './../../page/login/login.vue'
import join from './../../page/login/join.vue'

export default {
  path: '/:lang/login',
  component: index,
  children: [
    {
      path: '',
      component: login
    },
    {
      path: 'join',
      component: join
    }
  ]
}
