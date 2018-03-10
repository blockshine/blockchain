<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>批量交易(暂未开放)</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">POST /transaction/batch</code></pre>
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
                            <td>to</td>
                            <td>Array</td>
                            <td>body</td>
                            <td>true</td>
                            <td>接收地址</td>
                        </tr>
                        <tr>
                            <td>amount</td>
                            <td>Array</td>
                            <td>body</td>
                            <td>true</td>
                            <td>金额</td>
                        </tr>
                    </tbody>
                </table>


                <p><strong>响应参数</strong></p>
                <p>无</p>
                <p><strong>请求示例</strong></p>
               <pre v-pre="" data-lang=""><code class="lang-">localhost:8090/transaction/batch</code></pre>

               <pre v-pre="" data-lang="">
                    <code class="lang-">

                       {[
                           {
                            "to":"0x544E45893fa0e26eE4c8B272FD59dc341ac35793",
                             "amount":"1234500"
                           },
                           {
                           "to":"0x544E45893fa0e26eE4c8B272FD59dc341ac35794",
                            "amount":"8989"
                          }
                         ]
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
                    "msg": "操作成功"
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
