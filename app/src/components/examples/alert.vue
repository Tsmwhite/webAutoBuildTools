<script>
export default {
  name: "alert",
  props: {
    attributes: {
      type: Object,
    },
  },
  computed: {
    getAttributes() {
      return {
        type: "success",
        message: "今天的天气很清凉",
        ...this.attributes,
      }
    },
  }
}
</script>

<template>
  <a-alert v-bind="getAttributes"/>
</template>

<style scoped lang="less">

</style>