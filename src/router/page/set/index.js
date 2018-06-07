import index from '../../../components/public/main/index.vue'
import skin from './skin'

let children = [
  {
    path: '',
    redirect: 'skin'
  }
]

children.push(...skin)

export default {
  path: '/:lang/set',
  component: index,
  children: children
}
