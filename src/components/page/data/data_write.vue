<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>数据写入链中</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">POST /data/write</code></pre>
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
                        <td>head</td>
                        <td>true</td>
                        <td>授权码</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>string</td>
                        <td>body</td>
                        <td>true</td>
                        <td>写入数据</td>
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
                        <td style="text-align:left">chainData</td>
                        <td style="text-align:left">Array</td>
                        <td style="text-align:left">区块链响应数据</td>
                    </tr>

                    <tr>
                        <td style="text-align:left">|code</td>
                        <td style="text-align:left">Integer</td>
                        <td style="text-align:left">区块链响应状态码</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|message</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">区块链响应消息</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|receipt</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">本次数据Hash</td>
                    </tr>

                    </tbody>
                </table>

                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">localhost:8090/data/write</code></pre>

                <p><strong>请求示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "data": "0x13445......fcae7"

                }

                </code></pre>

                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "msg": "操作成功",
                    "code": 0,
                    "chainData": {
                        "code": "0",
                        "receipt": "0x27953......d21b",
                        "message": "Success ! "
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

