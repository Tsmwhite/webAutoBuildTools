<script>
export default {
  name: "input_number",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <a-input-number v-bind="attributes" placeholder="请输入数字" style="width: 100%;"/>
</template>

<style scoped lang="less">

</style>