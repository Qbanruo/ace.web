<template>
  <el-menu
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#a0cfff"
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse">
    <span v-for="nav in leftMenu" :key="nav.id">
     <el-menu-item :index="nav.router">
      <i class="el-icon-menu"></i>
      <span slot="title">{{nav.name}}</span>
     </el-menu-item>
    </span>

    <i :class="toggleClass" class="bottom_icon" @click="isCollapse = !isCollapse"></i>
  </el-menu>
</template>

<script>
export default {
  name: 'leftMenu',
  data () {
    return {
      isCollapse: false,
      leftMenu: [
        {
          name: '品牌',
          router: '/brand'
        },
        {
          name: '品类',
          router: '/category'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    toggleClass () {
      return this.isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
    }
  }
}
</script>

<style scoped lang="stylus">
  .left-menu
    position relative
    background #444c52
  .el-menu-vertical-demo:not(.el-menu--collapse)
    width 200px
    min-height 400px
  .bottom_icon
    color #fff
    position absolute
    right 10px
    bottom 10px
  .bottom_icon:hover
    cursor pointer
  .icon
    vertical-align middle
    width 20px
    padding 2px
    height 20px
</style>
