import{_ as r,e as i,c as v,l as o,k as f,A as m,o as p}from"./index.49bbe3bb.js";import{W as _}from"./wow.1f64db62.js";const b={id:"ContactUs"},u={class:"container"},w={class:"container-fuild ContactUs-container"},h={class:"row"},x={class:"col-xs-12 col-sm-12 col-md-6"},k={class:"form-horizontal",role:"form"},g={class:"form-group"},y={class:"col-sm-offset-2 col-sm-10"},C={__name:"ContactUs",setup(W){let s=null;i(()=>{s=window.BMap;var t=new s.Map("map"),a=new s.Point(114.54591657517,30.496032878104);t.centerAndZoom(a,18),t.enableScrollWheelZoom(!0);var e=new s.Marker(a);t.addOverlay(e);var d={width:50,height:10,title:"\u6B66\u6C49XXX\u516C\u53F8"},n=new s.InfoWindow(`<span>\u5730\u5740\uFF1A\u6B66\u6C49\u5E02\u4E1C\u6E56\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A\uFF0C\u9A6C\u8E44\u83B2<span>
     <br>
     <span>\u8054\u7CFB\u65B9\u5F0F\uFF1A423</span>`,d);t.openInfoWindow(n,t.getCenter());var c=new _;c.init()});function l(){window.open("https://neveryu.github.io/web-bookmarks/interview/","web-bookmarks")}return(t,a)=>(p(),v("div",b,[a[2]||(a[2]=o("div",{class:"banner container-fuild text-center"},"\u8054\u7CFB\u6211\u4EEC",-1)),o("div",u,[o("div",w,[o("div",h,[o("div",x,[o("form",k,[a[0]||(a[0]=f('<div class="form-group" data-v-359f01d0><label for="name" class="col-sm-2 control-label" data-v-359f01d0>\u59D3\u540D</label><div class="col-sm-10 col-xs-12" data-v-359f01d0><input type="text" class="form-control" id="name" placeholder="\u8BF7\u8F93\u5165\u540D\u5B57" data-v-359f01d0></div></div><div class="form-group" data-v-359f01d0><label for="email" class="col-sm-2 control-label" data-v-359f01d0>\u90AE\u7BB1</label><div class="col-sm-10" data-v-359f01d0><input type="text" class="form-control" id="email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1" data-v-359f01d0></div></div><div class="form-group" data-v-359f01d0><label for="tel" class="col-sm-2 control-label" data-v-359f01d0>\u7535\u8BDD</label><div class="col-sm-10" data-v-359f01d0><input type="text" class="form-control" id="tel" placeholder="\u8BF7\u8F93\u5165\u7535\u8BDD" data-v-359f01d0></div></div><div class="form-group" data-v-359f01d0><label for="content" class="col-sm-2 control-label" data-v-359f01d0>\u5185\u5BB9</label><div class="col-sm-10" data-v-359f01d0><textarea class="form-control" id="content" rows="8" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" data-v-359f01d0></textarea></div></div>',4)),o("div",g,[o("div",y,[o("button",{class:"btn btn-default btn-block",onClick:m(l,["stop"])}," \u63D0\u4EA4 ")])])])]),a[1]||(a[1]=o("div",{class:"col-xs-12 col-sm-12 col-md-6"},[o("div",{id:"map",class:"wow zoomIn"})],-1))])])])]))}},U=r(C,[["__scopeId","data-v-359f01d0"]]);export{U as default};