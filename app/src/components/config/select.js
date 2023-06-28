const sizeOptions = [
    "small",
    "large"
]

const modeOptions = [
    "multiple",
    "tags",
    "combobox",
]

export default {
    group_name: "Select选择器",
    group_key: "select",
    components: [
        {
            key: "aselect",
            title: "Select",
            config: {
                vModel: "",
                options: [],
                renderOption: (option = {value: 0, label: "全部"}) => {
                    return `<a-select-option value="${option.value}">${option.label}</a-select-option>`
                },
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    allowClear: true,
                    showSearch: true,
                    filterOption: (input, option) => {
                        return (
                            option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        );
                    },
                    mode: {
                        options: modeOptions,
                        value: undefined,
                    },
                    size: {
                        options: sizeOptions,
                        value: undefined,
                    },
                    placeholder: "",
                },
            },
            template: `<a-select {{attributes}}>{{options}}</a-select>`,
        },
    ]
}