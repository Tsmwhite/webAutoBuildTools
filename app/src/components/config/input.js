const sizeOptions = [
    "small",
    "large"
]
export default {
    group_name: "输入框",
    group_key: "input",
    components: [
        {
            key: "ainput",
            title: "输入框",
            config: {
                text: "",
                vModel: "",
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    maxLength: "",
                    placeholder: "",
                    suffix: "",
                    size: {
                        options: sizeOptions,
                        value: undefined
                    },
                    allowClear: true,
                    disabled: false,
                },
            },
            template: `<a-input {{attributes}}/>`
        },
        {
            title: "数字输入框",
            key: "input_number",
            config: {
                vModel: "",
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: {},
                    step: "",
                    max: null,
                    min: null,
                    placeholder: "",
                    formatter: "",
                    size: {
                        options: sizeOptions,
                        value: undefined
                    },
                    allowClear: true,
                    disabled: false,
                },
            },
            template: `<a-input-number {{attributes}}/>`,
        },
    ]
}