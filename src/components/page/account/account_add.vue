<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">
            <h3>创建账户</h3>
            <li>请求参数
            String password</li>
            <li>请求url
            /account/create</li>
            <li>响应参数
            String address</li>
            <li>请求示例
            localhost:8090/account/create?password=123456</li>
            <li>响应示例
            0x544E45893fa0e26eE4c8B272FD59dc341ac35793</li>

            <h3>余额查询</h3>
            <li>请求参数
            String address</li>
            <li>请求url
            /account/balance</li>
            <li>响应参数
            String balance</li>
            <li>请求示例
            localhost:8090//account/balance?address=0x544E45893fa0e26eE4c8B272FD59dc341ac35793</li>
            <li>响应示例
            0</li>


            </article>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        }
    }
</script>

<style scoped>

</style>
