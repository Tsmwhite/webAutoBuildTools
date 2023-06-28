<template>
  <div class="container">
    <CptExamples id="examples"></CptExamples>
    <div id="preview" :key="previewKey">
      <CptItem
          v-for="(cpt,index) in preComponentKeys"
          :key="index"
          @click.native="selectCompent(cpt)"
          :is="'example_'+cpt.key"
          :class="['component-instance',{'cpt-container': isContainer(cpt.key)}]"
          :component="cpt"
          :data-index="index"
          :data-key="cpt.key"
          :attributes="cpt.config.attributes"
      >
        <template v-if="cpt.children.length">
          <CptItem v-for="(childCpt,i) in cpt.children"
                   :key="i"
                   @click.native.stop="selectCompent(childCpt)"
                   :is="'example_'+childCpt.key"
                   :class="['component-instance',{'cpt-container': isContainer(childCpt.key)}]"
                   :component="childCpt"
                   :data-key="childCpt.key"
                   :attributes="childCpt.config.attributes"
          >
            <template v-if="childCpt.children.length">
              <CptItem v-for="(child2Cpt,j) in childCpt.children"
                       :key="j"
                       @click.native.stop="selectCompent(child2Cpt)"
                       :is="'example_'+child2Cpt.key"
                       :class="['component-instance',{'cpt-container': isContainer(child2Cpt.key)}]"
                       :component="child2Cpt"
                       :data-key="child2Cpt.key"
                       :attributes="child2Cpt.config.attributes"
              >
                <template v-if="child2Cpt.children.length">
                  <CptItem v-for="(child3Cpt,h) in child2Cpt.children"
                           :key="h"
                           @click.native.stop="selectCompent(child3Cpt)"
                           :is="'example_'+child3Cpt.key"
                           :class="['component-instance',{'cpt-container': isContainer(child3Cpt.key)}]"
                           :component="child3Cpt"
                           :data-key="child3Cpt.key"
                           :attributes="child3Cpt.config.attributes"
                  ></CptItem>
                </template>
              </CptItem>
            </template>
          </CptItem>
        </template>
      </CptItem>
    </div>
    <div id="config" :key="configKey">
      <template v-for="(config,key) in attributes">
        <div class="config-item"
             :key="key">
          <span>{{ key }}：</span>
          <div>
            <a-textarea
                v-if="typeof attributes[key] === 'string'"
                v-model="attributes[key]"
                @blur="configChange"
                placeholder="请输入"
            ></a-textarea>
            <a-switch
                v-else-if="typeof attributes[key] === 'boolean'"
                v-model="attributes[key]"
                @change="configChange"
            ></a-switch>
            <a-select
                v-else-if="attributes[key].options"
                v-model="attributes[key].value"
                @change="configChange"
                style="width: 100%"
                placeholder="请选择"
                allowClear
            >
              <a-select-option
                  v-for="(option,i) in attributes[key].options"
                  :value="option"
                  :key="i">{{ option }}
              </a-select-option>
            </a-select>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import {v4 as uuidv4} from 'uuid';
import CptExamples from "@/components/cpt-examples.vue";
import CptItem from "@/components/cpt-item.vue";
import dragula from "dragula";
import 'dragula/dist/dragula.min.css';
import example_alert from "@/components/examples/alert.vue";
import example_alert_info from "@/components/examples/alert_info.vue";
import example_alert_warning from "@/components/examples/alert_warning.vue";
import example_abutton from "@/components/examples/abutton.vue";
import example_aselect from "@/components/examples/aselect.vue";
import example_atable from "@/components/examples/atable.vue";
import example_ainput from "@/components/examples/ainput.vue";
import example_background_white from "@/components/examples/background_white.vue";
import example_background_normal from "@/components/examples/background_normal.vue";
import example_background_flex from "@/components/examples/background_flex.vue";
import example_background_flex_between from "@/components/examples/background_flex_between.vue";
import example_button_add from "@/components/examples/button_add.vue";
import example_button_ghost from "@/components/examples/button_ghost.vue";
import example_button_primary from "@/components/examples/button_primary.vue";
import example_input_number from "@/components/examples/input_number.vue";
import {componentsMap} from "@/components/config/components";

