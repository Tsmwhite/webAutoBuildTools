<script>
export default {
  name: "background_flex",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <div class="zm-flex container-tag" v-bind="attributes">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">

</style>