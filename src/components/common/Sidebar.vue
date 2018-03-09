<template>
    <div  class="sidebardiv" >
        <div  class="sidebar" v-show="isCollapse">
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
        <button class="sidebar-toggle" v-on:click="toggleList">
            <el-col class="sidebar-toggle-button">
                <span></span>
                <span></span>
                <span></span>
            </el-col>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                screenWidth:document.body.clientWidth,
                timer:false,
                isCollapse:true,
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
                            },
                            {
                                index:'public_chain_solution',
                                title:'公有链解决方案'
                            },
                            {
                               index:'private_chain_solution',
                               title:'私有链解决方案'
                            },
                            {
                               index:'solution',
                               title:'行业解决方案'
                            }
                        ]
                    },

                    {
                        // icon: 'el-icon-menu',
                        index: '3',
                        title: '公链API参考',
                        subs: [
                            
                            {
                                index: '5',
                                group:'授权',
                                // title: '授权',
                                subs:[
                                    {
                                        index:'tokenApply',
                                        title:'请求授权'
                                    },
                                    {
                                        index:'tokenRefresh',
                                        title:'刷新授权'
                                    }
                                ]
                            },
                            {
                                index:'6',
                                group:'合约',
                                subs:[
                                    {
                                        index:'complieContract',
                                        title:'编译验证合约'
                                    },
                                    {
                                        index:'deployContract',
                                        title:'部署合约'
                                    },
                                    {
                                        index:'invokeContract',
                                        title:'调用合约'
                                    },
                                    {
                                        index:'getContractStatus',
                                        title:'查询合约状态'
                                    }
                                ]
                            },
                            {
                                index:'7',
                                group:'账户',
                                subs:[
                                    {
                                        index:'account_add',
                                        title:'账户创建'
                                    },
                                    {
                                        index:'account_list',
                                        title:'账户集合'
                                    },
                                    {
                                        index:'account_balance',
                                        title:'账户余额'
                                    }
                                ]
                            },
                            {

                                index:'8',
                                group:'区块',
                                subs:[
                                    {
                                        index:'block_detail',
                                        title:'区块详情'
                                    },
                                    {
                                        index:'block_page',
                                        title:'区块分页'
                                    },
                                    {
                                        index:'block_range',
                                        title:'查询指定范围内的区块列表'
                                    },
                                    {
                                        index:'block_count',
                                        title:'区块总数'
                                    }
                                ]
                            },
                            {
                                index:'9',
                                group:'交易',
                                subs:[
                                    {
                                        index:'transaction_count',
                                        title:'查询交易总数'
                                    },
                                    {
                                        index:'transaction_receipt',
                                        title:'查询交易回执'
                                    },
                                    {
                                        index:'transaction_detail',
                                        title:'查询交易详情'
                                    },
                                     {
                                         index:'transaction_discard',
                                         title:'查询指定时区间内的非法交易'
                                     },
                                    {
                                         index:'transaction_add',
                                         title:'新增交易'
                                     },
                                     {
                                          index:'transaction_batch',
                                          title:'批量交易'
                                      }
                                ]
                            }
                        ]
                    },
                     {
                     // icon: 'el-icon-menu',
                      index: 'log-history',
                      title: '更新日志'
                     }
                ]
            }
        },
        mounted () {
            const that = this
            if(parseInt(that.screenWidth)<=768){
                that.isCollapse=false
            }else
            {
                that.isCollapse=true
            }
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
        },
        methods:{
            toggleList(){
                this.isCollapse=!this.isCollapse
            }
        },
        computed:{
            onRoutes(){
                //this.isCollapse=!this.isCollapse;
                return this.$route.path.replace('/','');
            }
        },
        watch: {
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // that.screenWidth = that.$store.state.canvasWidth
                        if(parseInt(that.screenWidth)<=768){
                            that.isCollapse=false
                        }else
                        {
                            that.isCollapse=true
                        }
                        that.timer = false
                    }, 400)
                }
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
       /* background: #fff;*/
        z-index: 3;
        overflow: scroll;
    }
    .sidebar > ul {
        height:100%;
    }

    @media (max-width: 767px){
        .sidebardiv{
            /*background: #eef1f6;*/
            height: 100%;
        }
        .sidebar{
            display: block;
            position: relative;
            left: 0;
            top: 0;
            bottom: 0;
            verflow-y: auto;
            height: 100%;
            font-size: 10px;
            overflow-x: scroll;
            z-index:2;
        }
        .el-submenu .el-menu-item {
            height: 50px;
            line-height: 50px;
            padding: 0 25px;
        }
    }
</style>
