<template>
  <el-container id="app">
    <el-header class="headerMenu">
      <router-view name="headerMenu"/>
    </el-header>
    <div class="flex">
      <div class="leftMenu">
        <router-view name="leftMenu"/>
      </div>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </el-container>
  <!--<el-container id="app">-->
    <!--<el-header>-->
      <!--<router-view name="headerMenu"/>-->
    <!--</el-header>-->
    <!--<el-container>-->
      <!--<el-aside>-->
        <!--<router-view name="leftMenu"/>-->
      <!--</el-aside>-->
      <!--<el-main> <router-view /></el-main>-->
    <!--</el-container>-->
  <!--</el-container>-->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
body
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin 0
  padding 0
.mt-15
  margin-top 15px
.flex
  display: flex
.leftMenu
  min-height calc(100vh - 60px)
.el-menu
  height 100%
.headerMenu
  background #444c52
.clear
  &:after
    content ''
    clear both
    display block
.f-l
  float left
.f-r
  float right
.table-title
  height 32px
  line-height 32px
  display inline-block
  font-size 14px
.has-gutter tr th
  background #f5f7fa
.search-reset
  display inline-block
  .el-form-item__content
  .el-form-item__label
    line-height 32px
  .el-form-item
    margin-bottom 0
</style>
