<script>
export default {
  name: "abutton",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <a-button v-bind="attributes">按钮A</a-button>
</template>

<style scoped lang="less">

</style>