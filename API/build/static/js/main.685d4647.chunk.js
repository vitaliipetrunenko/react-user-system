(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{33:function(e,t,r){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",roleSelect:"UserProfiles_roleSelect__3M-IR"}},60:function(e,t,r){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},73:function(e,t,r){e.exports={formikWrap:"Login_formikWrap__2zAfX",formikForm:"Login_formikForm__1lWvK"}},795:function(e,t,r){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}},820:function(e,t,r){},821:function(e,t,r){},835:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(13),s=r.n(a),c=(r(820),r(38)),i=r(16),u=(r(821),r(12)),o=r(795),l=r.n(o),j=r(4);function b(){var e=Object(n.useState)({users:0,pofiles:0,matureProfiles:0}),t=Object(u.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]}),console.log({users:e[0],profiles:e[1],matureProfiles:e[2]})}))}),[]),Object(j.jsxs)("div",{className:l.a.Dashboard,children:[Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Dashboard"})}),Object(j.jsxs)("div",{children:["Users:",Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:r.users})]}),"  ",Object(j.jsxs)("div",{children:["Profiles:",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{children:r.profiles})]}),"  ",Object(j.jsxs)("div",{children:["Profiles older than 18:",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{children:r.matureProfiles})]})]})}var d=r(9),O=r.n(d),f=r(22);function h(e,t){return p.apply(this,arguments)}function p(){return(p=Object(f.a)(O.a.mark((function e(t,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(O.a.mark((function e(t,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return function(e){return v.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(O.a.mark((function e(t,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=r(57),S=r(23),U=function(e){return{type:"SET-USER",user:e}},C=function(e){return{type:"SET-PROFILES",profiles:e}},P=r(33),D=r.n(P),w=r(865),_=r(875),A=(r(66),r(54)),I=r.n(A),L=r(61),R=r.n(L),H=r(55),J=r.n(H),B=r(62),F=r.n(B);var Z=Object(S.b)((function(e,t){return{}}),{setProfilesAC:C})((function(e){var t=Object(n.useState)("NONE"),r=Object(u.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)(e.name),i=Object(u.a)(c,2),o=i[0],l=i[1],b=Object(n.useState)(e.surname),d=Object(u.a)(b,2),h=d[0],p=d[1],m=Object(n.useState)(e.age),x=Object(u.a)(m,2),v=x[0],g=x[1],k=function(){var t=Object(f.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,y([{name:o,surname:h,age:v,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),E(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=15;break;case 9:if("DELETE"!==a){t.next=15;break}return t.next=12,y({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),E(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=[Object(j.jsxs)(w.a,{type:"submit",name:"okay",children:["Okay",Object(j.jsx)(R.a,{})]}),Object(j.jsxs)(w.a,{value:"NONE",onClick:function(e){return s("NONE")},children:["Cancel",Object(j.jsx)(I.a,{})," "]}),null,null],N=[null,null,Object(j.jsxs)(w.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(j.jsx)(J.a,{})]}),Object(j.jsxs)(w.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(j.jsx)(F.a,{})]})],S=[];S="NONE"===a?N:T;var U=[],C=[Object(j.jsx)(_.a,{value:o,name:"name",onChange:function(e){return l(e.target.value)}}),Object(j.jsx)(_.a,{value:h,onChange:function(e){return p(e.target.value)}}),Object(j.jsx)(_.a,{type:"number",value:v,onChange:function(e){return g(parseInt(e.target.value))}})],P=[e.name?e.name:"Loading",e.surname?e.surname:"Loading",e.age?e.age:"Loading"];return U="EDIT"===a?C:P,Object(j.jsxs)("div",{className:D.a.box,children:["NONE"===a?Object(j.jsx)("p",{children:Object(j.jsx)("a",{children:Object(j.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(j.jsxs)("form",{onSubmit:k,children:[Object(j.jsxs)("span",{children:["Name: ",U[0]]}),Object(j.jsxs)("span",{children:["Surname: ",U[1]]}),Object(j.jsxs)("span",{children:["Age: ",U[2]]}),"DELETE"===a?Object(j.jsxs)("span",{children:["Are You sure?",Object(j.jsx)("br",{})]}):null,Object(j.jsx)("div",{children:S})]})]})})),M=r(41),q=r(24);var $=function(e){var t=Object(M.c)(),r=e.name;return console.log(t.errors),Object(j.jsx)(_.a,Object(q.a)(Object(q.a)({},e),{},{error:!!t.errors[r],value:t.values[r],onInput:t.handleChange,onBlur:t.handleBlur,helperText:t.errors[r]}))},G=r(73),K=r.n(G),W=r(871);function Y(e,t,r){return Q.apply(this,arguments)}function Q(){return(Q=Object(f.a)(O.a.mark((function e(t,r,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("User:",r),e.next=3,y({name:t.name,surname:t.surname,age:t.age,author:r},"PUT");case 3:!1===e.sent&&alert("duplicate profile"),E(r).then((function(e){n(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=Object(S.b)((function(e,t){return{state:e}}),{setProfilesAC:C})((function(e){return Object(j.jsx)(M.b,{initialValues:{name:"",surname:"",age:""},validate:function(e){return function(e,t){var r={};return e.name?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||(r.name="Invalid name"):r.name="Required",e.surname?/^[A-Z0-9._%+-0-9]{2,}$/i.test(e.surname)||(r.surname="Invalid surname"):r.surname="Required",e.age?/^[0-9]{1,}$/i.test(e.age)||(r.age="Invalid age"):r.age="Required",r}(e)},onSubmit:function(){var t=Object(f.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Y(r,e.User,e.setProfilesAC));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(j.jsxs)(M.a,{children:[Object(j.jsxs)("div",{children:["Name:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"name"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{children:["Surname:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"surname"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{children:["Age:",Object(j.jsx)("br",{}),Object(j.jsx)($,{type:"number",name:"age"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)(w.a,{type:"submit",children:[" ",Object(j.jsx)(W.a,{}),"  "]})]})})}));var z=Object(S.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles}}),{setProfilesAC:C})((function(e){var t=Object(n.useState)(),r=Object(u.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)(),i=Object(u.a)(c,2),o=(i[0],i[1],Object(n.useState)()),l=Object(u.a)(o,2),b=(l[0],l[1],Object(n.useState)()),d=Object(u.a)(b,2),O=(d[0],d[1],Object(n.useState)()),f=Object(u.a)(O,2);f[0],f[1],console.log("UserProfilesUser and curruser",e.User,e.currUser.email);var h=e.User?e.User:e.currUser.email;Object(n.useEffect)((function(){e.setProfilesAC([]),E(h).then((function(t){e.setProfilesAC(t)}))}),[h]);var p=Object(N.a)(e.profileList).map((function(e){return Object(j.jsx)(Z,{currUser:h,name:e.name,surname:e.surname,age:e.age,author:e.author},e._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:D.a.Userboard,children:[Object(j.jsxs)("div",{name:"Greeting",children:["Welcome, ",e.currUser.email,"!",Object(j.jsx)("br",{}),"Browsing, ",h," profiles "]}),"ADD"===a?Object(j.jsxs)("div",{children:[Object(j.jsx)(V,{User:h}),Object(j.jsxs)(w.a,{onClick:function(){s("NONE")},children:["Cancel",Object(j.jsx)(I.a,{})]})]}):Object(j.jsxs)(w.a,{id:"ADD",value:"ADD",onClick:function(e){return s("ADD")},children:[" Add Profile ",Object(j.jsx)(J.a,{})]})]}),Object(j.jsx)("div",{className:D.a.boxGrid,children:p})]})}));function X(e){return Object(j.jsx)("div",{children:Object(j.jsx)(z,{User:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function ee(e){var t=Object(i.f)(),r=Object(n.useState)(),a=Object(u.a)(r,2),s=a[0],c=a[1];return Object(n.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(z,{User:s||null})})}var te=r(872),re=r(806),ne=r.n(re),ae=r(807),se=r.n(ae),ce=r(60),ie=r.n(ce);function ue(e){return Object(j.jsxs)("div",{className:ie.a.Header,children:[Object(j.jsxs)("div",{className:ie.a.User,children:[Object(j.jsx)("img",{className:"ADMIN"===e.currUser.role?ie.a.adminPhoto:ie.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(j.jsx)("p",{children:e.currUser.email})]}),Object(j.jsxs)("div",{className:ie.a.Buttons,children:[Object(j.jsx)(c.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:Object(j.jsxs)(w.a,{children:["Home ",Object(j.jsx)(te.a,{})," "]})}),"ADMIN"===e.currUser.role?Object(j.jsx)(c.b,{to:"/control",children:Object(j.jsxs)(w.a,{children:["Users",Object(j.jsx)(ne.a,{})]})}):null,Object(j.jsxs)(w.a,{name:"LogOut",onClick:function(){e.clearToken()},children:["Log Out",Object(j.jsx)(se.a,{})]})]})]})}var oe=r(873);var le=Object(S.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(n.useState)("NONE"),r=Object(u.a)(t,2),a=r[0],s=r[1],i=Object(n.useState)(e.user.name),o=Object(u.a)(i,2),l=o[0],b=o[1],d=Object(n.useState)(e.user.email),h=Object(u.a)(d,2),p=h[0],m=h[1],x=Object(n.useState)(e.user.role),v=Object(u.a)(x,2),g=v[0],E=v[1],k=function(){var t=Object(f.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,je("PATCH",[{name:l,email:p,role:g},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),je("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=16;break;case 10:if("DELETE"!==a){t.next=16;break}return t.next=13,je("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),je().then((function(t){s("NONE"),e.setUsers(t)}));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if("ADMIN"===e.currUser.role){var y=[Object(j.jsxs)(w.a,{type:"submit",name:"okay",children:["Okay",Object(j.jsx)(R.a,{})]}),Object(j.jsxs)(w.a,{value:"NONE",onClick:function(e){return s("NONE")},children:[" Cancel",Object(j.jsx)(I.a,{})]}),null,null],T=[null,null,Object(j.jsxs)(w.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(j.jsx)(J.a,{})]}),Object(j.jsxs)(w.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(j.jsx)(F.a,{})]})],N=[];N="NONE"===a?T:y;var S=[],U=[Object(j.jsx)(_.a,{value:l,name:"name",onChange:function(e){return b(e.target.value)}}),Object(j.jsx)(_.a,{value:p,onChange:function(e){return m(e.target.value)}}),Object(j.jsxs)(oe.a,{id:"roles",value:g,onChange:function(e){return E(e.target.value)},name:"roles",children:[Object(j.jsx)("option",{value:"USER",children:"user"}),Object(j.jsx)("option",{value:"ADMIN",children:"admin"})]})],C=[e.user?e.user.name:"Loading",e.user?e.user.email:"Loading",e.user?e.user.role:"Loading"];return S="EDIT"===a?U:C,Object(j.jsxs)("div",{className:D.a.box,children:["NONE"===a?Object(j.jsx)("p",{children:Object(j.jsx)(c.b,{name:"user",to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(j.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(j.jsxs)("form",{onSubmit:k,children:[Object(j.jsxs)("span",{children:["Name: ",S[0]]}),Object(j.jsxs)("span",{children:["Mail: ",S[1]]}),Object(j.jsxs)("span",{className:D.a.roleSelect,children:["Role: ",S[2]]}),"DELETE"===a?Object(j.jsxs)("span",{children:["Are You sure?",Object(j.jsx)("br",{})]}):null,Object(j.jsx)("div",{children:N})]})]})}return Object(j.jsx)("span",{children:"You have no access to this data."})}));function je(e){return be.apply(this,arguments)}function be(){return(be=Object(f.a)(O.a.mark((function e(t){var r,n=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:r})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=Object(S.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(n.useState)(),r=Object(u.a)(t,2),a=r[0],s=r[1];if(Object(n.useEffect)((function(){s([]);je("POST").then((function(e){s(e)}))}),[]),"ADMIN"===e.currUser.role&&a){var c=Object(N.a)(a).map((function(e,t){return Object(j.jsx)(le,{setUsers:s,user:a[t]},a[t]._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:D.a.boxGrid,children:c})]})}return Object(j.jsx)("span",{children:"You have no access to this page."})})),Oe=r(874);function fe(e,t,r){return he.apply(this,arguments)}function he(){return(he=Object(f.a)(O.a.mark((function e(t,r,n){var a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"Register"!==n){e.next=7;break}return e.next=4,m({username:t.email,password:t.password,role:"USER",name:t.name},"POST");case 4:a=e.sent,console.log(a),!1===a&&alert("Email already registered");case 7:return e.next=9,h({username:t.email,password:t.password},"POST");case 9:(s=e.sent)[0].token?(r.setToken(s[0]),r.setUserAC({email:t.email,role:s[1],token:s}),E(t.email).then((function(e){r.setProfilesAC(e)}))):alert("Login failed");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pe=Object(S.b)((function(e,t){return{state:e,setToken:t.setToken}}),{setUserAC:U,setProfilesAC:C})((function(e){var t=Object(n.useState)("Login"),r=Object(u.a)(t,2),a=r[0],s=r[1];return Object(j.jsx)(M.b,{className:K.a.formikWrap,initialValues:{email:"",password:"",name:""},validate:function(e){return function(e,t){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.password?/^[A-Z0-9._%+-]{2,}$/i.test(e.password)||(r.password="Invalid password"):r.password="Required",e.name||"Register"!==t?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||"Register"!==t||(r.name="Invalid name"):r.name="Required",r}(e,a)},onSubmit:function(){var t=Object(f.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fe(r,Object(q.a)({},e),a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(j.jsxs)(M.a,{className:K.a.formikForm,children:[Object(j.jsxs)("div",{children:["Email:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"email"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{children:["Password:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"password"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)(Oe.a,{type:"radio",onChange:function(e){return s("Register")},checked:"Register"===a,name:"radio",value:"sign up"}),"Sign up"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)(Oe.a,{type:"radio",onChange:function(e){return s("Login")},checked:"Login"===a,name:"radio",value:"sign in"}),"Sign in"]})]}),"Register"===a?Object(j.jsxs)("div",{children:["Name:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"name"}),Object(j.jsx)("br",{})]}):null,Object(j.jsxs)(w.a,{type:"submit",children:[" ",Object(j.jsx)(W.a,{}),"  "]})]})})}));var me=Object(S.b)((function(e){return{state:e}}),{setUserAC:U,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:C})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(n.useState)(e()),r=Object(u.a)(t,2),a=r[0],s=r[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){h({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),r=t.token,a=t.setToken,s=t.clearToken,o=t.renewToken,l=t.getToken;return Object(n.useEffect)((function(){r&&g(l()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(o(t.token,t.email)),E(t.email).then((function(t){e.setProfilesAC(t)}))):s()}))}),[]),r&&r.expiry<(new Date).getTime()&&s(),r?Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)(c.a,{children:[Object(j.jsx)(ue,{currUser:e.state.authData.currUser,clearToken:s}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(X,{state:e.state,clearToken:s})}),Object(j.jsx)(i.a,{path:"/dashboard",children:Object(j.jsx)(b,{})}),Object(j.jsx)(i.a,{path:"/control",children:Object(j.jsx)(de,{})}),Object(j.jsx)(i.a,{path:"/userprofiles",children:Object(j.jsx)(ee,{})})]})]})}):Object(j.jsx)(pe,{setToken:a})})),xe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,877)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))},ve=r(784),ge="SET-USER",Ee="SET-TOKEN",ke={currUser:{}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(q.a)(Object(q.a)({},e),{},{currUser:t.user});case Ee:return Object(q.a)(Object(q.a)({},e),{},{currUser:Object(q.a)(Object(q.a)({},e.currUser),{},{token:Object(q.a)({},t.token)})});default:return e}},Te="SET-PROFILES",Ne={currProfiles:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(q.a)(Object(q.a)({},e),{},{currProfiles:Object(N.a)(t.profiles)});default:return e}},Ue=Object(ve.a)({authData:ye,profileData:Se}),Ce=Object(ve.b)(Ue);s.a.render(Object(j.jsx)(S.a,{store:Ce,children:Object(j.jsx)(me,{state:Ce.getState(),dispatch:Ce.dispatch.bind(Ce)})}),document.getElementById("root")),xe()}},[[835,1,2]]]);
//# sourceMappingURL=main.685d4647.chunk.js.map