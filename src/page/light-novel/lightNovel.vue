<template>
  <div class="m-box">
    <div class="u-list">
      <bookList ref="bookList" :skin="skin"></bookList>
    </div>
    <div class="u-top">
      <bookTop ref="bookTop" :skin="skin"></bookTop>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BookList from './../../components/book/list.vue'
  import BookTop from './../../components/book/top.vue'
  export default {
    name: 'lightNovel',
    data () {
      return {}
    },
    props: ['skin'],
    components: {
      bookList: BookList,
      bookTop: BookTop
    },
    methods: {},
    mounted: function () {
      window.onresize = () => {
        return (() => {
          this.$refs.bookList.UBgStyle()
          this.$refs.bookTop.UBgStyle()
        })()
      }
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .m-box{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .u-list{
    padding-top: 20px;
    width: 800px;
  }
  .u-top{
    padding-top: 20px;
    width: 330px;
  }
</style>
