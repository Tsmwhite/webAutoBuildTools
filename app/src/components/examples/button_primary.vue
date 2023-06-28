<script>
export default {
  name: "button_primary",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <a-button type="primary" v-bind="attributes">保存规则</a-button>
</template>

<style scoped lang="less">

</style>