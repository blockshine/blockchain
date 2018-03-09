<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>交易详情</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /transaction/info</code></pre>
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
                            <td>hash</td>
                            <td>string</td>
                            <td>body</td>
                            <td>true</td>
                            <td>交易hash码</td>
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
                            <td style="text-align:left">链数据结构</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|blockHash</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">区块hash</td>
                        </tr>
                        <tr>
                            <td style="text-align:left">|input</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">输入</td>
                        </tr>
                        <tr>
                            <td style="text-align:left">|blockNumber</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">区块高度</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|gas</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">耗费gas</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|transactionIndex</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">交易索引</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|from</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">发送地址</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|to</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">接收地址</td>
                        </tr>


                        <tr>
                            <td style="text-align:left">|nonce</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">nonce</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|value</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">value</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|hash</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">交易hash</td>
                        </tr>

                        <tr>
                            <td style="text-align:left">|gasPrice</td>
                            <td style="text-align:left">String</td>
                            <td style="text-align:left">gas价格</td>
                        </tr>

                        </tbody>
                    </table>


                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">localhost:8090/transaction/create?name=Bob&secret=123</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "msg":"操作成功",
                    "code":0,
                    "chainData":
                        {
                            "blockHash":"0x19d4398b4a3d6d1127e74c2d8429c6abd2701a10bb885523fd2ad50687759c01",
                            "input":null,
                            "blockNumber":"0x324",
                            "gas":"0x0000000000015f90",
                            "transactionIndex":"0x0",
                            "from":"0x19b566dc229505f92f22791368b631e2cc3e1fbf",
                            "to":"0x31bf7c0905053699f9bf4d504aac803a1cd0e4b8",
                            "nonce":"0x00",
                            "value":"0x0b",
                            "hash":"0x8f439a3540a435b1b9859e64a645076ed607a225e70158aa003a794f2ef30c51",
                            "gasPrice":"0x104c533c00"
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
