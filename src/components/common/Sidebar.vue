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
                                        index:'account_add',
                                        title:'账户相关'
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
                            },
                            {
                                index:'8',
                                group:'交易',
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
        background: #fff;
        z-index: 3;
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
