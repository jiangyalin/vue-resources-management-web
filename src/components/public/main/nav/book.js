const operateNav = (vue) => {
  return [{
    text: '轻小说',
    name: 'book',
    path: '/book/lightNovel',
    index: '2',
    node: [{
      text: '轻小说列表',
      name: 'fictionList',
      path: '/book/lightNovel/fictionList',
      index: '2-1'
    }, {
      text: '添加轻小说',
      name: 'fictionAdd',
      path: '/book/lightNovel/fictionAdd',
      index: '2-2'
    }]
  }]
}

const ownerNav = (vue) => {
  return [{
    text: '轻小说',
    name: 'book',
    path: '/book/lightNovel',
    index: '2',
    node: [{
      text: '轻小说列表',
      name: 'fictionList',
      path: '/book/lightNovel/fictionList',
      index: '2-1'
    }, {
      text: '添加轻小说',
      name: 'fictionAdd',
      path: '/book/lightNovel/fictionAdd',
      index: '2-2'
    }]
  }]
}

const node1 = {
  text: '书籍',
  name: 'book',
  path: '/book/lightNovel',
  index: '01'
}

export default {
  operate: operateNav,
  owner: ownerNav,
  node1: node1
}
