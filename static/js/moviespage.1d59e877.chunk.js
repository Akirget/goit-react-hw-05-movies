"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[583],{445:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(683),a=n(885),c=n(562),s=n.n(c),u=n(791),i=n(87),o=n(689),p=n(207),f="MoviesPage_form__Hzb4A",l="MoviesPage_input__h5lTQ",h="MoviesPage_btn__lDVr4",m="MoviesPage_list__xgBYI",v="MoviesPage_title__OtbeF",d="MoviesPage_item__31wgY",_="MoviesPage_link__Kqtq6",x=n(184),y=function(){var e=(0,o.TH)(),t=(0,o.s0)(),n=(0,u.useState)(""),c=(0,a.Z)(n,2),y=c[0],b=c[1],w=(0,u.useState)([]),k=(0,a.Z)(w,2),g=k[0],P=k[1],Z=new URLSearchParams(e.search).get("query");return(0,u.useEffect)((function(){Z&&(p.z1(Z).then(P).catch(s().Notify.warning("\u0422\u0430\u043a\u043e\u0433\u043e \u0444\u0456\u043b\u044c\u043c\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e")),b(Z))}),[Z]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault(),y&&t((0,r.Z)((0,r.Z)({},e),{},{search:"query=".concat(y)}))},className:f,children:[(0,x.jsx)("label",{children:(0,x.jsx)("input",{className:l,type:"text",name:"name",value:y,onChange:function(e){return b(e.target.value.toLowerCase())},placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0430"})}),(0,x.jsx)("button",{type:"submit",className:h,children:"\u041f\u043e\u0448\u0443\u043a"})]}),g&&(0,x.jsx)("ol",{className:m,children:g.map((function(t){var n=t.id,r=t.title;return(0,x.jsx)("li",{className:d,children:(0,x.jsx)(i.rU,{to:"".concat(n),state:{from:e},className:_,children:(0,x.jsx)("h5",{className:v,children:r})})},n)}))})]})}},207:function(e,t,n){n.d(t,{Df:function(){return i},TP:function(){return l},tx:function(){return d},z1:function(){return p},zv:function(){return m}});var r=n(861),a=n(311),c=n.n(a),s=n(44),u="8a9652bb26671496507850b18d700d89";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("movie/".concat(t,"?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("movie/".concat(t,"/credits?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=moviespage.1d59e877.chunk.js.map