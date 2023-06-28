<script>
export default {
  name: "background_normal",
  props: {
    attributes: {
      type: Object,
    },
  }
}
</script>

<template>
  <div class="zm-base-container normal container-tag" v-bind="attributes">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">

</style>