<template>
    <div class="header">
        <div class="logo">聚链</div>
        <div class="sel-info">
            <!--<el-input-->
                <!--placeholder="请输入内容"-->
                <!--prefix-icon="el-icon-search"-->
                <!--v-model="seltext">-->
            <!--</el-input>-->
            <!--<el-dropdown trigger="click" @command="handleCommand">-->
                <!--<span class="el-dropdown-link">-->
                    <!--<img class="user-logo" src="../../../static/img/img.jpg">-->
                    <!--{{username}}-->
                <!--</span>-->
                <!--<el-dropdown-menu slot="dropdown">-->
                    <!--<el-dropdown-item command="loginout">退出</el-dropdown-item>-->
                <!--</el-dropdown-menu>-->
            <!--</el-dropdown>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            //     seltext:'',
                name: 'Emily'
            }
        },
        computed:{
        },
        methods:{
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .sel-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
        border:0px;
    }
</style>
