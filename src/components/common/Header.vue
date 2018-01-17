<template>
    <div class="header">
        <div class="logo">聚链</div>
        <div class="sel-info">
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
    @media (max-width: 767px) {
        .header{
            height: 50px;
            line-height: 50px;
        }
    }
</style>
