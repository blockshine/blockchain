<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>指定区块交易总数</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /block/transactionCount</code></pre>
                <p><strong>请求参数</strong></p>
                <p>String address, <br/>
                String blockId：<br/>
                String "earliest" for the earliest/genesis block<br/>
                String "latest" - for the latest mined block<br/>
                String "pending" - for the pending state/transactions</p>
                <p><strong>响应参数</strong></p>
                <p>String nonce</p>
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
                        <td style="text-align:left">nonce</td>
                        <td style="text-align:left">String</td>
                        <td style="text-align:left">返回指定区块的交易总数</td>
                    </tr>
                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">http://localhost:8090/block/transactionCount?address=0x1aB7D15092b4f5742Acb6Ba11322739511A5F193&blockId=earliest</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "nonce":"0"
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
