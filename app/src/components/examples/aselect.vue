<script>
export default {
  name: "aselect",
  props: {
    attributes: {
      type: Object,
    },
  },
  data() {
    return {
      value: undefined
    }
  }
}
</script>

<template>
  <a-select placeholder="请选择"
            style="width: 100%;"
            :getPopupContainer="triggerNode => triggerNode"
            v-model="value"
            v-bind="attributes"
  >
    <a-select-option value="0">不限</a-select-option>
    <a-select-option value="1">男</a-select-option>
    <a-select-option value="2">女</a-select-option>
  </a-select>
</template>

<style scoped lang="less">

</style>