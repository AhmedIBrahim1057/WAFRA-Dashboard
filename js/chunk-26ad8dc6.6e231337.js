(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ad8dc6"],{"0fd9":function(t,a,e){"use strict";var s=e("ade3"),i=e("5530"),n=(e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),r=e("d9f7"),o=e("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,a){return c.reduce((function(e,s){return e[t+Object(o["D"])(s)]=a(),e}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},p=u("align",(function(){return{type:String,default:null,validator:d}})),m=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:m}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:g}})),h={align:Object.keys(p),justify:Object.keys(f),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function C(t,a,e){var s=b[t];if(null!=e){if(a){var i=a.replace(t,"");s+="-".concat(i)}return s+="-".concat(e),s.toLowerCase()}}var y=new Map;a["a"]=n["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},p),{},{justify:{type:String,default:null,validator:m}},f),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(t,a){var e=a.props,i=a.data,n=a.children,o="";for(var c in e)o+=String(e[c]);var l=y.get(o);return l||function(){var t,a;for(a in l=[],h)h[a].forEach((function(t){var s=e[t],i=C(a,t,s);i&&l.push(i)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(s["a"])(t,"align-".concat(e.align),e.align),Object(s["a"])(t,"justify-".concat(e.justify),e.justify),Object(s["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),y.set(o,l)}(),t(e.tag,Object(r["a"])(i,{staticClass:"row",class:l}),n)}})},"20f6":function(t,a,e){},"31da":function(t,a,e){"use strict";e("8abb")},"8abb":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var s=e("2b0e");function i(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var s=e.props,i=e.data,n=e.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var a=r[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),a(s.tag,i,n)}})}var n=e("d9f7");a["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,s=a.props,i=a.data,r=a.children,o=i.attrs;return o&&(i.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}))),s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),t(s.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(e||[])}),r)}})},c3d1:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[e("v-row",[e("v-col",{attrs:{cols:"12",lg:"6"}},[e("router-link",{attrs:{to:"/location-details"}},[e("base-material-card",{staticClass:"cursor-pointer",attrs:{color:"success","hover-reveal":""},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"text-h3 font-weight-light"},[t._v(" First Location Title ")])]},proxy:!0}])},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-6"},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",width:"100%"}})],1),e("div",{staticClass:"col-6"},[e("p",{staticClass:"text--secondary pl-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra ante sed nisl luctus congue. Cras ut nulla lectus. Suspendisse vitae risus at est molestie laoreet. Quisque malesuada in mauris non sollicitudin. Vestibulum in leo sem. Curabitur ultrices dui dignissim varius tincidunt. Etiam imperdiet risus augue, sed tempus nisl elementum aliquam. ")])])])])],1)],1),e("v-col",{attrs:{cols:"12",lg:"6"}},[e("router-link",{attrs:{to:"/location-details"}},[e("base-material-card",{staticClass:"cursor-pointer",attrs:{color:"#E91E63","hover-reveal":""},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"text-h3 font-weight-light"},[t._v(" Second Location Title ")])]},proxy:!0}])},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-6"},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",width:"100%"}})],1),e("div",{staticClass:"col-6"},[e("p",{staticClass:"text--secondary pl-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra ante sed nisl luctus congue. Cras ut nulla lectus. Suspendisse vitae risus at est molestie laoreet. Quisque malesuada in mauris non sollicitudin. Vestibulum in leo sem. Curabitur ultrices dui dignissim varius tincidunt. Etiam imperdiet risus augue, sed tempus nisl elementum aliquam. ")])])])])],1)],1),e("v-col",{attrs:{cols:"12",lg:"6"}},[e("router-link",{attrs:{to:"/location-details"}},[e("base-material-card",{staticClass:"cursor-pointer",attrs:{color:"blue","hover-reveal":""},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"text-h3 font-weight-light"},[t._v(" Third Location Title ")])]},proxy:!0}])},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-6"},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",width:"100%"}})],1),e("div",{staticClass:"col-6"},[e("p",{staticClass:"text--secondary pl-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra ante sed nisl luctus congue. Cras ut nulla lectus. Suspendisse vitae risus at est molestie laoreet. Quisque malesuada in mauris non sollicitudin. Vestibulum in leo sem. Curabitur ultrices dui dignissim varius tincidunt. Etiam imperdiet risus augue, sed tempus nisl elementum aliquam. ")])])])])],1)],1),e("v-col",{attrs:{cols:"12",lg:"6"}},[e("router-link",{attrs:{to:"/location-details"}},[e("base-material-card",{staticClass:"cursor-pointer",attrs:{color:"secondary","hover-reveal":""},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"text-h3 font-weight-light"},[t._v(" Forth Location Title ")])]},proxy:!0}])},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-6"},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",width:"100%"}})],1),e("div",{staticClass:"col-6"},[e("p",{staticClass:"text--secondary pl-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra ante sed nisl luctus congue. Cras ut nulla lectus. Suspendisse vitae risus at est molestie laoreet. Quisque malesuada in mauris non sollicitudin. Vestibulum in leo sem. Curabitur ultrices dui dignissim varius tincidunt. Etiam imperdiet risus augue, sed tempus nisl elementum aliquam. ")])])])])],1)],1)],1)],1)},i=[],n={},r=n,o=(e("31da"),e("2877")),c=e("6544"),l=e.n(c),u=e("62ad"),d=e("a523"),p=e("adda"),m=e("0fd9"),f=Object(o["a"])(r,s,i,!1,null,"202ef3b0",null);a["default"]=f.exports;l()(f,{VCol:u["a"],VContainer:d["a"],VImg:p["a"],VRow:m["a"]})}}]);
//# sourceMappingURL=chunk-26ad8dc6.6e231337.js.map