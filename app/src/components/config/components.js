const screenComponents = [
    {
        group_name: "幕布",
        group_key: "background",
        components: [
            {
                key: "background_white",
                title: "白色幕布",
                config: {
                    isContainer: true,
                    attributes: {},
                    attributesConfig: {
                        class: "",
                        style: "",
                    }
                },
                template: `<div class="zm-base-container">{{CONTENT}}</div>`,
            },
            {
                key: "background_normal",
                title: "普通幕布",
                config: {
                    isContainer: true,
                    attributes: {},
                    attributesConfig: {
                        class: "",
                        style: "",
                    }
                },
                template: `<div>{{CONTENT}}</div>`
            },
            {
                key: "background_flex",
                title: "flex幕布",
                config: {
                    isContainer: true,
                    attributes: {},
                    attributesConfig: {
                        class: "",
                        style: "",
                    }
                },
                template: `<div class="zm-flex">{{CONTENT}}</div>`
            },
            {
                key: "background_flex_between",
                title: "flex_between幕布",
                config: {
                    isContainer: true,
                    attributes: {},
                    attributesConfig: {
                        class: "",
                        style: "",
                    }
                },
                template: `<div class="zm-flex-between">{{CONTENT}}</div>`
            },
        ]
    }
]

import Alert from "@/components/config/alert";
import Input from "@/components/config/input";
import Button from "@/components/config/button";
import Select from "@/components/config/select";
import Table from "@/components/config/table";

const simpleComponents = [
    Alert,
    Button,
    Input,
    Select,
    Table,
]

const GroupComponents = [
    ...screenComponents,
    ...simpleComponents,
]

export default GroupComponents

let cptMap
export const componentsMap = () => {
    if (cptMap) {
        return cptMap
    }
    cptMap = {}
    GroupComponents.map(item => {
        item.components.map(cpt => {
            cptMap[cpt.key] = cpt
        })
    })
    return cptMap
}