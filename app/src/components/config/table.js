export default {
    group_name: "表格",
    group_key: "table",
    components: [
        {
            key: 'atable',
            title: "表格",
            config: {
                slots: [],
                attributes: {},
                attributesConfig: {
                    class: "",
                    style: "",
                    loading: false,
                    dataSource: [],
                    pagination: {
                        current: 1,
                        page: 1,
                        pageSize: 10,
                        total: 0,
                        pageSizeOptions: ['10', '20', '50', '100'],
                        showQuickJumper: true,
                        showSizeChanger: true,
                    },
                    columns: [],
                },
            },
            template: `<a-table {{attributes}}>{{slots}}</a-table>`,
        },
    ]
}