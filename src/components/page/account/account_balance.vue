<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

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
