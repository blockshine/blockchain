import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/proDescription.vue'], resolve)
                },
                {
                    path: '/basicConcept',
                    component: resolve => require(['../components/page/basicConcept.vue'], resolve)
                },
                {
                    path: '/reqInter',
                    component: resolve => require(['../components/page/reqInter.vue'], resolve)
                },
                {
                    path: '/server',
                    component: resolve => require(['../components/page/server.vue'], resolve)
                },
                {
                    path: '/accountNum',
                    component: resolve => require(['../components/page/accountNum.vue'], resolve)
                },
                {
                    path: '/blockChain',
                    component: resolve => require(['../components/page/blockChain.vue'], resolve)
                },
                {
                    path: '/node',
                    component: resolve => require(['../components/page/node.vue'], resolve)
                },
                {
                    path: '/nameWithmos',
                    component: resolve => require(['../components/page/nameWithmos.vue'], resolve)
                },
                {
                    path: '/transaction',
                    component: resolve => require(['../components/page/transaction/transaction_add.vue'], resolve)
                },
                {
                    //创建账户
                   path:'/account_add',
                   component: resolve => require(['../components/page/account/account_add.vue'], resolve)
                },
                {
                    //账户集合
                   path:'/account_list',
                   component: resolve => require(['../components/page/account/account_list.vue'], resolve)
                },
                {
                    //账户余额
                   path:'/account_balance',
                   component: resolve => require(['../components/page/account/account_balance.vue'], resolve)
                },
                {
                    //区块信息查询
                   path:'/block_query',
                   component: resolve => require(['../components/page/block/block_query.vue'], resolve)
                },
                {
                    //区块数量
                   path:'/block_count',
                   component: resolve => require(['../components/page/block/block_count.vue'], resolve)
                },
                {
                    //区块交易查询
                   path:'/block_trans',
                   component: resolve => require(['../components/page/block/block_trans.vue'], resolve)
                },
                {
                    path: '/log-history',
                    component: resolve => require(['../components/page/log-history.vue'], resolve)
                },
                {
                    path: '/private_chain_solution',
                    component: resolve => require(['../components/page/private_chain_solution.vue'], resolve)
                },
                {
                    path: '/public_chain_solution',
                    component: resolve => require(['../components/page/public_chain_solution.vue'], resolve)
                },
                {
                    path: '/complieContract',
                    component: resolve => require(['../components/page/contract/contract_compiling.vue'], resolve)
                },
                {
                    path: '/deployContract',
                    component: resolve => require(['../components/page/contract/contract_deployment.vue'], resolve)
                },
                {
                    path: '/invokeContract',
                    component: resolve => require(['../components/page/contract/contract_invoking.vue'], resolve)
                },
                {
                    path: '/getContractStatus',
                    component: resolve => require(['../components/page/contract/contract_status.vue'], resolve)
                }
            ]
        }
    ]
})
