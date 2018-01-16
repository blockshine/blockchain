<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo"  unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <template v-for="subItem in item.subs" >
                            <el-submenu :index="subItem.index" v-if="subItem.group">
                                <span slot="title">{{subItem.group}}</span>
                                <el-menu-item v-for="index in subItem.subs"  :index="index.index">{{index.title}}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index">{{subItem.title}}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        // icon: 'el-icon-menu',
                        index: '1',
                        title: '产品简介',
                        subs: [
                            {
                                index: 'home',
                                title: '产品概述'
                            },
                            {
                                index: 'basicConcept',
                                title: '基本概念'
                            }
                        ]
                    },
                    {
                        // icon: 'el-icon-setting',
                        index: '',
                        title: '快速入门'
                    },
                    {
                        // icon: 'el-icon-menu',
                        index: '3',
                        title: 'API参考',
                        subs: [
                            {
                                index: '4',
                                group:'准备',
                                // title: '准备',
                                subs:[
                                    {
                                        index:'reqInter',
                                        title:'请求接口'
                                    }
                                ]
                            },
                            {
                                index:'5',
                                group:'服务器',
                                subs:[
                                    {
                                        index:'5-1',
                                        title:'获取服务器心跳'
                                    },
                                    {
                                        index:'5-2',
                                        title:'获取服务器心态'
                                    }
                                ]
                            },
                            {
                                index:'6',
                                group:'账号',
                                subs:[
                                    {
                                        index:'',
                                        title:'创建账户'
                                    },
                                    {
                                        index:'',
                                        title:'通过地址获取账户信息'
                                    }
                                ]
                            },
                            {
                                index:'7',
                                group:'区块链',
                                subs:[
                                    {
                                        index:'',
                                        title:'发起一笔转账交易'
                                    },
                                    {
                                        index:'',
                                        title:'获取跟命名空间'
                                    }
                                ]
                            },{
                                index:'nameWithmos',
                                title:'命名空间与马赛克',
                            },{
                                index:'transaction',
                                title:'交易',
                            },
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #fff;
    }
    .sidebar > ul {
        height:100%;
    }

    @media (max-width: 767px){
        .sidebar[data-v-2b29b166] {
            display: block;
            position: relative;
            width: 30%;
            left: 0;
            top: 0;
            bottom: 0;
            background: #eef1f6;
            verflow-y: auto;
            height: 100%;
            font-size: 10px;
            overflow-x: scroll;
        }
        .el-submenu .el-menu {
            background-color: rgba(0,0,0,0);
        }
    }
</style>
