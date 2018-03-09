<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>查询指定范围内的区块列表</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /block/headers</code></pre>
                <p><strong>请求参数</strong></p>
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
                                                        <td style="text-align:left">hash</td>
                                                        <td style="text-align:left">String</td>
                                                        <td style="text-align:left">指定hash开始</td>
                                                    </tr>

                                                     <tr>
                                                         <td style="text-align:left">qty</td>
                                                         <td style="text-align:left">Long</td>
                                                         <td style="text-align:left">获取条数</td>
                                                      </tr>
                                                    </tbody>
                                                </table>
                <p><strong>响应参数</strong></p>
                <p>String blockNumber</p>
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
                        <td style="text-align:left">blockNumber</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">返回区块数量</td>
                    </tr>

                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">http://localhost:8090/block/number</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                	"msg": "操作成功",
                	"code": 0,
                	"chainData": [{
                		"logsBloom": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
                		"receiptsRoot": "VugfFxvMVab/g0XmksD4bltI4BuZbK3AAWIvteNjtCE=",
                		"unclesHash": "HcxN6N7HXXqrhbVntszUGtMSRRuUinQT8KFC/UDUk0c=",
                		"extraData": null,
                		"txTrieRoot": "VugfFxvMVab/g0XmksD4bltI4BuZbK3AAWIvteNjtCE=",
                		"nonce": "AAAAAAAAAIg=",
                		"difficultyBI": 512,
                		"difficulty": "AgA=",
                		"number": 0,
                		"gasLimit": "E4gAAAAAAA==",
                		"genesis": true,
                		"gasUsed": 0,
                		"coinbase": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                		"shortDescr": "#0 (737c22 <~ 000000)",
                		"stateRoot": "rgaPYjPWFyssbaBP9IIZSZbfkQ4mB8LS5G/MJPKBPBw=",
                		"powBoundary": "AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                		"mixHash": "AAAAAAAAAAAAAAAAAAAAAAAAAGR1cmFsZXhzZWRsZXg=",
                		"parentHash": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                		"hash": "c3wiAHrrrcM3g30AolaIgsgyd7wmK0LJUh6lcBFeA4E=",
                		"timestamp": 0,
                		"encoded": "+QH2oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoB3MTejex116q4W1Z7bM1BrTEkUblIp0E/ChQv1A1JNHlAAAAAAAAAAAAAAAAAAAAAAAAAAAoK4Gj2Iz1hcrLG2gT/SCGUmW35EOJgfC0uRvzCTygTwcoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhuQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIICAICHE4gAAAAAAICAgKAAAAAAAAAAAAAAAAAAAAAAAAAAZHVyYWxleHNlZGxleIgAAAAAAAAAiA==",
                		"encodedWithoutNonce": "+QHMoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoB3MTejex116q4W1Z7bM1BrTEkUblIp0E/ChQv1A1JNHlAAAAAAAAAAAAAAAAAAAAAAAAAAAoK4Gj2Iz1hcrLG2gT/SCGUmW35EOJgfC0uRvzCTygTwcoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhoFboHxcbzFWm/4NF5pLA+G5bSOAbmWytwAFiL7XjY7QhuQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIICAICHE4gAAAAAAICAgA=="
                	}]
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
