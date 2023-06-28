<script>
export default {
  name: "button_add",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <a-button icon="plus" type="primary" v-bind="attributes">添加规则</a-button>
</template>

<style scoped lang="less">

</style>