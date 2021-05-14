(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{14:function(e,t,n){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",submitButton:"UserProfiles_submitButton__2h4H9"}},21:function(e,t,n){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},731:function(e,t,n){e.exports={loginWrapper:"Login_loginWrapper__1vxml",submitButton:"Login_submitButton__19lq8"}},742:function(e,t,n){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}},751:function(e,t,n){},753:function(e,t,n){},766:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(23),s=n.n(a),c=(n(751),n(6)),u=n.n(c),i=n(8),o=n(17),l=n(7),j=(n(753),n(4)),b=n(742),O=n.n(b),d=n(3);function h(){var e=Object(r.useState)({users:0,pofiles:0,matureProfiles:0}),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(console.log("stage1"),fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()}))).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]}),console.log({users:e[0],profiles:e[1],matureProfiles:e[2]})}))}),[]),Object(d.jsxs)("div",{className:O.a.Dashboard,children:[Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"Dashboard Test"})}),Object(d.jsxs)("div",{children:["Users:",Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:n.users})]}),"  ",Object(d.jsxs)("div",{children:["Profiles:",Object(d.jsx)("br",{})," ",Object(d.jsx)("span",{children:n.profiles})]}),"  ",Object(d.jsxs)("div",{children:["Profiles older than 18:",Object(d.jsx)("br",{})," ",Object(d.jsx)("span",{children:n.matureProfiles})]})]})}var f=n(731),p=n.n(f),x=function(e){return{type:"SET-USER",user:e}},m=function(e){return{type:"SET-PROFILES",profiles:e}},g=n(10);function v(e,t){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=Object(g.b)((function(e,t){return{state:e,setToken:t.setToken}}),{setUserAC:x,setProfilesAC:m})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],O=Object(r.useState)(),h=Object(j.a)(O,2),f=h[0],x=h[1],m=Object(r.useState)(),g=Object(j.a)(m,2),E=g[0],C=g[1],y=Object(r.useState)(),U=Object(j.a)(y,2),k=U[0],T=U[1];Object(r.useEffect)((function(){T("Login"),C("USER")}),[]);var S=function(){var t=Object(i.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"Register"!==k){t.next=6;break}return t.next=4,N({username:a,password:f,role:E,name:l},"POST");case 4:!1===t.sent&&alert("Email already registered");case 6:return t.next=8,v({username:a,password:f},"POST");case 8:(r=t.sent)[0].token?(e.setToken(r[0]),e.setUserAC({email:a,role:r[1],token:r}),W(a).then((function(t){e.setProfilesAC(t)}))):alert("Login failed");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:p.a.loginWrapper,children:[Object(d.jsx)("h1",{children:"Please Log In"}),Object(d.jsxs)("form",{onSubmit:S,children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Username"}),Object(d.jsx)("input",{type:"text",name:"Username",onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"Password",onChange:function(e){return x(e.target.value)}})]}),"Register"===k?Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Name"}),Object(d.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Role"}),Object(d.jsxs)("select",{id:"roles",onChange:function(e){return C(e.target.value)},name:"roles",children:[Object(d.jsx)("option",{value:"USER",children:"User"}),Object(d.jsx)("option",{value:"ADMIN",children:"Admin"})]})]})]}):null,Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"radio",checked:"Login"===k,id:"operationChoice1",name:"operation",onChange:function(e){return T(e.target.value)},value:"Login"}),Object(d.jsx)("label",{htmlFor:"operationChoice1",children:"Login"}),Object(d.jsx)("input",{type:"radio",checked:"Register"===k,id:"operationChoice2",name:"operation",onChange:function(e){return T(e.target.value)},value:"Register"}),Object(d.jsx)("label",{htmlFor:"operationChoice2",children:"Register"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:p.a.submitButton,type:"submit",children:"Let's go"})})]})]})}));var U=n(20),k=n(14),T=n.n(k),S=n(9);var D=Object(g.b)((function(e,t){return{}}),{setProfilesAC:m})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],O=Object(r.useState)(),h=Object(j.a)(O,2),f=h[0],p=h[1],x=Object(r.useState)(),m=Object(j.a)(x,2),g=m[0],v=m[1];Object(r.useEffect)((function(){s("NONE"),b(e.name),p(e.surname),v(e.age)}),[]);var E=function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,P([{name:l,surname:f,age:g,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),W(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=18;break;case 9:if("DELETE"!==a){t.next=17;break}return t.next=12,P({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),W(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=18;break;case 17:"CANCEL"===a&&(b(e.name),v(e.age),p(e.surname),s("NONE"));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return console.log("operation on render ",a),Object(d.jsxs)("div",{className:T.a.box,children:[Object(d.jsx)("p",{children:Object(d.jsx)("a",{children:Object(d.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(d.jsxs)("form",{onSubmit:E,children:[Object(d.jsxs)("span",{children:["Name: ","EDIT"===a?Object(d.jsx)("textarea",{value:l,name:"name",onChange:function(e){return b(e.target.value)}}):e.name?e.name:"Loading"]}),Object(d.jsxs)("span",{children:["Surname: ","EDIT"===a?Object(d.jsx)("textarea",{value:f,onChange:function(e){return p(e.target.value)}}):e.surname?e.surname:"Loading"]}),Object(d.jsxs)("span",{children:["Age: ","EDIT"===a?Object(d.jsx)("textarea",{type:"number",value:g,onChange:function(e){return v(parseInt(e.target.value))}}):e.age?e.age:"Loading"]}),"DELETE"===a?Object(d.jsxs)("span",{children:["Are You sure?",Object(d.jsx)("br",{})]}):null,Object(d.jsxs)("div",{children:["NONE"!==a?Object(d.jsxs)("button",{type:"submit",name:"okay",children:[Object(d.jsx)(S.Check,{}),"Okay"]}):null,"NONE"!==a?null:Object(d.jsxs)("button",{value:"EDIT",name:"edit",onClick:function(e){return s(e.target.value)},children:[Object(d.jsx)(S.Pen,{}),"Edit"]}),"NONE"!==a?null:Object(d.jsxs)("button",{value:"DELETE",name:"delete",onClick:function(e){return s(e.target.value)},children:[Object(d.jsx)(S.Trash,{}),"Delete"]}),"NONE"!==a?Object(d.jsxs)("button",{value:"NONE",onClick:function(e){return s("NONE")},children:[Object(d.jsx)(S.Close,{})," Cancel"]}):null]})]})]})}));function P(e,t){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=Object(g.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles}}),{setProfilesAC:m})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],O=Object(r.useState)(),h=Object(j.a)(O,2),f=h[0],p=h[1],x=Object(r.useState)(),m=Object(j.a)(x,2),g=m[0],v=m[1],E=e.wantedUser?e.wantedUser:e.currUser.email;Object(r.useEffect)((function(){e.setProfilesAC([]),e.wantedUser?W(e.wantedUser).then((function(t){e.setProfilesAC(t)})):W(e.currUser.email).then((function(t){e.setProfilesAC(t)}))}),[E]);var N=function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"ADD"!==a){t.next=7;break}return t.next=4,P({name:l,surname:f,age:g,author:e.wantedUser?e.wantedUser:e.currUser.email},"PUT");case 4:!1===t.sent&&alert("duplicate profile"),W(E).then((function(t){e.setProfilesAC(t),s("NONE")}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=Object(U.a)(e.profileList).map((function(t){return Object(d.jsx)(D,{currUser:e.wantedUser?e.wantedUser:e.currUser.email,name:t.name,surname:t.surname,age:t.age,author:t.author},t._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:T.a.Userboard,children:[Object(d.jsxs)("div",{children:["Welcome, ",e.currUser.email,"!",Object(d.jsx)("br",{}),"Browsing, ",e.wantedUser?e.wantedUser:e.currUser.email," profiles "]}),"ADD"===a?Object(d.jsxs)("form",{onSubmit:N,children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Surname"}),Object(d.jsx)("input",{type:"text",name:"surname",onChange:function(e){return p(e.target.value)}})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Age"}),Object(d.jsx)("input",{type:"number",name:"age",onChange:function(e){return v(parseInt(e.target.value))}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"submit",className:T.a.submitButton,children:"Submit"}),Object(d.jsx)("button",{className:T.a.submitButton,onClick:function(){s("NONE")},children:"Cancel"})]})]}):Object(d.jsxs)("button",{className:T.a.addButton,id:"ADD",value:"ADD",onClick:function(e){return s(e.target.value)},children:[Object(d.jsx)(S.Add,{}),"Add Profile"]})]}),Object(d.jsx)("div",{className:T.a.boxGrid,children:C})]})}));function _(e){return Object(d.jsx)("div",{children:Object(d.jsx)(A,{wantedUser:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function L(e){var t=Object(l.f)(),n=Object(r.useState)(),a=Object(j.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(d.jsx)("div",{children:Object(d.jsx)(A,{wantedUser:s||null})})}var I=n(21),B=n.n(I);function R(e){return Object(d.jsxs)("div",{className:B.a.Header,children:[Object(d.jsxs)("div",{className:B.a.User,children:[Object(d.jsx)("img",{className:"ADMIN"===e.currUser.role?B.a.adminPhoto:B.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(d.jsx)("p",{children:e.currUser.email})]}),Object(d.jsxs)("div",{className:B.a.Buttons,children:[Object(d.jsxs)(o.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:[Object(d.jsx)(S.Home,{}),"Home"]}),"ADMIN"===e.currUser.role?Object(d.jsxs)(o.b,{to:"/control",children:[Object(d.jsx)(S.Eye,{}),"Control"]}):null,Object(d.jsxs)("a",{onClick:function(){e.clearToken()},children:[Object(d.jsx)(S.LogOff,{}),"Log Out"]})]})]})}var H=Object(g.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),l=Object(j.a)(c,2),b=l[0],O=l[1],h=Object(r.useState)(),f=Object(j.a)(h,2),p=f[0],x=f[1],m=Object(r.useState)(),g=Object(j.a)(m,2),v=g[0],E=g[1];Object(r.useEffect)((function(){s("NONE"),O(e.user.name),x(e.user.email),E(e.user.role)}),[]);var N=function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,J("PATCH",[{name:b,email:p,role:v},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),J("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=19;break;case 10:if("DELETE"!==a){t.next=18;break}return t.next=13,J("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),J().then((function(t){s("NONE"),e.setUsers(t)})),t.next=19;break;case 18:"CANCEL"===a&&(O(e.user.name),x(e.user.email),E(e.user.role),s("NONE"));case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return"ADMIN"===e.currUser.role?Object(d.jsxs)("div",{className:T.a.box,children:[Object(d.jsx)("p",{children:Object(d.jsx)(o.b,{to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(d.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(d.jsxs)("form",{onSubmit:N,children:[Object(d.jsxs)("span",{children:["Name: ","EDIT"===a?Object(d.jsx)("textarea",{value:b,onChange:function(e){return O(e.target.value)}}):e.user?e.user.name:"Loading"]}),Object(d.jsxs)("span",{children:["Mail: ","EDIT"===a?Object(d.jsx)("textarea",{value:p,onChange:function(e){return x(e.target.value)}}):e.user?e.user.email:"Loading"]}),Object(d.jsxs)("span",{children:["Role: ","EDIT"===a?Object(d.jsxs)("select",{id:"roles",onChange:function(e){return E(e.target.value)},name:"roles",children:[Object(d.jsx)("option",{value:"USER",children:"USER"}),Object(d.jsx)("option",{value:"ADMIN",children:"ADMIN"})]}):e.user?e.user.role:"Loading"]}),"DELETE"===a?Object(d.jsxs)("span",{children:["Are You sure?",Object(d.jsx)("br",{})]}):null,Object(d.jsxs)("div",{children:["NONE"!==a?Object(d.jsxs)("button",{type:"submit",name:"okay",children:[Object(d.jsx)(S.Check,{}),"Okay"]}):null,"NONE"!==a?null:Object(d.jsxs)("button",{value:"EDIT",onClick:function(e){return s(e.target.value)},children:[Object(d.jsx)(S.Pen,{}),"Edit"]}),"NONE"!==a?null:Object(d.jsxs)("button",{value:"DELETE",name:"delete",onClick:function(e){return s(e.target.value)},children:[Object(d.jsx)(S.Trash,{}),"Delete"]}),"NONE"!==a?Object(d.jsxs)("button",{type:"submit",value:"CANCEL",onClick:function(e){return s(e.target.value)},children:[Object(d.jsx)(S.Close,{})," Cancel"]}):null]})]})]}):Object(d.jsx)("span",{children:"You have no access to this data."})}));function J(e){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(u.a.mark((function e(t){var n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=Object(g.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1];if(Object(r.useEffect)((function(){s([]);J("POST").then((function(e){s(e)}))}),[]),"ADMIN"===e.currUser.role&&a){var c=Object(U.a)(a).map((function(e,t){return Object(d.jsx)(H,{setUsers:s,user:a[t]},a[t]._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsx)("div",{className:T.a.boxGrid,children:c})]})}return Object(d.jsx)("span",{children:"You have no access to this page."})}));function G(){return(G=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return function(e){return G.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function W(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=Object(g.b)((function(e){return{state:e}}),{setUserAC:x,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:m})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(r.useState)(e()),n=Object(j.a)(t,2),a=n[0],s=n[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){v({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),n=t.token,a=t.setToken,s=t.clearToken,c=t.renewToken,u=t.getToken;return Object(r.useEffect)((function(){n&&K(u()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(c(t.token,t.email)),W(t.email).then((function(t){e.setProfilesAC(t)}))):s()}))}),[]),n&&n.expiry<(new Date).getTime()&&s(),n?Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(R,{currUser:e.state.authData.currUser,clearToken:s}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(_,{state:e.state,clearToken:s})}),Object(d.jsx)(l.a,{path:"/dashboard",children:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"/control",children:Object(d.jsx)(F,{})}),Object(d.jsx)(l.a,{path:"/userprofiles",children:Object(d.jsx)(L,{})})]})]})}):Object(d.jsx)(y,{setToken:a})})),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,767)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},Z=n(735),z=n(16),V="SET-USER",X="SET-TOKEN",$={currUser:{}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(z.a)(Object(z.a)({},e),{},{currUser:t.user});case X:return Object(z.a)(Object(z.a)({},e),{},{currUser:Object(z.a)(Object(z.a)({},e.currUser),{},{token:Object(z.a)({},t.token)})});default:return e}},te="SET-PROFILES",ne={currProfiles:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(z.a)(Object(z.a)({},e),{},{currProfiles:Object(U.a)(t.profiles)});default:return e}},ae=Object(Z.a)({authData:ee,profileData:re}),se=Object(Z.b)(ae);s.a.render(Object(d.jsx)(g.a,{store:se,children:Object(d.jsx)(q,{state:se.getState(),dispatch:se.dispatch.bind(se)})}),document.getElementById("root")),Q()}},[[766,1,2]]]);
//# sourceMappingURL=main.42381c7a.chunk.js.map