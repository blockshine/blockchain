<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>区块信息</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /block/info</code></pre>
                <p><strong>请求参数</strong></p>
                <p>
                String bnOrId : 区块编号, <br/>
                Boolean fullTransactionObjects : 如果为真，则返回完整的事务对象，如果仅为假，则返回事务的散列值。
                </p>
                <p><strong>响应参数</strong></p>
                <p>
        <table>
        <thead>
        <tr>
        <th style="text-align:left" >BlockResult</th>
        </tr>
        </thead>
        <thead>
        <tr>
        <th style="text-align:left">参数</th>
        <th style="text-align:left">类型</th>
        <th style="text-align:left">说明</th>
        </tr>
        </thead>
        <tbody>
      
        <tr>
        <td style="text-align:left">number</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> QUANTITY - the block number. null when its pending block.</td>
        </tr>

        <tr>
        <td style="text-align:left">hash</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 32 Bytes - hash of the block. null when its pending block.</td>
        </tr>

        <tr>
        <td style="text-align:left">parentHash</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 32 Bytes - hash of the parent block.</td>
        </tr>

        <tr>
        <td style="text-align:left">nonce</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left">DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.</td>
        </tr>

        <tr>
        <td style="text-align:left">sha3Uncles</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 32 Bytes - SHA3 of the uncles data in the block.</td>
        </tr>

        <tr>
        <td style="text-align:left">logsBloom</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.</td>
        </tr>

        <tr>
        <td style="text-align:left">transactionsRoot</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 32 Bytes - the root of the transaction trie of the block.</td>
        </tr>

        <tr>
        <td style="text-align:left">stateRoot</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 32 Bytes - the root of the final state trie of the block.</td>
        </tr>
        <tr>
        <td style="text-align:left">receiptRoot</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 32 Bytes - the root of the receipts trie of the block.</td>
        </tr>

        <tr>
        <td style="text-align:left">miner</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.</td>
        </tr>
        <tr>
        <td style="text-align:left">difficulty</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> QUANTITY - integer of the difficulty for this block.</td>
        </tr>

        <tr>
        <td style="text-align:left">totalDifficulty</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> QUANTITY - integer of the total difficulty of the chain until this block.</td>
        </tr>
        <tr>
        <td style="text-align:left">extraData</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> DATA - the "extra data" field of this block</td>
        </tr>

        <tr>
        <td style="text-align:left">size</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> QUANTITY - integer the size of this block in bytes.</td>
        </tr>
        <tr>
        <td style="text-align:left">gasLimit</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> QUANTITY - the maximum gas allowed in this block.</td>
        </tr>

        <tr>
        <td style="text-align:left">gasUsed</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> QUANTITY - the total used gas by all transactions in this block.</td>
        </tr>
        <tr>
        <td style="text-align:left">timestamp</td>
        <td style="text-align:left">String</td>
        <td style="text-align:left"> QUANTITY - the unix timestamp for when the block was collated.</td>
        </tr>
        <tr>
        <td style="text-align:left">transactions</td>
        <td style="text-align:left">Object[]</td>
        <td style="text-align:left"> Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.</td>
        </tr>
        <tr>
        <td style="text-align:left">uncles</td>
        <td style="text-align:left">String[]</td>
        <td style="text-align:left"> Array - Array of uncle hashes.</td>
        </tr>

        </tbody>
        </table>



                </p>
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
                        <td style="text-align:left">BlockResult</td>
                        <td style="text-align:left">BlockResult</td>
                        <td style="text-align:left">返回区块的基本信息</td>
                    </tr>
                    </tbody>
                </table>
                <p><strong>请求示例</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">http://localhost:8090/block/info?bnOrId=0x1942&fullTransactionObjects=true</code></pre>
                <p><strong>响应示例</strong></p>
                <blockquote>
                    <p>JSON格式</p>
                </blockquote>
                <pre v-pre="" data-lang=""><code class="lang-">
                {
                    "BlockResult": {
                        "number": "0x1b4", // 436
                        "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
                        "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
                        "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
                        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                        "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
                        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
                        "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
                        "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",
                        "difficulty": "0x027f07", // 163591
                        "totalDifficulty":  "0x027f07", // 163591
                        "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
                        "size":  "0x027f07", // 163591
                        "gasLimit": "0x9f759", // 653145
                        "minGasPrice": "0x9f759", // 653145
                        "gasUsed": "0x9f759", // 653145
                        "timestamp": "0x54e34e8e" // 1424182926
                        "transactions": [{...},{ ... }] 
                        "uncles": ["0x1606e5...", "0xd5145a9..."]
                    }
                }
                </code></pre>



                <h3>区块数量</h3>
                <p><strong>请求语法</strong></p>
                <pre v-pre="" data-lang=""><code class="lang-">GET /block/number</code></pre>
                <p><strong>请求参数</strong></p>
                <p>无</p>
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
                    "blockNumber":"0"
                }
                </code></pre>



                <h3>交易总数</h3>
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
