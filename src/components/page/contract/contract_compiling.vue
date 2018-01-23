<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>合约编译验证</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /contract/compile</code></pre>

                <p><strong>参数说明</strong></p>
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
<td>http body</td>
<td>true</td>
<td>包含合约源码的json字符串,<br /><code>注意不能包含换行符,引号等特殊符号需转义</code></td>
</tr>
</tbody>
</table>
<p><strong>请求示例</strong></p>
<pre><code class="shell language-shell">curl -X POST \
    -<span class="ruby">-header <span class="hljs-string">'Content-Type: application/json'</span> \
</span>    -<span class="ruby">-header <span class="hljs-string">'Accept: application/json'</span> \
</span>    -<span class="ruby">d <span class="hljs-string">'{"code": "contract test{}"}'</span> \
</span>    'https://xxx/v1/contract/compile'</code></pre>
<p><strong>响应说明</strong></p>
<p>返回json</p>
<pre><code class="json language-json">{
  <span class="hljs-attr">"Code"</span>: <span class="hljs-number">0</span>
  <span class="hljs-string">"Status"</span>: <span class="hljs-string">"ok"</span>,
  <span class="hljs-attr">"Cts"</span>: [
    {
      <span class="hljs-attr">"Status"</span>: <span class="hljs-string">""</span>,
      <span class="hljs-attr">"Id"</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">"Bin"</span>: <span class="hljs-string">"0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820b4c36b8b61723f302432d246407a061599017f8607ed26f1c053b5ecc63a54200029"</span>,
      <span class="hljs-attr">"Abi"</span>: <span class="hljs-string">"[]"</span>,
      <span class="hljs-attr">"Name"</span>: <span class="hljs-string">"SimpleBank"</span>,
      <span class="hljs-attr">"OK"</span>: <span class="hljs-literal">true</span>
    }
  ]
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
<td>Cts</td>
<td>&lt;Compile result&gt;</td>
<td>编译结果项列表</td>
</tr>
</tbody>
</table>
<p>编译结果项字段说明</p>
<table>
<thead>
<tr>
<th id="名称">名称</th>
<th id="类型">类型</th>
<th id="说明">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Status</td>
<td>string</td>
<td>编译状态描述</td>
</tr>
<tr>
<td>Id</td>
<td>number</td>
<td>编译项id</td>
</tr>
<tr>
<td>Bin</td>
<td>string</td>
<td>编译<code>Bin</code>结果</td>
</tr>
<tr>
<td>Abi</td>
<td>string</td>
<td>编译<code>Abi</code>结果</td>
</tr>
<tr>
<td>OK</td>
<td>boolean</td>
<td>是否编译成功</td>
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
