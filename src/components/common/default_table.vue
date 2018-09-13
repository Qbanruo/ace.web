<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      :border="true"
      @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column
        align="center"
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        v-for="item in tableHeader"
        :sortable="true"
        :key="item.id"
        :width="item.width"
        :prop="item.prop"
        :show-overflow-tooltip="true"
        :label="item.label">
      </el-table-column>
      <slot name="add"></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'default_table',
  props: {
    tableData: Array,
    tableHeader: Array
  },
  data () {
    return {
      currentRow: null
    }
  },
  methods: {
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      // console.log(val.id)
      this.currentRow = val
    }
  }
}
</script>

<style scoped>

</style>
