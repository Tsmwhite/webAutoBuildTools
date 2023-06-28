const typeOptions = [
    "primary",
    "dashed",
    "danger",
    "link",
]
const sizeOptions = [
    "small",
    "large"
]

const shapeOptions = [
    "circle",
    "round",
]
export default {
    group_name: "按钮",
    group_key: "button",
    components: [
        {
            key: "abutton",
            title: "按钮",
            config: {
                text: "",
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    icon: "",
                    type: {
                        options: typeOptions,
                        value: undefined,
                    },
                    size: {
                        options: sizeOptions,
                        value: undefined,
                    },
                    shape: {
                        options: shapeOptions,
                        value: undefined,
                    },
                    loading: false,
                    disabled: false,
                    ghost: false,
                },
            },
            template: `<a-button {{attributes}}>{{text}}</a-button>`,
        },
        {
            key: "button_primary",
            title: "主要按钮",
            config: {
                text: "",
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    icon: "",
                    type: {
                        options: typeOptions,
                        value: "primary",
                    },
                    size: {
                        options: sizeOptions,
                        value: undefined,
                    },
                    shape: {
                        options: shapeOptions,
                        value: undefined,
                    },
                    loading: false,
                    disabled: false,
                },
            },
            template: `<a-button {{attributes}}>{{text}}</a-button>`,
        },
        {
            key: "button_ghost",
            title: "幽灵按钮",
            config: {
                text: "",
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    icon: "",
                    type: {
                        options: typeOptions,
                        value: "primary",
                    },
                    size: {
                        options: sizeOptions,
                        value: undefined,
                    },
                    shape: {
                        options: shapeOptions,
                        value: undefined,
                    },
                    loading: false,
                    disabled: false,
                    ghost: true,
                },
            },
            template: `<a-button {{attributes}}>{{text}}</a-button>`,
        },
        {
            key: "button_add",
            title: "添加按钮",
            config: {
                text: "",
                attributes: {},
                attributesConfig: {
                    style: "",
                    icon: "",
                    type: {
                        options: typeOptions,
                        value: "primary",
                    },
                    size: {
                        options: sizeOptions,
                        value: undefined,
                    },
                    shape: {
                        options: shapeOptions,
                        value: undefined,
                    },
                    loading: false,
                    disabled: false,
                },
            },
            template: `<a-button {{attributes}}>{{text}}</a-button>`,
        },
    ]
}