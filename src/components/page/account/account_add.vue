<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>账户清单</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /accounts</code></pre>
                <p><strong>请求参数</strong></p>
                <p>无</p>
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
                <pre v-pre="" data-lang=""><code class="lang-">http://localhost:8090/accounts</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "accounts":[
                                    "0xf73e9086f0bfa3cc7f9ed49aadb522bed0cf7f1d",
                                    "0x53427da8220f6cf9f3f73bc130f00b5845985059"
                               ]
                }
                </code></pre>



                <h3>创建账户</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /account/create</code></pre>
                <p><strong>请求参数</strong></p>
                <p>String name String secret</p>
                <p><strong>响应参数</strong></p>
                <p>String address</p>
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
                        <td style="text-align:left">address</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">返回新创建账户的地址</td>
                    </tr>
                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">localhost:8090/account/create?name=Bob&secret=123</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                "address":“0x544E45893fa0e26eE4c8B272FD59dc341ac35793”
                }
                </code></pre>


                <h3>余额查询</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /account/balance</code></pre>
                <p><strong>请求参数</strong></p>
                <p>String address</p>
                <p><strong>响应参数</strong></p>
                <p>String balance</p>
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
                        <td style="text-align:left">balance</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">返回该账户的余额</td>
                    </tr>
                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">localhost:8090/account/balance?address=0x544E45893fa0e26eE4c8B272FD59dc341ac35793</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                "balance":0
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
