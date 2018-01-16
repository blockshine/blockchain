<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">
                <h3>创建账户</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /account/generate</code></pre>
                <p><strong>请求参数</strong></p>
                <p>无</p>
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
                        <td style="text-align:left">privateKey</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">返回新创建账户的私匙</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">address</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">返回新创建账户的地址</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">publicKey</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">返回新创建账户的公匙</td>
                    </tr>
                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">http://127.0.0.1:7890/account/generate</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">{
            "privateKey": "0962c6505d02123c40e858ff8ef21e2b7b5466be12c4770e3bf557aae828390f",
            "address": "NCKMNCU3STBWBR7E3XD2LR7WSIXF5IVJIDBHBZQT",
            "publicKey": "c2e19751291d01140e62ece9ee3923120766c6302e1099b04014fe1009bc89d3"
        }</code></pre>

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
