webpackJsonp([33],{510:function(t,e,a){a(693);var s=a(197)(a(551),a(653),"data-v-7d2016b8",null);t.exports=s.exports},551:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},610:function(t,e,a){e=t.exports=a(196)(!1),e.push([t.i,"",""])},653:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ms-doc"},[a("article",{staticClass:"markdown-section",attrs:{id:"main"}},[a("h3",[t._v("总述")]),t._v(" "),a("div",{staticClass:"box-shadow"},[a("ul",[a("li",[t._v("Restful风格的，以Json格式交互；")]),t._v(" "),a("li",[t._v("基于区块链技术，服务于企业用户；")]),t._v(" "),a("li",[t._v("用户需要申请账户并获得授权才可使用")])])]),t._v(" "),a("h3",[t._v("环境")]),t._v(" "),a("div",{staticClass:"box-shadow"},[a("p",[t._v("沙盒环境（api）：http://openapitest.blockshine.net/")]),t._v(" "),a("p",[t._v("生产环境（api）：待补充")]),t._v(" "),a("p",[t._v("沙盒环境（platform）：http://openplatformtest.blockshine.net/")]),t._v(" "),a("p",[t._v("生产环境（platform）：待补充")])]),t._v(" "),a("h3",[t._v("公共参数")]),t._v(" "),a("div",{staticClass:"box-shadow"},[a("ul",[a("li",[t._v("msg：消息")])]),t._v(" "),a("p",[t._v("所有接口均返回msg字段，以文本方式说明调用结果。")]),t._v(" "),a("ul",[a("li",[t._v("code：状态码")])]),t._v(" "),a("p",[t._v("所有接口均返回code字段，以状态码方式说明调用结果。0为成功，非0详情见"),a("a",{attrs:{href:"/#/code_desc"}},[t._v("错误码说明")])]),t._v(" "),a("ul",[a("li",[t._v("token：凭证")])]),t._v(" "),a("p",[t._v("Token通过请求授权接口获得，其他接口均需要在Header中传入Token。")])]),t._v(" "),a("h3",[t._v("通信协议")]),t._v(" "),a("div",{staticClass:"box-shadow"},[a("p",[t._v("聚链API通过HTTP方式进行通信")])]),t._v(" "),a("h3",[t._v("请求方法")]),t._v(" "),a("div",{staticClass:"box-shadow"},[a("p",[t._v("GET方法，请求参数需要包含在请求的URL中")]),t._v(" "),a("p",[t._v("POST方法，请求参数需要包含在请求体中的JSON内")])]),t._v(" "),a("h3",[t._v("请求格式")]),t._v(" "),a("div",{staticClass:"box-shadow"},[a("ul",[a("li",[t._v("GET：http://（域名）/（接口路径）?（参数）")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("pre",{pre:!0,attrs:{"data-lang":""}},[a("code",{attrs:{class:"lang-"}},[t._v("curl -X GET \\\n--header 'token: ZTA1Y2NjZGY3ZTQwZWE5NGQwZGJmZ' \\\n'http://openapitest.blockshine.net/transaction/info?hash=0x13445b8fa2da3ea6ac63e68e6715a7b5e3dddfab7c334c3d67d23be94a2fcae7'")])]),t._v(" "),a("ul",[a("li",[t._v("POST：http://（域名）/（接口路径）")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("pre",{pre:!0,attrs:{"data-lang":""}},[a("code",{attrs:{class:"lang-"}},[t._v("curl -X POST \\\n--header 'token: Yzk2NWYzZWUyYTgyMzU5MjRkZGQ3M' \\\n--header 'Content-Type: application/json' \\\n-d '{\"receipt\":\"0x13445b8fa2da3ea6ac63e68e6715a7b5e3dddfab7c334c3d67d23be94a2fcae7\"}' \\\n'http://openapitest.blockshine.net/data/read'")])])])])])])}]}},693:function(t,e,a){var s=a(610);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(198)("dd643eec",s,!0)}});