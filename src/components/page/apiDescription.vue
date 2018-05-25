<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">
                <h3>总述</h3>
                <div class="box-shadow">
                    <ul>
                        <li>Restful风格的，以Json格式交互；</li>
                        <li>基于区块链技术，服务于企业用户；</li>
                        <li>用户需要申请账户并获得授权才可使用</li>
                    </ul>
                </div>
                <h3>环境</h3>
                <div class="box-shadow">
                    <p>沙盒环境（api）：http://openapitest.blockshine.net/</p>
                    <p>生产环境（api）：待补充</p>
                    <p>沙盒环境（platform）：http://openplatformtest.blockshine.net/</p>
                    <p>生产环境（platform）：待补充</p>
                </div>
                <h3>公共参数</h3>
                <div class="box-shadow">
                    <ul><li>msg：消息</li></ul>
                    <p>所有接口均返回msg字段，以文本方式说明调用结果。</p>
                    <ul><li>code：状态码</li></ul>
                    <p>所有接口均返回code字段，以状态码方式说明调用结果。0为成功，非0详情见<a href="/#/code_desc">错误码说明</a></p>
                    <ul><li>token：凭证</li></ul>
                    <p>Token通过请求授权接口获得，其他接口均需要在Header中传入Token。</p>
                </div>
                <h3>通信协议</h3>
                <div class="box-shadow">
                    <p>聚链API通过HTTP方式进行通信</p>
                </div>
                <h3>请求方法</h3>
                <div class="box-shadow">
                    <p>GET方法，请求参数需要包含在请求的URL中</p>
                    <p>POST方法，请求参数需要包含在请求体中的JSON内</p>
                </div>
                <h3>请求格式</h3>
                <div class="box-shadow">
                    <ul><li>GET：http://（域名）/（接口路径）?（参数）</li></ul>
                    <p>示例：</p>
                    <pre v-pre="" data-lang=""><code class="lang-">curl -X GET \
    --header 'token: ZTA1Y2NjZGY3ZTQwZWE5NGQwZGJmZ' \
    'http://openapitest.blockshine.net/transaction/info?hash=0x13445b8fa2da3ea6ac63e68e6715a7b5e3dddfab7c334c3d67d23be94a2fcae7'</code></pre>
                    <ul><li>POST：http://（域名）/（接口路径）</li></ul>
                    <p>示例：</p>
                    <pre v-pre="" data-lang=""><code class="lang-">curl -X POST \
    --header 'token: Yzk2NWYzZWUyYTgyMzU5MjRkZGQ3M' \
    --header 'Content-Type: application/json' \
    -d '{"receipt":"0x13445b8fa2da3ea6ac63e68e6715a7b5e3dddfab7c334c3d67d23be94a2fcae7"}' \
    'http://openapitest.blockshine.net/data/read'</code></pre>
                </div>
                </article>
        </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
</style>
