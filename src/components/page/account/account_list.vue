<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>账户清单</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /account/list</code></pre>
                <p><strong>请求参数</strong></p>

                <table>
                    <thead>
                    <tr>
                        <th id="参数">参数</th>
                        <th id="类型">类型</th>
                        <th id="传参类型">传参类型</th>
                        <th id="必须">必须</th>
                        <th id="说明">说明</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>token</td>
                            <td>string</td>
                            <td>HEAD</td>
                            <td>true</td>
                            <td>授权码</td>
                        </tr>
                    </tbody>
                </table>


                <p><strong>响应参数</strong></p>
                <p>String[] accounts</p>
                <table>
                    <thead>
                    <tr>
                        <th style="text-align:left">参数</th>
                        <th style="text-align:left">类型</th>
                        <th style="text-align:left">说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style="text-align:left">accounts</td>
                        <td style="text-align:left">String[]</td>
                        <td style="text-align:left">返回本客户端包含的所有账户地址</td>
                    </tr>
                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">http://localhost:8090/account/list</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "code":"0",
                    "msg": "操作成功",
                    "accounts":[
                                    "0xf73e9086f0bfa3cc7f9ed49aadb522bed0cf7f1d",
                                    "0x53427da8220f6cf9f3f73bc130f00b5845985059"
                               ]
                }
                </code></pre>

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
