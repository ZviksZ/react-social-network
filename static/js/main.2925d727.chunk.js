(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{126:function(e,A,t){"use strict";t.d(A,"b",(function(){return s}));var n=t(39),r=t(15);function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(t,!0).forEach((function(A){Object(r.a)(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(t).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}var c="my-social-network/dialogs/SEND-MESSAGE",i={dialogs:[{id:1,name:"John"},{id:2,name:"Eddy"},{id:3,name:"Molly"},{id:4,name:"CJ"},{id:5,name:"Alex"},{id:6,name:"Mark"},{id:7,name:"Sam"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"Fine"},{id:4,message:"Yo"},{id:5,message:"Yo2"}]},s=function(e){return{type:c,message:e}};A.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case c:return o({},e,{messages:[].concat(Object(n.a)(e.messages),[{id:e.messages.length+1,message:A.message}])});default:return e}}},129:function(e,A,t){"use strict";var n=t(8),r=t.n(n),a=t(19),o=t(39),c=t(15),i=t(13);function s(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}var u=function(e,A,t,n){return e.map((function(e){return e[t]===A?function(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?s(t,!0).forEach((function(A){Object(c.a)(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}({},e,{},n):e}))};function l(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?l(t,!0).forEach((function(A){Object(c.a)(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(t).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}t.d(A,"d",(function(){return b})),t.d(A,"c",(function(){return Q})),t.d(A,"b",(function(){return v})),t.d(A,"e",(function(){return I}));var E="my-social-network/users/FOLLOW",f="my-social-network/users/UNFOLLOW",m="my-social-network/users/SET_USERS",g="my-social-network/users/SET_CURRENT_PAGE",w="my-social-network/users/SET_TOTAL_USERS_COUNT",d="my-social-network/users/TOGGLE_IS_FETCHING",y={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},C=function(e){return{type:E,userId:e}},h=function(e){return{type:f,userId:e}},b=function(e){return{type:g,currentPage:e}},O=function(e){return{type:d,isFetching:e}},k=function(e,A){return{type:"my-social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:A}},Q=function(e,A){return function(){var t=Object(a.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(O(!0)),n(b(e)),t.next=4,i.d.getUsers(e,A);case 4:a=t.sent,n(O(!1)),n((o=a.items,{type:m,users:o})),n((r=a.totalCount,{type:w,totalUsersCount:r}));case 8:case"end":return t.stop()}var r,o}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(){var e=Object(a.a)(r.a.mark((function e(A,t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(k(!0,t)),e.next=3,n(t);case 3:0===e.sent.data.resultCode&&A(a(t)),A(k(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(A,t,n,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var A=Object(a.a)(r.a.mark((function A(t){return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:S(t,e,i.d.followUser.bind(i.d),C);case 1:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},I=function(e){return function(){var A=Object(a.a)(r.a.mark((function A(t){return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:S(t,e,i.d.unfollowUser.bind(i.d),h);case 1:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()};A.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case E:return p({},e,{users:u(e.users,A.userId,"id",{followed:!0})});case f:return p({},e,{users:u(e.users,A.userId,"id",{followed:!1})});case m:return p({},e,{users:A.users});case g:return p({},e,{currentPage:A.currentPage});case w:return p({},e,{totalUsersCount:A.totalUsersCount});case d:return p({},e,{isFetching:A.isFetching});case"my-social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS":return p({},e,{followingInProgress:A.isFetching?[].concat(Object(o.a)(e.followingInProgress),[A.userId]):e.followingInProgress.filter((function(e){return e!==A.userId}))});default:return e}}},13:function(e,A,t){"use strict";t.d(A,"d",(function(){return a})),t.d(A,"a",(function(){return o})),t.d(A,"b",(function(){return c})),t.d(A,"c",(function(){return i}));var n=t(133),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fd8957ce-caea-4e92-b2d0-6ffd7fdf3dc8"}}),a={getUsers:function(e,A){return r.get("users?page=".concat(e,"&count=").concat(A)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e))},followUser:function(e){return r.post("follow/".concat(e))}},o={getMyProfile:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,A){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:A,rememberMe:t})},logout:function(){return r.delete("auth/login")}},c={getUserProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},i={getCaptcha:function(){return r.get("security/get-captcha-url")},uploadProfilePhoto:function(e){var A=new FormData;return A.append("image",e),r.put("profile/photo",A,{headers:{"Content-Type":"multipart/form-data"}})}}},131:function(e,A){e.exports="data:image/gif;base64,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"},132:function(e,A,t){e.exports={loaderGif:"Preloader_loaderGif___NNr7"}},162:function(e,A,t){e.exports=t(293)},170:function(e,A,t){},25:function(e,A,t){"use strict";t.d(A,"c",(function(){return u})),t.d(A,"b",(function(){return l})),t.d(A,"d",(function(){return p})),t.d(A,"a",(function(){return E}));var n=t(69),r=t(0),a=t.n(r),o=t(88),c=t(48),i=t.n(c),s=function(e){e.input;var A=e.meta,t=A.touched,r=A.error,o=e.children,c=(Object(n.a)(e,["input","meta","children"]),t&&r);return a.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},a.a.createElement("div",null,o),a.a.createElement("div",null,c&&a.a.createElement("span",null,r)))},u=function(e){var A=e.input,t=(e.meta,e.children,Object(n.a)(e,["input","meta","children"]));return a.a.createElement(s,e,a.a.createElement("textarea",Object.assign({},A,t)))},l=function(e){var A=e.input,t=(e.meta,e.children,Object(n.a)(e,["input","meta","children"]));return a.a.createElement(s,e,a.a.createElement("input",Object.assign({},A,t)))},p=function(e,A,t,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return a.a.createElement("div",null,a.a.createElement(o.a,Object.assign({name:A,placeholder:e,component:n},r,{validate:t})),c)},E=function(e){var A=e.input,t=e.type,n=e.meta;n.touched,n.error,n.warning;return delete A.value,a.a.createElement("div",null,a.a.createElement("label",{htmlFor:A.name},"Choose File from your Computer",a.a.createElement("input",Object.assign({},A,{type:t}))))}},288:function(e,A,t){},289:function(e,A,t){},290:function(e,A,t){},291:function(e,A,t){},292:function(e,A,t){},293:function(e,A,t){"use strict";t.r(A);var n=t(51),r=t(52),a=t(54),o=t(53),c=t(55),i=t(0),s=t.n(i),u=t(14),l=t(30),p=t(10),E=(t(170),t(7)),f=t(41),m=t(8),g=t.n(m),w=t(19),d=t(15),y=t(33),C=t(13);function h(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?h(t,!0).forEach((function(A){Object(d.a)(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}var O="my-social-network/auth/SET_USER_DATA",k={id:null,isFetching:!1,login:null,email:null,isAuth:!1},Q=function(e,A,t,n){return{type:O,payload:{id:e,email:A,login:t,isAuth:n}}},S=function(){return function(){var e=Object(w.a)(g.a.mark((function e(A){var t,n,r,a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.getMyProfile();case 2:0===(t=e.sent).resultCode&&(n=t.data,r=n.id,a=n.email,o=n.login,A(Q(r,a,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case O:return b({},e,{},A.payload);default:return e}},I=t(40),B=t.n(I),L=function(e){return s.a.createElement("header",{className:B.a.header},s.a.createElement(p.b,{to:"/"},s.a.createElement("img",{className:B.a.header_logo,src:"https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png",alt:""})),s.a.createElement("div",{className:B.a.loginBlock},e.isAuth?s.a.createElement("div",{className:B.a.rightWrap},s.a.createElement(p.b,{to:"/",className:B.a.loginName},e.login),s.a.createElement("button",{onClick:e.logoutMe},"Log out")):s.a.createElement(p.b,{to:"/login"},"Login")))},M=function(e){function A(){return Object(n.a)(this,A),Object(a.a)(this,Object(o.a)(A).apply(this,arguments))}return Object(c.a)(A,e),Object(r.a)(A,[{key:"render",value:function(){return s.a.createElement(L,this.props)}}]),A}(i.Component),J=Object(u.b)((function(e){return{id:e.auth.id,login:e.auth.login,email:e.auth.email,isFetching:e.auth.isFetching,isAuth:e.auth.isAuth}}),{logoutMe:function(){return function(){var e=Object(w.a)(g.a.mark((function e(A){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&A(Q(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()}})(M),K=t(45),F=t.n(K),x=t(127),D=t(73),G=t(25),T=t(48),U=t.n(T),q=Object(x.a)({form:"login"})((function(e){var A=e.handleSubmit,t=e.error;return s.a.createElement("form",{className:F.a.loginForm,onSubmit:A},Object(G.d)("Login","email",[D.b],G.b),Object(G.d)("Password","password",[D.b],G.b,{type:"password"}),Object(G.d)(null,"rememberMe",null,G.b,{type:"checkbox"},"remember me"),t?s.a.createElement("div",{className:U.a.formSummaryError}," ",t," "):null,s.a.createElement("button",null,"Log in"))})),R=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginMe:function(e,A,t){return function(){var n=Object(w.a)(g.a.mark((function n(r){var a,o;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.a.login(e,A,t);case 2:0===(a=n.sent).data.resultCode?r(S()):(o=a.data.messages.length>0?a.data.messages[0]:"Some error",r(Object(y.a)("login",{_error:o})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?s.a.createElement(l.a,{to:"/profile"}):s.a.createElement("div",null,s.a.createElement("h1",null,"Login"),s.a.createElement(q,{onSubmit:function(A){var t=A.email,n=A.password,r=A.rememberMe;e.loginMe(t,n,r)}}))})),P=t(93),j=t.n(P),z=function(e){var A="/profile/"+e.id;return s.a.createElement("div",{className:j.a.item,id:e.id},s.a.createElement("img",{src:"https://mdn.mozillademos.org/files/16631/favicon57.de33179910ae.1.1.png",alt:""}),s.a.createElement(p.b,{to:A,activeClassName:j.a.activeLink},e.name))},H=t(94),N=t.n(H),Y=function(e){var A=e.friends.filter((function(e){return e.followed})).map((function(e){return s.a.createElement(z,{name:e.name,id:e.id})}));return s.a.createElement("div",{className:N.a.friends},s.a.createElement("h3",null,"Friends(",A.length,")"),s.a.createElement("div",{className:N.a.friendsList},A))},Z=t(9),W=t.n(Z),X=function(e){return s.a.createElement("nav",{className:W.a.nav},s.a.createElement("ul",{className:W.a.nav_list},s.a.createElement("li",{className:"".concat(W.a.item," ").concat(W.a.active)},s.a.createElement(p.b,{to:"/profile",activeClassName:W.a.activeLink},"Profile")),s.a.createElement("li",{className:W.a.item},s.a.createElement(p.b,{to:"/dialogs",activeClassName:W.a.activeLink},"Messages")),s.a.createElement("li",{className:W.a.item},s.a.createElement(p.b,{to:"/users",activeClassName:W.a.activeLink},"Users")),s.a.createElement("li",{className:W.a.item},s.a.createElement(p.b,{to:"/news",activeClassName:W.a.activeLink},"News")),s.a.createElement("li",{className:W.a.item},s.a.createElement(p.b,{to:"/music",activeClassName:W.a.activeLink},"Music")),s.a.createElement("li",{className:W.a.item},s.a.createElement(p.b,{to:"/settings",activeClassName:W.a.activeLink},"Settings")),s.a.createElement("li",{className:W.a.item},s.a.createElement(p.b,{to:"/test",activeClassName:W.a.activeLink},"TestPage"))),e.users.length?s.a.createElement(Y,{friends:e.users}):null)},V=Object(u.b)((function(e){return{friends:e.sidebarPage.friends,users:e.usersPage.users}}))(X),_=(t(288),function(e){return s.a.createElement("div",null,"News")}),$=(t(289),function(e){return s.a.createElement("div",null,"Settings")}),ee=(t(290),function(e){return s.a.createElement("div",null,"Music")});t(291);var Ae=t(88),te=Object(x.a)({form:"upload-photo-form"})((function(e){var A=e.handleSubmit;return s.a.createElement("form",{className:F.a.loginForm,onSubmit:A},s.a.createElement("div",null,s.a.createElement(Ae.a,{name:"photo",placeholder:"file",component:G.a,type:"file"})),s.a.createElement("button",null,"Upload"))})),ne=Object(E.d)(Object(u.b)((function(e){return{}}),{savePhotoThunk:function(e){return function(A){C.c.uploadProfilePhoto(e)}}}))((function(e){return s.a.createElement(te,{onSubmit:function(A){A.photo&&e.savePhotoThunk(A.photo[0])}})})),re=function(e){return function(A){return s.a.createElement(i.Suspense,{fallback:s.a.createElement(f.a,null)},s.a.createElement(e,A))}};function ae(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function oe(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?ae(t,!0).forEach((function(A){Object(d.a)(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(t).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}var ce="my-social-network/app/INITIALIZED_SUCCESS",ie="my-social-network/app/INITIALIZED_LOGOUT",se={initialized:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case ce:return oe({},e,{initialized:!0});case ie:return oe({},e,{initialized:!1});default:return e}},le=t(126),pe=t(95),Ee={friends:[]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,A=arguments.length>1?arguments[1]:void 0;return A.type,e},me=t(129),ge=t(136),we=t(128),de=Object(E.c)({profilePage:pe.b,dialogsPage:le.a,sidebarPage:fe,usersPage:me.a,auth:v,form:we.a,app:ue}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.d,Ce=Object(E.e)(de,ye(Object(E.a)(ge.a)));window.__store__=Ce;var he=Ce,be=s.a.lazy((function(){return t.e(5).then(t.bind(null,306))})),Oe=s.a.lazy((function(){return t.e(4).then(t.bind(null,307))})),ke=s.a.lazy((function(){return t.e(3).then(t.bind(null,305))})),Qe=function(e){function A(){return Object(n.a)(this,A),Object(a.a)(this,Object(o.a)(A).apply(this,arguments))}return Object(c.a)(A,e),Object(r.a)(A,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(J,null),s.a.createElement(V,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(l.b,{path:"/dialogs",render:re(be)}),s.a.createElement(l.b,{path:"/profile/:userId?",render:re(ke)}),s.a.createElement(l.b,{path:"/users",render:re(Oe)}),s.a.createElement(l.b,{path:"/news",render:function(){return s.a.createElement(_,null)}}),s.a.createElement(l.b,{path:"/music",render:function(){return s.a.createElement(ee,null)}}),s.a.createElement(l.b,{path:"/settings",render:function(){return s.a.createElement($,null)}}),s.a.createElement(l.b,{path:"/login",render:function(){return s.a.createElement(R,null)}}),s.a.createElement(l.b,{path:"/test",render:function(){return s.a.createElement(ne,null)}}))):s.a.createElement(f.a,null)}}]),A}(i.Component),Se=Object(E.d)(Object(u.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(S()).then((function(){e({type:ce})}))}}}),l.f)(Qe),ve=function(e){return s.a.createElement(p.a,null,s.a.createElement(u.a,{store:he},s.a.createElement(Se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=t(64),Be=t.n(Ie);t(292);Be.a.render(s.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,A,t){e.exports={header:"Header_header__1zUrM",header_logo:"Header_header_logo__3aNKz",loginBlock:"Header_loginBlock__3ZWHF",userData:"Header_userData__2M36E",rightWrap:"Header_rightWrap__MVLSA",loginName:"Header_loginName__sxZn7"}},41:function(e,A,t){"use strict";var n=t(131),r=t.n(n),a=t(0),o=t.n(a),c=t(132),i=t.n(c);A.a=function(){return o.a.createElement("img",{className:i.a.loaderGif,src:r.a,alt:""})}},45:function(e,A,t){e.exports={loginForm:"Login_loginForm__1_AHm"}},48:function(e,A,t){e.exports={formControl:"FormControls_formControl__2-6C4",error:"FormControls_error__2EF0Z",formSummaryError:"FormControls_formSummaryError__2bpj6"}},73:function(e,A,t){"use strict";t.d(A,"b",(function(){return n})),t.d(A,"a",(function(){return r}));var n=function(e){return e?void 0:"Field is required"},r=function(e){return function(A){if(A.length>e)return"Max length is ".concat(e," symbols")}}},9:function(e,A,t){e.exports={nav:"Navbar_nav__V-iUK",nav_list:"Navbar_nav_list__FJpOp",item:"Navbar_item__2SJWb",activeLink:"Navbar_activeLink__2zmmd"}},93:function(e,A,t){e.exports={item:"FriendsItem_item__2bCQi",activeLink:"FriendsItem_activeLink__1lfhM"}},94:function(e,A,t){e.exports={friends:"Friends_friends__2ohYS",friendsList:"Friends_friendsList__38bJB"}},95:function(e,A,t){"use strict";t.d(A,"a",(function(){return g})),t.d(A,"c",(function(){return w})),t.d(A,"e",(function(){return y})),t.d(A,"d",(function(){return C})),t.d(A,"f",(function(){return h}));var n=t(8),r=t.n(n),a=t(19),o=t(39),c=t(15),i=t(13);function s(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?s(t,!0).forEach((function(A){Object(c.a)(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}var l="my-social-network/profile/ADD-POST",p="my-social-network/profile/DELETE_POST",E="my-social-network/profile/SET_USER_PROFILE",f="my-social-network/profile/SET_STATUS",m={posts:[{id:1,message:"hello",likeCount:5},{id:2,message:"it's me",likeCount:12},{id:3,message:"wow",likeCount:13},{id:4,message:"wow2",likeCount:13},{id:5,message:"waw",likeCount:13}],profile:null,status:""},g=function(e){return{type:l,post:e}},w=function(e){return{type:p,postId:e}},d=function(e){return{type:f,status:e}},y=function(e){return function(){var A=Object(a.a)(r.a.mark((function A(t){var n;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.b.getUserProfile(e);case 2:n=A.sent,t((r=n.data,{type:E,profile:r}));case 4:case"end":return A.stop()}var r}),A)})));return function(e){return A.apply(this,arguments)}}()},C=function(e){return function(){var A=Object(a.a)(r.a.mark((function A(t){var n;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.b.getStatus(e);case 2:n=A.sent,t(d(n.data));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},h=function(e){return function(){var A=Object(a.a)(r.a.mark((function A(t){return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.b.updateStatus(e);case 2:0===A.sent.data.resultCode&&t(d(e));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()};A.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case l:return u({},e,{posts:[].concat(Object(o.a)(e.posts),[{id:e.posts.length+1,message:A.post,likeCount:0}])});case p:return u({},e,{posts:e.posts.filter((function(e){return e.id!==A.postId}))});case E:return u({},e,{profile:A.profile});case f:return u({},e,{status:A.status});default:return e}}}},[[162,1,2]]]);
//# sourceMappingURL=main.2925d727.chunk.js.map