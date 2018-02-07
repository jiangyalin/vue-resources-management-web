<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      stripe
      border
      size="mini"
      style="width: 100%"
      tooltip-effect="dark"
      ref="multipleTable">
      <el-table-column
        v-for="item in tableTile"
        :label="item.columnLabel"
        :prop="item.prop"
        :key="item.key"
        :width="item.width"
        show-overflow-tooltip></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="view(scope)">查看</el-button>
          <el-button type="text" size="small" @click="edit(scope)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="m-page" small layout="prev, pager, next" :total="formInline.total"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  const List = (vue, response) => {
    let tableData = []
    tableData = response.data.content.map((data) => {
      return {
        id: data._id,
        bookName: data.bookName,
        author: data.author,
        illustrator: data.illustrator,
        releaseTime: vue.$moment(data.releaseTime).format('YYYY-MM-DD HH:mm')
      }
    })
    return {
      tableData: tableData,
      total: response.data.totalElements
    }
  }
  // 获取轻小说列表
  const GetFictionList = vue => {
    const fiction = new Promise((resolve, reject) => {
      vue.$http({
        method: 'get',
        url: window.config.server + '/api/lightNovel/fiction',
        params: {
          id: vue.$cookie.get('userId'),
          pageNum: vue.formInline.currentPage - 1,
          pageSize: vue.formInline.pageSize
        },
        headers: {
          'languageCode': vue.$route.params.lang,
          'Authorization': 'Bearer ' + vue.$cookie.get('token')
        }
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
    return fiction
  }
  export default {
    data () {
      return {
        // 渲染筛选
        filter: {},
        // 筛选值
        formInline: {
          total: 0,
          pageSize: 10,
          currentPage: 1
        },
        // 渲染表格
        tableTile: [{
          key: '0',
          columnLabel: '书名',
          prop: 'bookName'
        }, {
          key: '1',
          columnLabel: '作者',
          prop: 'author'
        }, {
          key: '2',
          columnLabel: '插画师',
          prop: 'illustrator'
        }, {
          key: '3',
          columnLabel: '更新时间',
          prop: 'releaseTime'
        }],
        // 列表数据
        tableData: [],
        loading: false
      }
    },
    methods: {},
    created: function () {
      // 获取轻小说列表
      const fictionList = GetFictionList(this)

      fictionList.then((resolve) => {
        const list = List(this, resolve)
        this.tableData = list.tableData
        this.formInline.total = list.total
        this.loading = false
      }).catch((reject) => {
        window.publicFunction.error(reject, this)
      })
    }
  }
</script>

<style>

</style>
