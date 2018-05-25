<template>
    <div>
        <div class="ms-doc">
            <article class="markdown-section" id="main">

                <h3>错误码说明</h3>

                <p><strong>错误码说明</strong></p>

                <table>
                    <thead>
                    <tr>
                        <th id="code">编码</th>
                        <th id="desc">编码描述</th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1000101</td>
                            <td>参数丢失</td>
                        </tr>
                        <tr>
                            <td>1000201</td>
                            <td>参数错误</td>
                        </tr>

                        <tr>
                            <td>1000301</td>
                            <td>token不存在</td>
                        </tr>

                        <tr>
                            <td>1000302</td>
                            <td>token不正确</td>
                        </tr>

                        <tr>
                            <td>2000101</td>
                            <td>服务器内部错误</td>
                        </tr>
                        <tr>
                            <td>3000101</td>
                            <td>第三方调用错误</td>
                        </tr>

                        <tr>
                            <td>4000101</td>
                            <td>拒绝错误</td>
                        </tr>


                        <tr>
                            <td>5000001</td>
                            <td>底层链错误</td>
                        </tr>

                        <tr>
                            <td>5000002</td>
                            <td>底层链无数据返回</td>
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
