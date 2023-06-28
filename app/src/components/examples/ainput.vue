<script>
export default {
  name: "ainput",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <a-input v-bind="attributes" placeholder="请输入内容"/>
</template>

<style scoped lang="less">

</style>