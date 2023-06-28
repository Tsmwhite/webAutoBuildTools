<script>
export default {
  name: "alert_warning",
  props: {
    attributes: {
      type: Object,
    },
  },
  computed: {
    getAttributes() {
      return {
        style: "width: 100%",
        type: "warning",
        message: "今天的天气很清凉",
        ...this.attributes,
      }
    },
  }
}
</script>

<template>
  <a-alert v-bind="getAttributes"></a-alert>
</template>

<style scoped lang="less">

</style>