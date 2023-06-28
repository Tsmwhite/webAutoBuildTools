<template>
  <component
      :is="is"
      :attributes="attributes"
  >
    <slot></slot>
<!--    <template v-if="component.children.length">-->
<!--      <component v-for="childCpt in component.children"-->
<!--               :key="childCpt.key"-->
<!--               :is="'example_'+childCpt.key"-->
<!--               :class="['component-instance',{'cpt-container': isContainer(childCpt.key)}]"-->
<!--               :component="childCpt"-->
<!--               :data-key="childCpt.key"></component>-->
<!--    </template>-->
  </component>
</template>
<script>
export default {
  name: "CptItem",
  props: {
    is: {
      type: String,
      required: true,
    },
    attributes: {
      type: Object,
    },
    component: {
      type: Object,
      required: true,
    }
  },
  methods: {
    isContainer(cptKey) {
      try {
        let config = this.componentsMap[cptKey].config || {}
        return config.isContainer
      } catch (e) {
        console.error("isContainer error", e)
        return false
      }
    },
  },
}
</script>
<style scoped lang="less">
.component-instance {
  cursor: pointer;
}
</style>