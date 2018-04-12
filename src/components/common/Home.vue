<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="container scrollbar">
            <div class="relative">
            <v-sidebar></v-sidebar>
            <div class="content">
                <transition name="move" mode="out-in"><router-view></router-view></transition>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>
<style scoped>
    .scrollbar{
        overflow: scroll;
        height: 100%;
    }
    .container{
        width: 1140px;
        margin: 0 auto;
        /*position: inherit;*/
        min-height: 900px;
        margin-top: 20px;
    }
    .relative{
        position: relative;
    }
    .content{
        width:1040px;
        padding-left: 270px;
        padding-right: 20px;
        padding-bottom: 300px;
        margin: auto;
        box-sizing: border-box;
    }
    .container::-webkit-scrollbar,
    .content::-webkit-scrollbar {
        /*display: none;*/
    }
    @media (max-width: 767px) {
        .container{
            width: 100%;
        }
        .content{
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 300px;
            /* margin: auto; */
            box-sizing: border-box;
        }
    }
    .container::-webkit-scrollbar {
        width: 2px;
        height: 2px;
    }

    .container::-webkit-scrollbar-track-piece {
        background-color: rgba(0, 0, 0, 0.1);
        -webkit-border-radius: 6px;
    }

    .container::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background-color: rgba(125, 125, 125, 0.1);
        -webkit-border-radius: 6px;
    }

    .container::-webkit-scrollbar-thumb:horizontal {
        width: 5px;
        background-color: rgba(125, 125, 125, 0.1);
        -webkit-border-radius: 6px;
    }
</style>