<template>
  <div>
    <el-dropdown trigger="click" size="medium">
      <span class="el-dropdown-link">
        <i class="el-icon-menu icon-menu"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'headerMenu'
}
</script>

<style scoped lang="stylus">
.icon-menu
  color #fff
  font-size 18px
</style>
