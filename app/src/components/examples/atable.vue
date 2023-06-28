<script>
export default {
  name: "atable",
  props: {
    attributes: {
      type: Object,
    },
  },
  data() {
    return {
      columns: [
        {
          title: "时间",
          dataIndex: "create_time",
        },
        {
          title: "来源",
          dataIndex: "source",
        },
        {
          title: "状态",
          dataIndex: "state",
        },
      ],
      list: [
        {
          id: 1,
          create_time: "23-05 10:10",
          source: "芝麻",
          state: "完成"
        }
      ]
    }
  }
}
</script>

<template>
  <a-table v-bind="attributes" :columns="columns" :dataSource="list" row-key="id"></a-table>
</template>

<style scoped lang="less">

</style>