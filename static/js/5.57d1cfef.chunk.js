(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[5],{299:function(e,t,n){e.exports=n.p+"static/media/default_ava.aca5023d.jpg"},300:function(e,t,n){e.exports={mainLeft:"Users_mainLeft__376Gn",userItem:"Users_userItem__vaSMY",wrap:"Users_wrap__2v1X1",avatar:"Users_avatar__7UMIK"}},304:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage___Iw7Q",pagination:"Paginator_pagination__3QWFe",paginator:"Paginator_paginator__1AL1O",pageNumber:"Paginator_pageNumber__3u1mu"}},305:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},310:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n(38),o=n(41),s=n(39),u=n(42),l=n(0),i=n.n(l),c=n(15),p=n(8);function f(e,t){return e===t}function g(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function m(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var v=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,s=r.pop(),u=m(r),l=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(n)),i=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=s,i.dependencies=u,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n=null,r=null;return function(){return g(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var h=v((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),d=function(e){return e.usersPage.pageSize},P=function(e){return e.usersPage.totalUsersCount},w=function(e){return e.usersPage.currentPage},b=function(e){return e.usersPage.isFetching},y=function(e){return e.usersPage.followingInProgress},E=n(132),_=n(57),C=n(16),N=n(50),j=n(304),I=n.n(j),U=n(305),S=n.n(U),k=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o,u=Math.ceil(t/n),c=[],p=1;p<=u;p++)c.push(p);var f=Math.ceil(u/s),g=Object(l.useState)(1),m=Object(N.a)(g,2),v=m[0],h=m[1],d=(v-1)*s+1,P=v*s;return i.a.createElement("div",{className:I.a.pagination},v>1&&i.a.createElement("button",{onClick:function(){h(v-1)}},"PREV"),c.filter((function(e){return e>=d&&e<=P})).map((function(e){return i.a.createElement("span",{className:S()(Object(C.a)({},I.a.selectedPage,r===e),I.a.pageNumber),key:e,onClick:function(){a(e)}},e)})),f>v&&i.a.createElement("button",{onClick:function(){h(v+1)}},"NEXT"))},O=n(12),z=n(300),A=n.n(z),x=n(299),F=n.n(x),L=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return i.a.createElement("div",{className:A.a.userItem},i.a.createElement("div",{className:A.a.mainLeft},i.a.createElement(O.b,{to:"/profile/".concat(t.id),activeClassName:A.a.activeLink},i.a.createElement("img",{src:null!=t.photos.small?t.photos.small:F.a,className:A.a.avatar,alt:""})),t.followed?i.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}}," Unfollow"):i.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}}," Follow")),i.a.createElement("div",{className:A.a.wrap},i.a.createElement("div",{className:A.a.left},i.a.createElement("h3",null,t.name),i.a.createElement("p",null,t.status)),i.a.createElement("div",{className:A.a.right},i.a.createElement("div",{className:""},"user.location.country"),i.a.createElement("div",{className:""},"user.location.city"))))},M=function(e){return i.a.createElement("div",null,i.a.createElement(k,{currentPage:e.currentPage,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged}),i.a.createElement("div",{className:A.a.userList},e.users.map((function(t){return i.a.createElement(L,{key:t.id,user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow})}))))},q=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(_.a,null):null,i.a.createElement(M,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}))}}]),t}(l.Component);t.default=Object(p.d)(Object(c.b)((function(e){return{users:h(e),pageSize:d(e),totalUsersCount:P(e),currentPage:w(e),isFetching:b(e),followingInProgress:y(e)}}),{follow:E.b,unfollow:E.e,setCurrentPage:E.d,requestUsers:E.c}))(q)}}]);
//# sourceMappingURL=5.57d1cfef.chunk.js.map