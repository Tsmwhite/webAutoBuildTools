const typeOptions = [
    "success",
    "info",
    "warning",
    "error"
]
export default {
    group_name: "Alert提示",
    group_key: "alert",
    components: [
        {
            key: "alert",
            title: "自定义",
            exampleSize: "max",
            config: {
                slots: [],
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    afterClose: Function,
                    banner: true,
                    closable: false,
                    showIcon: false,
                    type: {
                        options: typeOptions,
                        default: undefined,
                    },
                    message: "",
                    description: "",
                },
            },
            template: `<a-alert {{attributes}}>{{slots}}</a-alert>`,
        },
        {
            key: "alert_info",
            title: "info",
            exampleSize: "max",
            config: {
                slots: [],
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    banner: true,
                    closable: false,
                    showIcon: false,
                    type: {
                        options: typeOptions,
                        value: "info",
                    },
                    message: "",
                    description: "",
                },
            },
            template: `<a-alert {{attributes}}>{{slots}}</a-alert>`,
        },
        {
            key: "alert_warning",
            title: "warning",
            exampleSize: "max",
            config: {
                slots: [],
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: {},
                    banner: true,
                    closable: false,
                    showIcon: false,
                    type: {
                        options: typeOptions,
                        value: "warning",
                    },
                    message: "",
                    description: "",
                },
            },
            template: `<a-alert {{attributes}}>{{slots}}</a-alert>`,
        },
    ]
}