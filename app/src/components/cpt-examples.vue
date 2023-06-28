<template>
  <div class="examples-container">
    <template v-for="(item,index) in cpts">
      <a-card :title="item.group_name" :key="index">
        <div class="examples-list">
          <template v-for="cpt in item.components">
            <div :class="['example-item', cpt.exampleSize ]"
                 :key="cpt.key">
              <div class="component-box" :data-key="cpt.key">
                <CptItem :data-key="cpt.key"
                         :is="'example_'+cpt.key"></CptItem>
              </div>
              <div class="title">{{ cpt.title }}</div>
            </div>
          </template>
        </div>
      </a-card>
    </template>

  </div>
</template>

<script>
import cpts from "@/components/config/components";
import CptItem from "@/components/cpt-item.vue";
import example_alert from "@/components/examples/alert.vue";
import example_alert_info from "@/components/examples/alert_info.vue";
import example_alert_warning from "@/components/examples/alert_warning.vue";
import example_background_white from "@/components/examples/background_white.vue";
import example_background_normal from "@/components/examples/background_normal.vue";
import example_background_flex from "@/components/examples/background_flex.vue";
import example_background_flex_between from "@/components/examples/background_flex_between.vue";
import example_abutton from "@/components/examples/abutton.vue";
import example_button_add from "@/components/examples/button_add.vue";
import example_button_ghost from "@/components/examples/button_ghost.vue";
import example_button_primary from "@/components/examples/button_primary.vue";
import example_ainput from "@/components/examples/ainput.vue";
import example_input_number from "@/components/examples/input_number.vue";
import example_aselect from "@/components/examples/aselect.vue";
import example_atable from "@/components/examples/atable.vue";

export default {
  components: {
    CptItem,
    example_alert,
    example_alert_info,
    example_alert_warning,
    example_background_white,
    example_background_normal,
    example_background_flex,
    example_background_flex_between,
    example_abutton,
    example_button_add,
    example_button_ghost,
    example_button_primary,
    example_ainput,
    example_input_number,
    example_aselect,
    example_atable,
  },
  data() {
    return {
      cpts,
    }
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped lang="less">
.examples-container {
  .examples-list {
    display: flex;
    flex-wrap: wrap;
  }

  .example-item {
    flex: 1;
    width: 50%;
    text-align: center;
    padding: 8px;
    border-radius: 2px;
    cursor: pointer;

    &.max {
      width: 100%;
      flex: unset;
    }

    &:hover {
      background: #cccccc;

      .title {
        color: #2475fc;
      }
    }

    .title {
      margin-top: 4px;
      font-size: 12px;
      color: #595959;
    }
  }
}
</style>