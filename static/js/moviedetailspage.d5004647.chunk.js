"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[121],{440:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(885),a=n(673),i=n(791),s=n(87),c=n(689),o=n(207),u="MovieDetailsPage_btn__oGTxV",l="MovieDetailsPage_card__aCXRG",p="MovieDetailsPage_poster__Q+ne9",d="MovieDetailsPage_list__div34",v="MovieDetailsPage_item__NYiJ0",f="MovieDetailsPage_link__ZE1Eo",h="MovieDetailsPage_activeLink__ukBb5",m=n(184),x=function(){var e,t,n=(0,c.s0)(),x=(0,c.TH)(),_=(0,c.UO)().movieId,j=(0,i.useState)(null),k=(0,r.Z)(j,2),w=k[0],b=k[1];(0,i.useEffect)((function(){o.TP(_).then(b).catch(console.log)}),[_]);return console.log(w),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{type:"button",onClick:function(){var e,t;n(null!==(e=null===x||void 0===x||null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:u,children:"Go back"}),w&&(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("div",{className:p,children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(w.poster_path),alt:w.title,height:"100",width:"100"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"".concat(w.title," (").concat(w.release_date,")")}),(0,m.jsxs)("p",{children:["User score: ",10*w.vote_average,"%"]}),(0,m.jsxs)("p",{children:["Runtime : ",w.runtime," \u0445\u0432\u0438\u043b\u0438\u043d"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:w.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:w.genres.map((function(e){return e.name})).join(" ")})]})]}),(0,m.jsx)("h4",{children:"Additional information"}),(0,m.jsxs)("ul",{className:d,children:[(0,m.jsx)("li",{className:v,children:(0,m.jsx)(s.OL,{to:"/movies/".concat(_,"/cast"),state:{from:null===x||void 0===x||null===(e=x.state)||void 0===e?void 0:e.from},className:function(e){return e.isActive?h:f},children:"Cast"})}),(0,m.jsx)("li",{className:v,children:(0,m.jsx)(s.OL,{to:"/movies/".concat(_,"/reviews"),state:{from:null===x||void 0===x||null===(t=x.state)||void 0===t?void 0:t.from},className:function(e){return e.isActive?h:f},children:"Reviews"})})]}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)(a.Z,{}),children:(0,m.jsx)(c.j3,{})})]})}},207:function(e,t,n){n.d(t,{Df:function(){return o},TP:function(){return d},tx:function(){return m},z1:function(){return l},zv:function(){return f}});var r=n(861),a=n(311),i=n.n(a),s=n(44),c="8a9652bb26671496507850b18d700d89";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=moviedetailspage.d5004647.chunk.js.map