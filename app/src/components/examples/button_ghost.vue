<script>
export default {
  name: "button_ghost",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <a-button type="primary" ghost v-bind="attributes">搜索</a-button>
</template>

<style scoped lang="less">

</style>