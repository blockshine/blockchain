<template>
    <div class="main">
    <div class="header">
        <div class="logo"><img src="../../assets/logo.png"/></div>
        <div class="sel-info">
        </div>
    </div></div>
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
    .main{
        width: 100%;
        background:#393D49;
    }
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        max-width: 1140px;
        margin: 0 auto;
    }
    .header .logo img{
        float: left;
        height:30px;
        margin-top: 20px;
        text-align: center;
    }
    .sel-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
        border:0px;
    }
    @media (max-width: 767px) {
        .header{
            height: 50px;
            line-height: 50px;
        }
        .header .logo img{
            margin-top: 15px;
            height: 20px;
            margin-left: 10px;
        }
    }
</style>
