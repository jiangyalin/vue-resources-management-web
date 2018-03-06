<template>
  <div class="m-box">
    <div class="u-list">
      <bookList ref="bookList"></bookList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BookList from './../../components/book/list.vue'
  export default {
    name: 'lightNovel',
    data () {
      return {}
    },
    components: {
      bookList: BookList
    },
    methods: {},
    mounted: function () {
      window.onresize = () => {
        return (() => {
          this.$refs.bookList.UBgStyle()
        })()
      }
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .u-list{
    padding-top: 20px;
    width: 800px;
  }
</style>
