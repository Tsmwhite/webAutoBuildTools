<script>
export default {
  name: "alert_info",
  props: {
    attributes: {
      type: Object,
    },
  },
  computed: {
    getAttributes() {
      return {
          type: "info",
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