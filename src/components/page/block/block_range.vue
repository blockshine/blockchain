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
                                                        <td style="text-align:left">hash</td>
                                                        <td style="text-align:left">String</td>
                                                        <td>body</td>
                                                        <td>false</td>
                                                        <td style="text-align:left">指定hash开始</td>
                                                    </tr>

                                                     <tr>
                                                         <td style="text-align:left">qty</td>
                                                         <td style="text-align:left">Long</td>
                                                         <td>body</td>
                                                         <td>false</td>
                                                         <td style="text-align:left">获取条数</td>
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
                        <td style="text-align:left" >chainData</td>
                        <td style="text-align:left" >Array</td>
                        <td style="text-align:left" >链数据结构</td>
                    </tr>
                    
                    <tr>
                        <td style="text-align:left">|logsBloom</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|receiptsRoot</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">DATA, 32 Bytes - the root of the receipts trie of the block.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|unclesHash</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">Array - Array of uncle hashes.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|extraData</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left"> DATA - the "extra data" field of this block.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|txTrieRoot</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">DATA, 32 Bytes - the root of the transaction trie of the block.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|nonce</td>
                        <td style="text-align:left">string</td>
                        <td style="text-align:left">DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|difficultyBI</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">integer of the difficulty for all block</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|difficulty</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">QUANTITY - integer of the difficulty for this block.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|number</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">区块编号</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|gasLimit</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">交易费的限制</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|genesis</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">true</td>
                    </tr>

                    <tr>
                        <td style="text-align:left">|gasUsed</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">gas消耗值总和</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|coinbase</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">矿工的账</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|shortDescr</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">描述</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|stateRoot</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">DATA, 32 Bytes - the root of the final state trie of the block.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|powBoundary</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">共识</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|mixHash</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">与nonce配合用于挖矿，由上一个区块的一部分生成的hash。</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|parentHash</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">上一个区块的hash值，因为是创世块，所以这个值是0</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|hash</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">区块的hash值</td>
                    </tr>


                    <tr>
                        <td style="text-align:left">|timestamp</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">QUANTITY - the unix timestamp for when the block was collated.</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|encoded</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">编码</td>
                    </tr>
                    <tr>
                        <td style="text-align:left">|encodedWithoutNonce</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">没有Nonce的编码</td>
                    </tr>

                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">http://localhost:8090/block/headers</code></pre>
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
