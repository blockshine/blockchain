<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main"><p>为将区块链性能提升至全新高度，聚链真正100%全新代码。使开发者可以迅速和节省成本部署基于区块链的应用。聚链提供了可靠签名合约保障极高的安全性。由多层架构保障高吞吐量的实现，使应用仅在区块链层面存储核心信息，使区块链层高效安全运营。私有链和公有链的无缝集成，用户可以选择私网环境独立部署，也可以选择公网环境与公有链连接达成更佳的数据管理。</p>
                <h3>易用性</h3>
                <ul>
                <li>极短块时间</li>
                <li>钱包具备连接远程节点快速开始的功能，无需加载完整链</li>
            </ul>
                <h3>安全性和用户保护</h3>
                <ul>
                    <li>聚链的360块后完全不可变特性使得POW或POS区块链存在的长期入侵成功可能性成为过去</li>
                    <li>聚链使用 Eigentrust++算法评估节点质量，踢出不健康的低声望节点，保护区块链健壮性</li>
                </ul>
                <h3>可达性</h3>
                <ul>
                    <li>可以自主选择连接全球范围内任意一个聚链网络中的节点，也可以由带有View功能的DNS连接公共推荐节点，有利于轻量或移动APP的实施</li>
                    <li>聚链软件在几秒钟内就能安装（或解压）完成开启使用，连接远程节点后可立即开始区块链操作</li>
                </ul>
            </article>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        }
    }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        color: #48576a;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 0px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 20px;
        word-wrap: break-word;
        background-color: #fff;
        border: 0px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>
