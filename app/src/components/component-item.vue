<template>
  <component :is="is"></component>
</template>
<script>
export default {
  name: "ComponentItem",
  props: {
    is: {
      type: String,
      required: true,
    },
  },
  methods: {},
}
</script>
<style scoped lang="less">

</style>