"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{713:function(e,n,r){r.d(n,{Aj:function(){return s},HI:function(){return i},IQ:function(){return o},Jh:function(){return f},qF:function(){return p}});var t=r(861),a=r(757),u=r.n(a),c=r(44).ZP.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day?api_key=9d2b0029c30fb6f0691793e32bc4db6f");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"/credits?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"/reviews?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/search/movie?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US&query=".concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},168:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(861),a=r(885),u=r(757),c=r.n(u),s=r(791),i=r(689),o=r(713),f="Reviews_item__DJKij",p="Reviews_author__CqYAZ",l="Reviews_text__EqLvx",v=r(184),d=function(){var e=(0,i.UO)().movieId,n=(0,s.useState)([]),r=(0,a.Z)(n,2),u=r[0],d=r[1],h=(0,s.useState)(null),b=(0,a.Z)(h,2),m=b[0],w=b[1],x=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Jh)(e);case 3:0===(r=n.sent).length?w("Sorry, there is no reviews for this movie."):d(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){x()}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{children:m||u.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,v.jsxs)("li",{className:f,children:[(0,v.jsxs)("p",{className:p,children:["Author: ",r]}),(0,v.jsx)("p",{className:l,children:t})]},n)}))})})}}}]);
//# sourceMappingURL=168.d36227ca.chunk.js.map