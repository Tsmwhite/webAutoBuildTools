<script>
export default {
  name: "background_flex_between",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <div class="zm-flex-between container-tag" v-bind="attributes">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">

</style>