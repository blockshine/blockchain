<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>发送交易</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /transaction/counts</code></pre>
                <p><strong>请求参数</strong></p>

                    <table>
                        无
                    </table>


                <p>String name String secret</p>
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
                    "code":"0",
                    "msg": "操作成功",
                    "chainData":{
                        ""
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
