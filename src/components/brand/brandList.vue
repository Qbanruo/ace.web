<template>
  <el-row>
    <el-col :span="24">
      <addWindow ref="addWin"></addWindow>
    </el-col>
    <el-col :span="24">
      <div class="clear">
        <span class="f-l table-title">品牌管理</span>
        <span class="f-r">
          <searchReset :model="search" @search="loadDate">
           <el-form-item label="品牌名称" prop="input">
            <el-input v-model="search.input" placeholder="品牌名称" size="small"></el-input>
          </el-form-item>
         </searchReset>
          <addBtn @add="add()"></addBtn>
        </span>
      </div>
    </el-col>
    <el-col :span="24" class="mt-15">
      <defaultTable :tableData="brandData" :tableHeader="tableHeader">
        <el-table-column
          slot="add"
          :show-overflow-tooltip="true"
          label="操作"
          width="60"
          align="center">
          <template slot-scope="scope">
            <editBtn @edit="edit(scope.row)"></editBtn>
          </template>
        </el-table-column>
      </defaultTable>
    </el-col>
  </el-row>
</template>
<script>
import defaultTable from '../common/default_table'
import editBtn from '../common/edit_btn'
import tableTitle from '../common/table_title'
import searchReset from '../common/search_reset'
import addBtn from '../common/add_btn'
import addWindow from './add_window'

export default {
  name: 'brandList',
  components: {defaultTable, editBtn, tableTitle, searchReset, addBtn, addWindow},
  data () {
    return {
      search: {
        input: ''
      },
      brandData: [],
      tableHeader: [
        {
          prop: 'name',
          label: '中文名称'
        },
        {
          prop: 'englishName',
          label: '英文名称'
        }
      ],
      currentRow: null
    }
  },
  created () {
    this.loadDate()
  },
  methods: {
    loadDate () {
      this.brandData = [
        {
          id: '1',
          name: '诺基亚',
          englishName: 'nokia'
        },
        {
          id: '2',
          name: '海尔',
          englishName: 'Heier'
        },
        {
          id: '3',
          name: '美的',
          englishName: 'Midea'
        }
      ]
      for (let item of this.brandData) {
        if (item.name === this.search.input) {
          this.brandData = [item]
        }
      }
    },
    edit (row) {
      this.$refs.addWin.loadData(row)
      this.$refs.addWin.show(false)
    },
    add () {
      this.$refs.addWin.show(true)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
