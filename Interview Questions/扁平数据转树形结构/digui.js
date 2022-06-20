let menu_list = [
    {
        id: '1',
        menu_name: '设置',
        menu_url: 'setting',
        parent_id: '0'
    },
    {
        id: '1-1',
        menu_name: '权限设置',
        menu_url: 'setting.permission',
        parent_id: '1'
    },
    {
        id: '1-1-1',
        menu_name: '用户管理列表',
        menu_url: 'setting.permission.user_list',
        parent_id: '1-1'
    },
    {
        id: '1-1-2',
        menu_name: '用户管理新增',
        menu_url: 'setting.permission.user_add',
        parent_id: '1-1'
    },
    {
        id: '1-1-3',
        menu_name: '角色管理列表',
        menu_url: 'setting.permission.role_list',
        parent_id: '1-1'
    },
    {
        id: '1-2',
        menu_name: '菜单设置',
        menu_url: 'setting.menu',
        parent_id: '1'
    },
    {
        id: '1-2-1',
        menu_name: '菜单列表',
        menu_url: 'setting.menu.menu_list',
        parent_id: '1-2'
    },
    {
        id: '1-2-2',
        menu_name: '菜单添加',
        menu_url: 'setting.menu.menu_add',
        parent_id: '1-2'
    },
    {
        id: '2',
        menu_name: '订单',
        menu_url: 'order',
        parent_id: '0'
    },
    {
        id: '2-1',
        menu_name: '报单审核',
        menu_url: 'order.orderreview',
        parent_id: '2'
    },
    {
        id: '2-2',
        menu_name: '退款管理',
        menu_url: 'order.refundmanagement',
        parent_id: '2'
    }
];

let len = menu_list.length;
function dfs(rootId) {
    let curLevalAnsByRootId = [];
    for (let i = 0; i < len; i++) {
        // 如果是子树，继续向下找最底层的叶子节点
        if (menu_list[i].parent_id === rootId) {
            //如果找到儿子，以儿子为根继续找儿子的儿子
            curLevalAnsByRootId.push(menu_list[i]);
            const children = dfs(menu_list[i].id);
            if (children.length) {
                menu_list[i].children = children;
            }
        }
    }
    return curLevalAnsByRootId;
}
//想象一下递归的倒置特点，不撞南墙不回头，先搜到最低根的叶子，遍历完一层之后return给上一层根节点的结
console.log(JSON.stringify(dfs('0')));
const ans = [
    {
        id: '1',
        menu_name: '设置',
        menu_url: 'setting',
        parent_id: '0',
        children: [
            {
                id: '1-1',
                menu_name: '权限设置',
                menu_url: 'setting.permission',
                parent_id: '1',
                children: [
                    {
                        id: '1-1-1',
                        menu_name: '用户管理列表',
                        menu_url: 'setting.permission.user_list',
                        parent_id: '1-1'
                    },
                    {
                        id: '1-1-2',
                        menu_name: '用户管理新增',
                        menu_url: 'setting.permission.user_add',
                        parent_id: '1-1'
                    },
                    {
                        id: '1-1-3',
                        menu_name: '角色管理列表',
                        menu_url: 'setting.permission.role_list',
                        parent_id: '1-1'
                    }
                ]
            },
            {
                id: '1-2',
                menu_name: '菜单设置',
                menu_url: 'setting.menu',
                parent_id: '1',
                children: [
                    {
                        id: '1-2-1',
                        menu_name: '菜单列表',
                        menu_url: 'setting.menu.menu_list',
                        parent_id: '1-2'
                    },
                    {
                        id: '1-2-2',
                        menu_name: '菜单添加',
                        menu_url: 'setting.menu.menu_add',
                        parent_id: '1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        menu_name: '订单',
        menu_url: 'order',
        parent_id: '0',
        children: [
            {
                id: '2-1',
                menu_name: '报单审核',
                menu_url: 'order.orderreview',
                parent_id: '2'
            },
            {
                id: '2-2',
                menu_name: '退款管理',
                menu_url: 'order.refundmanagement',
                parent_id: '2'
            }
        ]
    }
];
