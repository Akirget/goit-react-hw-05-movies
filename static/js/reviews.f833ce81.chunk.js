"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{186:function(t,n,e){e.r(n);var r=e(885),a=e(791),u=e(689),c=e(207),s=e(184);n.default=function(){var t=(0,u.UO)().movieId,n=(0,a.useState)(null),e=(0,r.Z)(n,2),i=e[0],o=e[1];return(0,a.useEffect)((function(){c.tx(t).then(o)}),[t]),(0,s.jsx)(s.Fragment,{children:i&&i.length>0?(0,s.jsx)("ul",{children:i.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e]}),(0,s.jsx)("p",{children:r})]},n)}))}):(0,s.jsx)("p",{children:"We don't have any reviews for this movie."})})}},207:function(t,n,e){e.d(n,{Df:function(){return i},TP:function(){return h},tx:function(){return m},z1:function(){return p},zv:function(){return d}});var r=e(861),a=e(311),u=e.n(a),c=e(44),s="8a9652bb26671496507850b18d700d89";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.ZP)("trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.ZP)("search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.ZP)("movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.ZP)("movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.ZP)("movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=reviews.f833ce81.chunk.js.map