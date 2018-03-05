import index from '../../../components/public/main/index.vue'
import lightNovel from './lightNovel'

let children = [
]

children.push(...lightNovel)

export default {
  path: '/:lang/lightNovel',
  component: index,
  children: children
}
