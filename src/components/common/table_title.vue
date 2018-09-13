<template>
  <div class="clear">
    <span class="f_l table_title">{{title}}</span>
    <span class="f_r">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'table_title',
  props: {
    title: String
  }
}
</script>

<style scoped lang="stylus">
  .table_title
    font-size 14px
    font-weight bolder
    display inline-block
    height 32px
    line-height 32px
</style>
