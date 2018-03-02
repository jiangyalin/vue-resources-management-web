import index from '../../../components/public/main/index.vue'
import home from './home'

let children = [
]

children.push(...home)

export default {
  path: '/:lang/home',
  component: index,
  children: children
}
