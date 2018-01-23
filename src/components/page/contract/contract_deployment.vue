<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>合约部署</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /contract/deploy</code></pre>
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
<td>code</td>
<td>string</td>
<td>body</td>
<td>true</td>
<td>包含合约Bin和发起者地址的<code>json字符串</code></td>
</tr>
</tbody>
</table>
<p><strong>请求示例</strong></p>
<pre><code class="shell language-shell">curl -X POST \
    -<span class="ruby">-header <span class="hljs-string">'Content-Type: application/json'</span> \
</span>    -<span class="ruby">-header <span class="hljs-string">'Accept: application/json'</span> \
</span>    -<span class="ruby">d <span class="hljs-string">'{ \
</span></span>        "Bin": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820b4c36b8b61723f302432d246407a061599017f8607ed26f1c053b5ecc63a54200029", \
        "From": "0x3713c3d01ae09cf32787c9c66c9c0781cf4b613d" \
        }' \
   'https://xxx/v1/contract/deploy'</code></pre>
<p><strong>响应说明</strong></p>
<p>返回json</p>
<pre><code class="json language-json">{
    <span class="hljs-attr">"Code"</span>: <span class="hljs-number">0</span>
    <span class="hljs-string">"Status"</span>: <span class="hljs-string">"ok"</span>,
    <span class="hljs-attr">"TxHash"</span>: <span class="hljs-string">"0xb998f23db409c19435a06a4276feed00c70ba0f24ab6705c76b520e607d69223"</span>
}</code></pre>
<table>
<thead>
<tr>
<th id="返回字段">返回字段</th>
<th id="类型">类型</th>
<th id="说明">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Code</td>
<td>number</td>
<td>错误码</td>
</tr>
<tr>
<td>Status</td>
<td>string</td>
<td>状态信息</td>
</tr>
<tr>
<td>TxHash</td>
<td>string</td>
<td>本次交易的哈希值</td>
</tr>
</tbody>
</table>

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
