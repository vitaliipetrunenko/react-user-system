(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{16:function(e,t,n){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",submitButton:"UserProfiles_submitButton__2h4H9"}},25:function(e,t,n){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},738:function(e,t,n){e.exports={loginWrapper:"Login_loginWrapper__1vxml",submitButton:"Login_submitButton__19lq8"}},750:function(e,t,n){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}},761:function(e,t,n){},763:function(e,t,n){},775:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(28),s=n.n(a),c=(n(761),n(6)),i=n.n(c),u=n(9),o=n(22),l=n(7),j=(n(763),n(4)),b=n(750),d=n.n(b),O=n(3);function h(){var e=Object(r.useState)({users:0,pofiles:0,matureProfiles:0}),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]}),console.log({users:e[0],profiles:e[1],matureProfiles:e[2]})}))}),[]),Object(O.jsxs)("div",{className:d.a.Dashboard,children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Dashboard"})}),Object(O.jsxs)("div",{children:["Users:",Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:n.users})]}),"  ",Object(O.jsxs)("div",{children:["Profiles:",Object(O.jsx)("br",{})," ",Object(O.jsx)("span",{children:n.profiles})]}),"  ",Object(O.jsxs)("div",{children:["Profiles older than 18:",Object(O.jsx)("br",{})," ",Object(O.jsx)("span",{children:n.matureProfiles})]})]})}var f=n(738),p=n.n(f),m=function(e){return{type:"SET-USER",user:e}},x=function(e){return{type:"SET-PROFILES",profiles:e}},g=n(11),v=n(26),E=function(){var e=Object(r.useState)("Login"),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)(v.c,{initialValues:{email:"",password:"",name:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){console.log(e)},children:function(e){var t=e.error;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Any place in your app!"}),Object(O.jsxs)(v.b,{children:[Object(O.jsx)(v.a,{name:"email"}),t.email?t.email:null,Object(O.jsx)(v.a,{name:"password"}),t.password?t.password:null,Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",onChange:function(e){return a("Register")},checked:"Register"===n,name:"radio",value:"sign up"}),"Sign up"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",onChange:function(e){return a("Login")},checked:"Login"===n,name:"radio",value:"sign in"}),"Sign in"]}),Object(O.jsx)(v.a,{name:"name"}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]})]})}})};function y(e,t){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(g.b)((function(e,t){return{state:e,setToken:t.setToken}}),{setUserAC:m,setProfilesAC:x})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],d=Object(r.useState)(),h=Object(j.a)(d,2),f=h[0],m=h[1],x=Object(r.useState)(),g=Object(j.a)(x,2),v=g[0],U=g[1],C=Object(r.useState)(),S=Object(j.a)(C,2),N=S[0],T=S[1];Object(r.useEffect)((function(){T("Login"),U("USER")}),[]);var D=function(){var t=Object(u.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"Register"!==N){t.next=6;break}return t.next=4,k({username:a,password:f,role:v,name:l},"POST");case 4:!1===t.sent&&alert("Email already registered");case 6:return t.next=8,y({username:a,password:f},"POST");case 8:(r=t.sent)[0].token?(e.setToken(r[0]),e.setUserAC({email:a,role:r[1],token:r}),Y(a).then((function(t){e.setProfilesAC(t)}))):alert("Login failed");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:p.a.loginWrapper,children:[Object(O.jsx)("h1",{children:"Please Log In"}),Object(O.jsxs)("form",{onSubmit:D,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Username"}),Object(O.jsx)("input",{type:"text",name:"Username",onChange:function(e){return s(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Password"}),Object(O.jsx)("input",{type:"password",name:"Password",onChange:function(e){return m(e.target.value)}})]}),"Register"===N?Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Name"}),Object(O.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Role"}),Object(O.jsxs)("select",{id:"roles",onChange:function(e){return U(e.target.value)},name:"roles",children:[Object(O.jsx)("option",{value:"USER",children:"User"}),Object(O.jsx)("option",{value:"ADMIN",children:"Admin"})]})]})]}):null,Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"radio",checked:"Login"===N,id:"operationChoice1",name:"operation",onChange:function(e){return T(e.target.value)},value:"Login"}),Object(O.jsx)("label",{htmlFor:"operationChoice1",children:"Login"}),Object(O.jsx)("input",{type:"radio",checked:"Register"===N,id:"operationChoice2",name:"operation",onChange:function(e){return T(e.target.value)},value:"Register"}),Object(O.jsx)("label",{htmlFor:"operationChoice2",children:"Register"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:p.a.submitButton,type:"submit",children:"Let's go"})})]}),Object(O.jsx)(E,{})]})}));var N=n(24),T=n(16),D=n.n(T),P=n(10);var w=Object(g.b)((function(e,t){return{}}),{setProfilesAC:x})((function(e){var t=Object(r.useState)("NONE"),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.name),o=Object(j.a)(c,2),l=o[0],b=o[1],d=Object(r.useState)(e.surname),h=Object(j.a)(d,2),f=h[0],p=h[1],m=Object(r.useState)(e.age),x=Object(j.a)(m,2),g=x[0],v=x[1],E=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,A([{name:l,surname:f,age:g,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),Y(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=15;break;case 9:if("DELETE"!==a){t.next=15;break}return t.next=12,A({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),Y(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=[Object(O.jsxs)("button",{type:"submit",name:"okay",children:[Object(O.jsx)(P.Check,{}),"Okay"]}),Object(O.jsxs)("button",{value:"NONE",onClick:function(e){return s("NONE")},children:[Object(O.jsx)(P.Close,{})," Cancel"]}),null,null],U=[null,null,Object(O.jsxs)("button",{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:[Object(O.jsx)(P.Pen,{}),"Edit"]}),Object(O.jsxs)("button",{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:[Object(O.jsx)(P.Trash,{}),"Delete"]})],k=[];k="NONE"===a?U:y;var C=[],S=[Object(O.jsx)("textarea",{value:l,name:"name",onChange:function(e){return b(e.target.value)}}),Object(O.jsx)("textarea",{value:f,onChange:function(e){return p(e.target.value)}}),Object(O.jsx)("textarea",{type:"number",value:g,onChange:function(e){return v(parseInt(e.target.value))}})],N=[e.name?e.name:"Loading",e.surname?e.surname:"Loading",e.age?e.age:"Loading"];return C="EDIT"===a?S:N,Object(O.jsxs)("div",{className:D.a.box,children:[Object(O.jsx)("p",{children:Object(O.jsx)("a",{children:Object(O.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(O.jsxs)("form",{onSubmit:E,children:[Object(O.jsxs)("span",{children:["Name: ",C[0]]}),Object(O.jsxs)("span",{children:["Surname: ",C[1]]}),Object(O.jsxs)("span",{children:["Age: ",C[2]]}),"DELETE"===a?Object(O.jsxs)("span",{children:["Are You sure?",Object(O.jsx)("br",{})]}):null,Object(O.jsx)("div",{children:k})]})]})}));function A(e,t){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=Object(g.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles}}),{setProfilesAC:x})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),o=Object(j.a)(c,2),l=o[0],b=o[1],d=Object(r.useState)(),h=Object(j.a)(d,2),f=h[0],p=h[1],m=Object(r.useState)(),x=Object(j.a)(m,2),g=x[0],v=x[1],E=e.wantedUser?e.wantedUser:e.currUser.email;Object(r.useEffect)((function(){e.setProfilesAC([]),e.wantedUser?Y(e.wantedUser).then((function(t){e.setProfilesAC(t)})):Y(e.currUser.email).then((function(t){e.setProfilesAC(t)}))}),[E]);var y=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"ADD"!==a){t.next=7;break}return t.next=4,A({name:l,surname:f,age:g,author:e.wantedUser?e.wantedUser:e.currUser.email},"PUT");case 4:!1===t.sent&&alert("duplicate profile"),Y(E).then((function(t){e.setProfilesAC(t),s("NONE")}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=Object(N.a)(e.profileList).map((function(t){return Object(O.jsx)(w,{currUser:e.wantedUser?e.wantedUser:e.currUser.email,name:t.name,surname:t.surname,age:t.age,author:t.author},t._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:D.a.Userboard,children:[Object(O.jsxs)("div",{name:"Greeting",children:["Welcome, ",e.currUser.email,"!",Object(O.jsx)("br",{}),"Browsing, ",e.wantedUser?e.wantedUser:e.currUser.email," profiles "]}),"ADD"===a?Object(O.jsxs)("form",{onSubmit:y,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Surname"}),Object(O.jsx)("input",{type:"text",name:"surname",onChange:function(e){return p(e.target.value)}})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Age"}),Object(O.jsx)("input",{type:"number",name:"age",onChange:function(e){return v(parseInt(e.target.value))}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"submit",className:D.a.submitButton,children:"Submit"}),Object(O.jsx)("button",{className:D.a.submitButton,onClick:function(){s("NONE")},children:"Cancel"})]})]}):Object(O.jsxs)("button",{className:D.a.addButton,id:"ADD",value:"ADD",onClick:function(e){return s(e.target.value)},children:[Object(O.jsx)(P.Add,{}),"Add Profile"]})]}),Object(O.jsx)("div",{className:D.a.boxGrid,children:U})]})}));function I(e){return Object(O.jsx)("div",{children:Object(O.jsx)(L,{wantedUser:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function R(e){var t=Object(l.f)(),n=Object(r.useState)(),a=Object(j.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(O.jsx)("div",{children:Object(O.jsx)(L,{wantedUser:s||null})})}var B=n(25),H=n.n(B);function J(e){return Object(O.jsxs)("div",{className:H.a.Header,children:[Object(O.jsxs)("div",{className:H.a.User,children:[Object(O.jsx)("img",{className:"ADMIN"===e.currUser.role?H.a.adminPhoto:H.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(O.jsx)("p",{children:e.currUser.email})]}),Object(O.jsxs)("div",{className:H.a.Buttons,children:[Object(O.jsxs)(o.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:[Object(O.jsx)(P.Home,{}),"Home"]}),"ADMIN"===e.currUser.role?Object(O.jsxs)(o.b,{to:"/control",children:[Object(O.jsx)(P.Eye,{}),"Control"]}):null,Object(O.jsxs)("a",{name:"LogOut",onClick:function(){e.clearToken()},children:[Object(O.jsx)(P.LogOff,{}),"Log Out"]})]})]})}var M=Object(g.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)("NONE"),n=Object(j.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.user.name),l=Object(j.a)(c,2),b=l[0],d=l[1],h=Object(r.useState)(e.user.email),f=Object(j.a)(h,2),p=f[0],m=f[1],x=Object(r.useState)(e.user.role),g=Object(j.a)(x,2),v=g[0],E=g[1],y=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,F("PATCH",[{name:b,email:p,role:v},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),F("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=16;break;case 10:if("DELETE"!==a){t.next=16;break}return t.next=13,F("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),F().then((function(t){s("NONE"),e.setUsers(t)}));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if("ADMIN"===e.currUser.role){var U=[Object(O.jsxs)("button",{type:"submit",name:"okay",children:[Object(O.jsx)(P.Check,{}),"Okay"]}),Object(O.jsxs)("button",{value:"NONE",onClick:function(e){return s("NONE")},children:[Object(O.jsx)(P.Close,{})," Cancel"]}),null,null],k=[null,null,Object(O.jsxs)("button",{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:[Object(O.jsx)(P.Pen,{}),"Edit"]}),Object(O.jsxs)("button",{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:[Object(O.jsx)(P.Trash,{}),"Delete"]})],C=[];C="NONE"===a?k:U;var S=[],N=[Object(O.jsx)("textarea",{value:b,name:"name",onChange:function(e){return d(e.target.value)}}),Object(O.jsx)("textarea",{value:p,onChange:function(e){return m(e.target.value)}}),Object(O.jsxs)("select",{id:"roles",onChange:function(e){return E(e.target.value)},name:"roles",children:[Object(O.jsx)("option",{value:"USER",children:"USER"}),Object(O.jsx)("option",{value:"ADMIN",children:"ADMIN"})]})],T=[e.user?e.user.name:"Loading",e.user?e.user.email:"Loading",e.user?e.user.role:"Loading"];return S="EDIT"===a?N:T,Object(O.jsxs)("div",{className:D.a.box,children:[Object(O.jsx)("p",{children:Object(O.jsx)(o.b,{name:"user",to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(O.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(O.jsxs)("form",{onSubmit:y,children:[Object(O.jsxs)("span",{children:["Name: ",S[0]]}),Object(O.jsxs)("span",{children:["Mail: ",S[1]]}),Object(O.jsxs)("span",{children:["Role: ",S[2]]}),"DELETE"===a?Object(O.jsxs)("span",{children:["Are You sure?",Object(O.jsx)("br",{})]}):null,Object(O.jsx)("div",{children:C})]})]})}return Object(O.jsx)("span",{children:"You have no access to this data."})}));function F(e){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(i.a.mark((function e(t){var n,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=Object(g.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1];if(Object(r.useEffect)((function(){s([]);F("POST").then((function(e){s(e)}))}),[]),"ADMIN"===e.currUser.role&&a){var c=Object(N.a)(a).map((function(e,t){return Object(O.jsx)(M,{setUsers:s,user:a[t]},a[t]._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(h,{}),Object(O.jsx)("div",{className:D.a.boxGrid,children:c})]})}return Object(O.jsx)("span",{children:"You have no access to this page."})}));function K(){return(K=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return function(e){return K.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function Y(e){return q.apply(this,arguments)}function q(){return(q=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=Object(g.b)((function(e){return{state:e}}),{setUserAC:m,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:x})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(r.useState)(e()),n=Object(j.a)(t,2),a=n[0],s=n[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){y({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),n=t.token,a=t.setToken,s=t.clearToken,c=t.renewToken,i=t.getToken;return Object(r.useEffect)((function(){n&&W(i()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(c(t.token,t.email)),Y(t.email).then((function(t){e.setProfilesAC(t)}))):s()}))}),[]),n&&n.expiry<(new Date).getTime()&&s(),n?Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(J,{currUser:e.state.authData.currUser,clearToken:s}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",children:Object(O.jsx)(I,{state:e.state,clearToken:s})}),Object(O.jsx)(l.a,{path:"/dashboard",children:Object(O.jsx)(h,{})}),Object(O.jsx)(l.a,{path:"/control",children:Object(O.jsx)(Z,{})}),Object(O.jsx)(l.a,{path:"/userprofiles",children:Object(O.jsx)(R,{})})]})]})}):Object(O.jsx)(S,{setToken:a})})),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,776)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},$=n(742),z=n(19),X="SET-USER",ee="SET-TOKEN",te={currUser:{}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(z.a)(Object(z.a)({},e),{},{currUser:t.user});case ee:return Object(z.a)(Object(z.a)({},e),{},{currUser:Object(z.a)(Object(z.a)({},e.currUser),{},{token:Object(z.a)({},t.token)})});default:return e}},re="SET-PROFILES",ae={currProfiles:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(z.a)(Object(z.a)({},e),{},{currProfiles:Object(N.a)(t.profiles)});default:return e}},ce=Object($.a)({authData:ne,profileData:se}),ie=Object($.b)(ce);s.a.render(Object(O.jsx)(g.a,{store:ie,children:Object(O.jsx)(Q,{state:ie.getState(),dispatch:ie.dispatch.bind(ie)})}),document.getElementById("root")),V()}},[[775,1,2]]]);
//# sourceMappingURL=main.7662e1dc.chunk.js.map