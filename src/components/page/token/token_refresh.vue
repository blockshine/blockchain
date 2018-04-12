<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>授权码刷新</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">POST /token/refresh</code></pre>
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
                                <td>refreshToken</td>
                                <td>string</td>
                                <td>body</td>
                                <td>true</td>
                                <td>刷新授权码凭证</td>
                            </tr>
                        </tbody>
                    </table>

                <p><strong>响应参数</strong></p>
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
                            <td style="text-align:left">tokenObject</td>
                            <td style="text-align:left">Object</td>
                            <td style="text-align:left">token对象实体</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|scope</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">授权码使用范围</td>
                        </tr>
                        <tr>
                            <td style="text-align:left">|tokenType</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">授权码类型</td>
                        </tr>
                        <tr>
                            <td style="text-align:left">|expiryTime</td>
                            <td style="text-align:left">Int</td>
                            <td style="text-align:left">终止时间(秒数)</td>
                        </tr>
                        <tr>
                            <td style="text-align:left">|refreshToken</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">刷新授权码凭证</td>
                        </tr>
                        <tr>
                            <td style="text-align:left">|token</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">接口访问凭证</td>
                        </tr>

                    </tbody>

                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">localhost:8090/token/refresh</code></pre>
                <pre v-pre="" data-lang=""><code class="lang-">{"refreshToken": "a3af6455864edc545fa2d57e85ee46db"}</code></pre>

                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "msg": "操作成功",
                    "code": 0,
                    "tokenObject": {
                        "scope": "all",
                        "tokenType": "grant",
                        "expiryTime": 720,
                        "refreshToken": "OGQwYWJiZDIxZWJlODlmYmY3NmU1M",
                        "token": "YzhjZGJlYTY3MDg1MDQ2MGQ4OGJjY"
                    }
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
