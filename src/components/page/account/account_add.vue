<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>创建账户</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">POST /account/create</code></pre>
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
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>body</td>
                            <td>true</td>
                            <td>用户名</td>
                        </tr>
                        <tr>
                            <td>secret</td>
                            <td>string</td>
                            <td>body</td>
                            <td>true</td>
                            <td>密码</td>
                        </tr>

                    </tbody>
                </table>

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
                <pre v-pre="" data-lang=""><code class="lang-">localhost:8090/account/create</code></pre>
                <pre v-pre="" data-lang="">
                    <code class="lang-">
                    {
                         "name":"Bob",
                         "secret":"123"
                    }
                    </code>
                </pre>

                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "code":"0",
                    "msg": "操作成功",
                    "address":“0x544E45893fa0e26eE4c8B272FD59dc341ac35793”
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
