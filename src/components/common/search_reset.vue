<template>
  <el-form :model="model" label-width="80px" ref="searchForm" class="search-reset" :inline="true">
    <slot></slot>
    <el-dropdown size="small" split-button type="primary" @click="$emit('search')" @command="reset">
      <i class="el-icon-search"></i>查询
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>重置</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-form>
</template>

<script>
export default {
  name: 'search_reset',
  props: ['model'],
  methods: {
    reset () {
      this.$refs.searchForm.resetFields()
      this.$emit('search')
    }
  }
}
</script>

<style scoped>

</style>
