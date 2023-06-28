<script>
export default {
  name: "background_white",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <div class="zm-base-container container-tag" v-bind="attributes">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">

</style>