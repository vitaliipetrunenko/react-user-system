(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{14:function(e,t,n){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",submitButton:"UserProfiles_submitButton__2h4H9"}},24:function(e,t,n){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",Buttons:"Header_Buttons__1Oqka"}},731:function(e,t,n){e.exports={loginWrapper:"Login_loginWrapper__1vxml",submitButton:"Login_submitButton__19lq8"}},742:function(e,t,n){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}},751:function(e,t,n){},753:function(e,t,n){},766:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(22),s=n.n(a),c=(n(751),n(5)),u=n.n(c),i=n(8),o=n(17),l=n(7),j=(n(753),n(4)),b=n(742),d=n.n(b),O=n(3);function h(){return(h=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("stage1"),e.abrupt("return",fetch("/api/stats"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=Object(r.useState)({users:0,pofiles:0,matureProfiles:0}),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){return h.apply(this,arguments)})().then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]}),console.log({users:e[0],profiles:e[1],matureProfiles:e[2]})}))}),[]),Object(O.jsxs)("div",{className:d.a.Dashboard,children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Dashboard Test"})}),Object(O.jsxs)("div",{children:["Users:",Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:n.users})]}),"  ",Object(O.jsxs)("div",{children:["Profiles:",Object(O.jsx)("br",{})," ",Object(O.jsx)("span",{children:n.profiles})]}),"  ",Object(O.jsxs)("div",{children:["Profiles older than 18:",Object(O.jsx)("br",{})," ",Object(O.jsx)("span",{children:n.matureProfiles})]})]})}var p=n(731),x=n.n(p),m=function(e){return{type:"SET-USER",user:e}},v=function(e){return{type:"SET-PROFILES",profiles:e}},g=n(10);function E(e,t){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return U.apply(this,arguments)}function U(){return(U=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=Object(g.b)((function(e,t){return{state:e,setToken:t.setToken}}),{setUserAC:m,setProfilesAC:v})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],d=Object(r.useState)(),h=Object(j.a)(d,2),f=h[0],p=h[1],m=Object(r.useState)(),v=Object(j.a)(m,2),g=v[0],C=v[1],U=Object(r.useState)(),y=Object(j.a)(U,2),k=y[0],T=y[1];Object(r.useEffect)((function(){T("Login"),C("USER")}),[]);var S=function(){var t=Object(i.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"Register"!==k){t.next=6;break}return t.next=4,N({username:a,password:f,role:g,name:l},"POST");case 4:!1===t.sent&&alert("Email already registered");case 6:return t.next=8,E({username:a,password:f},"POST");case 8:(r=t.sent)[0].token?(e.setToken(r[0]),e.setUserAC({email:a,role:r[1],token:r}),Y(a).then((function(t){e.setProfilesAC(t)}))):alert("Login failed");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:x.a.loginWrapper,children:[Object(O.jsx)("h1",{children:"Please Log In"}),Object(O.jsxs)("form",{onSubmit:S,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Username"}),Object(O.jsx)("input",{type:"text",name:"Username",onChange:function(e){return s(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Password"}),Object(O.jsx)("input",{type:"password",name:"Password",onChange:function(e){return p(e.target.value)}})]}),"Register"===k?Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Name"}),Object(O.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Role"}),Object(O.jsxs)("select",{id:"roles",onChange:function(e){return C(e.target.value)},name:"roles",children:[Object(O.jsx)("option",{value:"USER",children:"User"}),Object(O.jsx)("option",{value:"ADMIN",children:"Admin"})]})]})]}):null,Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"radio",checked:"Login"===k,id:"operationChoice1",name:"operation",onChange:function(e){return T(e.target.value)},value:"Login"}),Object(O.jsx)("label",{htmlFor:"operationChoice1",children:"Login"}),Object(O.jsx)("input",{type:"radio",checked:"Register"===k,id:"operationChoice2",name:"operation",onChange:function(e){return T(e.target.value)},value:"Register"}),Object(O.jsx)("label",{htmlFor:"operationChoice2",children:"Register"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:x.a.submitButton,type:"submit",children:"Let's go"})})]})]})}));var k=n(20),T=n(14),S=n.n(T),D=n(9);var w=Object(g.b)((function(e,t){return{}}),{setProfilesAC:v})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],d=Object(r.useState)(),h=Object(j.a)(d,2),f=h[0],p=h[1],x=Object(r.useState)(),m=Object(j.a)(x,2),v=m[0],g=m[1];Object(r.useEffect)((function(){s("NONE"),b(e.name),p(e.surname),g(e.age)}),[]);var E=function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,P([{name:l,surname:f,age:v,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),Y(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=18;break;case 9:if("DELETE"!==a){t.next=17;break}return t.next=12,P({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),Y(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=18;break;case 17:"CANCEL"===a&&(b(e.name),g(e.age),p(e.surname),s("NONE"));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:S.a.box,children:[Object(O.jsx)("p",{children:Object(O.jsx)("a",{children:Object(O.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(O.jsxs)("form",{onSubmit:E,children:[Object(O.jsxs)("span",{children:["Name: ","EDIT"===a?Object(O.jsx)("textarea",{value:l,name:"name",onChange:function(e){return b(e.target.value)}}):e.name?e.name:"Loading"]}),Object(O.jsxs)("span",{children:["Surname: ","EDIT"===a?Object(O.jsx)("textarea",{value:f,onChange:function(e){return p(e.target.value)}}):e.surname?e.surname:"Loading"]}),Object(O.jsxs)("span",{children:["Age: ","EDIT"===a?Object(O.jsx)("textarea",{type:"number",value:v,onChange:function(e){return g(parseInt(e.target.value))}}):e.age?e.age:"Loading"]}),"DELETE"===a?Object(O.jsxs)("span",{children:["Are You sure?",Object(O.jsx)("br",{})]}):null,Object(O.jsxs)("div",{children:["NONE"!==a?Object(O.jsxs)("button",{type:"submit",name:"okay",children:[Object(O.jsx)(D.Check,{}),"Okay"]}):null,"NONE"!==a?null:Object(O.jsxs)("button",{value:"EDIT",name:"edit",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(D.Pen,{}),"Edit"]}),"NONE"!==a?null:Object(O.jsxs)("button",{value:"DELETE",name:"delete",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(D.Trash,{}),"Delete"]}),"NONE"!==a?Object(O.jsxs)("button",{type:"submit",value:"CANCEL",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(D.Close,{})," Cancel"]}):null]})]})]})}));function P(e,t){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=Object(g.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles}}),{setProfilesAC:v})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],d=Object(r.useState)(),h=Object(j.a)(d,2),f=h[0],p=h[1],x=Object(r.useState)(),m=Object(j.a)(x,2),v=m[0],g=m[1],E=e.wantedUser?e.wantedUser:e.currUser.email;Object(r.useEffect)((function(){e.setProfilesAC([]),e.wantedUser?Y(e.wantedUser).then((function(t){e.setProfilesAC(t)})):Y(e.currUser.email).then((function(t){e.setProfilesAC(t)}))}),[E]);var C=function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"ADD"!==a){t.next=7;break}return t.next=4,P({name:l,surname:f,age:v,author:e.wantedUser?e.wantedUser:e.currUser.email},"PUT");case 4:!1===t.sent&&alert("duplicate profile"),Y(E).then((function(t){e.setProfilesAC(t),s("NONE")}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=Object(k.a)(e.profileList).map((function(t){return Object(O.jsx)(w,{currUser:e.wantedUser?e.wantedUser:e.currUser.email,name:t.name,surname:t.surname,age:t.age,author:t.author},t._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:S.a.Userboard,children:[Object(O.jsxs)("div",{children:["Welcome, ",e.currUser.email,"!",Object(O.jsx)("br",{}),"Browsing, ",e.wantedUser?e.wantedUser:e.currUser.email," profiles "]}),"ADD"===a?Object(O.jsxs)("form",{onSubmit:C,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Surname"}),Object(O.jsx)("input",{type:"text",name:"surname",onChange:function(e){return p(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Age"}),Object(O.jsx)("input",{type:"number",name:"age",onChange:function(e){return g(parseInt(e.target.value))}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"submit",className:S.a.submitButton,children:"Submit"}),Object(O.jsx)("button",{className:S.a.submitButton,onClick:function(){s("NONE")},children:"Cancel"})]})]}):Object(O.jsxs)("button",{className:S.a.addButton,id:"ADD",value:"ADD",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(D.Add,{}),"Add Profile"]})]}),Object(O.jsx)("div",{className:S.a.boxGrid,children:N})]})}));function _(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{name:"Userboard",children:"Userboard"})}),Object(O.jsx)(L,{wantedUser:e.state.authData.currUser?e.state.authData.currUser.email:null})]})}function I(e){var t=Object(l.f)(),n=Object(r.useState)(),a=Object(j.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{name:"Adminboard",children:"Admin Userboard"})}),Object(O.jsx)(L,{wantedUser:s||null})]})}var B=n(24),R=n.n(B);function H(e){return Object(O.jsxs)("div",{className:R.a.Header,children:[Object(O.jsxs)("div",{className:R.a.User,children:[Object(O.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),e.currUser.email]}),Object(O.jsxs)("div",{className:R.a.Buttons,children:[Object(O.jsxs)(o.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:[Object(O.jsx)(D.Home,{}),"Home"]}),"ADMIN"===e.currUser.role?Object(O.jsxs)(o.b,{to:"/control",children:[Object(O.jsx)(D.Eye,{}),"Control"]}):null,Object(O.jsxs)("a",{onClick:function(){e.clearToken()},children:[Object(O.jsx)(D.LogOff,{}),"Log Out"]})]})]})}var J=Object(g.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),l=Object(j.a)(c,2),b=l[0],d=l[1],h=Object(r.useState)(),f=Object(j.a)(h,2),p=f[0],x=f[1],m=Object(r.useState)(),v=Object(j.a)(m,2),g=v[0],E=v[1];Object(r.useEffect)((function(){s("NONE"),d(e.user.name),x(e.user.email),E(e.user.role)}),[]);var C=function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,F("PATCH",[{name:b,email:p,role:g},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),F("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=19;break;case 10:if("DELETE"!==a){t.next=18;break}return t.next=13,F("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),F().then((function(t){s("NONE"),e.setUsers(t)})),t.next=19;break;case 18:"CANCEL"===a&&(d(e.user.name),x(e.user.email),E(e.user.role),s("NONE"));case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return"ADMIN"===e.currUser.role?Object(O.jsxs)("div",{className:S.a.box,children:[Object(O.jsx)("p",{children:Object(O.jsx)(o.b,{to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(O.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(O.jsxs)("form",{onSubmit:C,children:[Object(O.jsxs)("span",{children:["Name: ","EDIT"===a?Object(O.jsx)("textarea",{value:b,onChange:function(e){return d(e.target.value)}}):e.user?e.user.name:"Loading"]}),Object(O.jsxs)("span",{children:["Mail: ","EDIT"===a?Object(O.jsx)("textarea",{value:p,onChange:function(e){return x(e.target.value)}}):e.user?e.user.email:"Loading"]}),Object(O.jsxs)("span",{children:["Role: ","EDIT"===a?Object(O.jsxs)("select",{id:"roles",onChange:function(e){return E(e.target.value)},name:"roles",children:[Object(O.jsx)("option",{value:"USER",children:"USER"}),Object(O.jsx)("option",{value:"ADMIN",children:"ADMIN"})]}):e.user?e.user.role:"Loading"]}),"DELETE"===a?Object(O.jsxs)("span",{children:["Are You sure?",Object(O.jsx)("br",{})]}):null,Object(O.jsxs)("div",{children:["NONE"!==a?Object(O.jsxs)("button",{type:"submit",name:"okay",children:[Object(O.jsx)(D.Check,{}),"Okay"]}):null,"NONE"!==a?null:Object(O.jsxs)("button",{value:"EDIT",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(D.Pen,{}),"Edit"]}),"NONE"!==a?null:Object(O.jsxs)("button",{value:"DELETE",name:"delete",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(D.Trash,{}),"Delete"]}),"NONE"!==a?Object(O.jsxs)("button",{type:"submit",value:"CANCEL",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(D.Close,{})," Cancel"]}):null]})]})]}):Object(O.jsx)("span",{children:"You have no access to this data."})}));function F(e){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(u.a.mark((function e(t){var n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=Object(g.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1];if(Object(r.useEffect)((function(){s([]);F("POST").then((function(e){s(e)}))}),[]),"ADMIN"===e.currUser.role&&a){var c=Object(k.a)(a).map((function(e,t){return Object(O.jsx)(J,{setUsers:s,user:a[t]},a[t]._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"ControlPanel"}),Object(O.jsx)(f,{}),Object(O.jsx)("div",{className:S.a.boxGrid,children:c})]})}return Object(O.jsx)("span",{children:"You have no access to this page."})}));function K(){return(K=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return function(e){return K.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function Y(e){return q.apply(this,arguments)}function q(){return(q=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=Object(g.b)((function(e){return{state:e}}),{setUserAC:m,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:v})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(r.useState)(e()),n=Object(j.a)(t,2),a=n[0],s=n[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){E({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),n=t.token,a=t.setToken,s=t.clearToken,c=t.renewToken,u=t.getToken;return Object(r.useEffect)((function(){n&&W(u()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(c(t.token,t.email)),Y(t.email).then((function(t){e.setProfilesAC(t)}))):s()}))}),[]),n&&n.expiry<(new Date).getTime()&&s(),n?Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(H,{currUser:e.state.authData.currUser,clearToken:s}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",children:Object(O.jsx)(_,{state:e.state,clearToken:s})}),Object(O.jsx)(l.a,{path:"/dashboard",children:Object(O.jsx)(f,{})}),Object(O.jsx)(l.a,{path:"/control",children:Object(O.jsx)(G,{})}),Object(O.jsx)(l.a,{path:"/userprofiles",children:Object(O.jsx)(I,{})})]})]})}):Object(O.jsx)(y,{setToken:a})})),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,767)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},z=n(735),V=n(16),X="SET-USER",$="SET-TOKEN",ee={currUser:{}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(V.a)(Object(V.a)({},e),{},{currUser:t.user});case $:return Object(V.a)(Object(V.a)({},e),{},{currUser:Object(V.a)(Object(V.a)({},e.currUser),{},{token:Object(V.a)({},t.token)})});default:return e}},ne="SET-PROFILES",re={currProfiles:[]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(V.a)(Object(V.a)({},e),{},{currProfiles:Object(k.a)(t.profiles)});default:return e}},se=Object(z.a)({authData:te,profileData:ae}),ce=Object(z.b)(se);s.a.render(Object(O.jsx)(g.a,{store:ce,children:Object(O.jsx)(Q,{state:ce.getState(),dispatch:ce.dispatch.bind(ce)})}),document.getElementById("root")),Z()}},[[766,1,2]]]);
//# sourceMappingURL=main.cc9f09e9.chunk.js.map