export default {
  components: {
    CptItem,
    CptExamples,
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
      loading: false,
      renderConponentsAll: [],
      preComponentKeys: [],
      componentsMap: {},
      selectedComponent: {},
      selectedComponentConfig: {},
      attributes: [],
      configKey: 1,
      previewKey: 1000,
    }
  },
  created() {
    this.componentsMap = componentsMap()
  },
  mounted() {
    this.dragulaInit()
  },
  methods: {
    dragulaInit() {
      let currentKey
      const drake = dragula([
        ...document.getElementsByClassName("component-box"),
        ...document.getElementsByClassName("cpt-container"),
        document.getElementById("preview")
      ], {
        isContainer: (el) => {
          return el.classList.contains("cpt-container")
        },
        copy: (el, source) => {
          // console.log("el-source", el, source)
          if (source.classList.contains("component-box")) {
            currentKey = el.getAttribute("data-key")
            return true
          } else {
            currentKey = null
            return false
          }
        },
        accepts: (el, target) => {
          // console.log(el, target)
          return !target.classList.contains("component-box")
        },
      })
      drake.on("drop", (el, container) => {
        if (container && (container.id === "preview" || container.classList.contains("cpt-container")) && currentKey) {
          el.setAttribute("class", el.classList + " is-copy-dom")
          //this.preComponentKeys = this.previewComponentsScan()
          this.$set(this, 'preComponentKeys', this.previewComponentsScan())
          this.$nextTick(() => {
            let waitDelNodes = document.getElementsByClassName("is-copy-dom")
            for (let i = 0; i < waitDelNodes.length; i++) {
              waitDelNodes[i].parentNode.removeChild(waitDelNodes[i])
            }
          })
          console.log("this.preComponentKeys", this.preComponentKeys)
          console.log("this.renderConponentsAll", this.renderConponentsAll)
        }
      })
      console.log(drake)
      // drake.on("out", () => {
      //   console.log("out")
      // })
      // drake.on("drag", () => {
      //   console.log("drag")
      // })
      // drake.on("drop", () => {
      //   console.log("drop")
      // })
      // drake.on("over", () => {
      //   console.log("over")
      // })
    },
    previewComponentsScan() {
      let baseContainer = document.getElementById("preview")
      this.renderConponentsAll = []
      return this.containerElementToTree(baseContainer)
    },
    containerElementToTree(containerEl) {
      let childNodes = containerEl.childNodes
      let components = []
      let node, cptKey, children
      for (let i = 0; i < childNodes.length; i++) {
        node = childNodes[i]
        cptKey = node.getAttribute("data-key")
        children = []
        if (!cptKey) {
          console.warn("childNodes key not found")
          continue;
        }
        if (this.elIsContainer(childNodes[i])) {
          children = this.containerElementToTree(childNodes[i])
        }
        let id = this.getUuid()
        components.push({
          id: id,
          key: cptKey,
          children: children,
          config: JSON.parse(JSON.stringify(this.componentsMap[cptKey].config))
        })
      }
      return components
    },
    elIsContainer(el) {
      return el.classList.contains("container-tag")
    },
    isContainer(cptKey) {
      try {
        let config = this.componentsMap[cptKey].config || {}
        return config.isContainer
      } catch (e) {
        console.error("isContainer error", e)
        return false
      }
    },
    getUuid() {
      return uuidv4()
    },
    selectCompent(component) {
      this.selectedComponent = component
      this.selectedComponentConfig = component.config || {}
      this.attributes = this.selectedComponentConfig.attributesConfig || {}
    },
    configChange() {
      console.log("this.attributes", this.attributes)
      console.log("preComponentKeys", this.preComponentKeys)
      let attributesConfig = this.selectedComponentConfig.attributesConfig
      this.selectedComponentConfig.attributes = {}
      for (let key in attributesConfig) {
        if (attributesConfig[key] === "") {
          continue
        }
        switch (typeof attributesConfig[key]) {
          case "string":
          case "number":
          case "boolean":
            this.selectedComponentConfig.attributes[key] = attributesConfig[key]
            break
          case "object":
            if (attributesConfig[key].value) {
              this.selectedComponentConfig.attributes[key] = attributesConfig[key].value
            }
            break
        }
      }
      this.configKey += 1
      this.previewKey += 1
      this.$forceUpdate()
    }
  }
}
</script>
<style scoped lang="less">
.container {
  height: 100vh;
  display: flex;
  background: rgb(240, 242, 245);

  > div {
    height: 100%;
    overflow-y: scroll;
  }

  #examples {
    flex-shrink: 0;
    width: 300px;

    /deep/ .container-tag {
      padding: 20px 40px;
      border: 1px solid #2475fc;
    }
  }

  #preview-loading,
  #preview {
    flex: 1;
    margin: 24px;
    background: #FFFFFF;
    height: calc(100vh - 48px);

    /deep/ .container-tag {
      min-height: 120px;
      border: 1px solid #e8e8e8;
    }
  }

  #config {
    width: 300px;
    flex-shrink: 0;
    background: #FFFFFF;

    .config-item {
      display: flex;
      padding: 8px 24px;

      > span {
        margin-right: 8px;
        flex-shrink: 0;
        width: 100px;
      }

      > div {
        flex: 1;
      }
    }
  }
}

</style>