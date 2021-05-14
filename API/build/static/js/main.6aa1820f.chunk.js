(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{29:function(e,t,n){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",submitButton:"UserProfiles_submitButton__2h4H9"}},49:function(e,t,n){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},772:function(e,t,n){e.exports={formikWrap:"Login_formikWrap__2zAfX",formikForm:"Login_formikForm__1lWvK"}},783:function(e,t,n){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}},805:function(e,t,n){},806:function(e,t,n){},819:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(12),s=n.n(a),c=(n(805),n(35)),i=n(16),u=(n(806),n(13)),o=n(783),l=n.n(o),j=n(4);function b(){var e=Object(r.useState)({users:0,pofiles:0,matureProfiles:0}),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]}),console.log({users:e[0],profiles:e[1],matureProfiles:e[2]})}))}),[]),Object(j.jsxs)("div",{className:l.a.Dashboard,children:[Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Dashboard"})}),Object(j.jsxs)("div",{children:["Users:",Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:n.users})]}),"  ",Object(j.jsxs)("div",{children:["Profiles:",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{children:n.profiles})]}),"  ",Object(j.jsxs)("div",{children:["Profiles older than 18:",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{children:n.matureProfiles})]})]})}var d=n(10),O=n.n(d),f=n(21);function h(e,t){return p.apply(this,arguments)}function p(){return(p=Object(f.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return function(e){return v.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return U.apply(this,arguments)}function U(){return(U=Object(f.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=n(45),N=n(24),C=function(e){return{type:"SET-USER",user:e}},S=function(e){return{type:"SET-PROFILES",profiles:e}},w=n(29),P=n.n(w),D=n(848),_=n(856),A=n(22);var L=Object(N.b)((function(e,t){return{}}),{setProfilesAC:S})((function(e){var t=Object(r.useState)("NONE"),n=Object(u.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.name),i=Object(u.a)(c,2),o=i[0],l=i[1],b=Object(r.useState)(e.surname),d=Object(u.a)(b,2),h=d[0],p=d[1],m=Object(r.useState)(e.age),x=Object(u.a)(m,2),v=x[0],g=x[1],k=function(){var t=Object(f.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,y([{name:o,surname:h,age:v,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),E(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=15;break;case 9:if("DELETE"!==a){t.next=15;break}return t.next=12,y({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),E(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=[Object(j.jsxs)(D.a,{type:"submit",name:"okay",children:[Object(j.jsx)(A.Check,{}),"Okay"]}),Object(j.jsxs)(D.a,{value:"NONE",onClick:function(e){return s("NONE")},children:[Object(j.jsx)(A.Close,{})," Cancel"]}),null,null],T=[null,null,Object(j.jsxs)(D.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:[Object(j.jsx)(A.Pen,{}),"Edit"]}),Object(j.jsxs)(D.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:[Object(j.jsx)(A.Trash,{}),"Delete"]})],N=[];N="NONE"===a?T:U;var C=[],S=[Object(j.jsx)(_.a,{value:o,name:"name",onChange:function(e){return l(e.target.value)}}),Object(j.jsx)(_.a,{value:h,onChange:function(e){return p(e.target.value)}}),Object(j.jsx)(_.a,{type:"number",value:v,onChange:function(e){return g(parseInt(e.target.value))}})],w=[e.name?e.name:"Loading",e.surname?e.surname:"Loading",e.age?e.age:"Loading"];return C="EDIT"===a?S:w,Object(j.jsxs)("div",{className:P.a.box,children:[Object(j.jsx)("p",{children:Object(j.jsx)("a",{children:Object(j.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(j.jsxs)("form",{onSubmit:k,children:[Object(j.jsxs)("span",{children:["Name: ",C[0]]}),Object(j.jsxs)("span",{children:["Surname: ",C[1]]}),Object(j.jsxs)("span",{children:["Age: ",C[2]]}),"DELETE"===a?Object(j.jsxs)("span",{children:["Are You sure?",Object(j.jsx)("br",{})]}):null,Object(j.jsx)("div",{children:N})]})]})}));var I=Object(N.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles}}),{setProfilesAC:S})((function(e){var t=Object(r.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(),i=Object(u.a)(c,2),o=i[0],l=i[1],b=Object(r.useState)(),d=Object(u.a)(b,2),h=d[0],p=d[1],m=Object(r.useState)(),x=Object(u.a)(m,2),v=x[0],g=x[1],k=e.wantedUser?e.wantedUser:e.currUser.email;Object(r.useEffect)((function(){e.setProfilesAC([]),e.wantedUser?E(e.wantedUser).then((function(t){e.setProfilesAC(t)})):E(e.currUser.email).then((function(t){e.setProfilesAC(t)}))}),[k]);var U=function(){var t=Object(f.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"ADD"!==a){t.next=7;break}return t.next=4,y({name:o,surname:h,age:v,author:e.wantedUser?e.wantedUser:e.currUser.email},"PUT");case 4:!1===t.sent&&alert("duplicate profile"),E(k).then((function(t){e.setProfilesAC(t),s("NONE")}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=Object(T.a)(e.profileList).map((function(t){return Object(j.jsx)(L,{currUser:e.wantedUser?e.wantedUser:e.currUser.email,name:t.name,surname:t.surname,age:t.age,author:t.author},t._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:P.a.Userboard,children:[Object(j.jsxs)("div",{name:"Greeting",children:["Welcome, ",e.currUser.email,"!",Object(j.jsx)("br",{}),"Browsing, ",e.wantedUser?e.wantedUser:e.currUser.email," profiles "]}),"ADD"===a?Object(j.jsxs)("form",{onSubmit:U,children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Name"}),Object(j.jsx)(_.a,{type:"text",name:"name",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Surname"}),Object(j.jsx)(_.a,{type:"text",name:"surname",onChange:function(e){return p(e.target.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Age"}),Object(j.jsx)(_.a,{type:"number",name:"age",onChange:function(e){return g(parseInt(e.target.value))}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(D.a,{type:"submit",className:P.a.submitButton,children:"Submit"}),Object(j.jsx)(D.a,{className:P.a.submitButton,onClick:function(){s("NONE")},children:"Cancel"})]})]}):Object(j.jsxs)(D.a,{className:P.a.addButton,id:"ADD",value:"ADD",onClick:function(e){return s(e.target.value)},children:[Object(j.jsx)(A.Add,{}),"Add Profile"]})]}),Object(j.jsx)("div",{className:P.a.boxGrid,children:N})]})}));function R(e){return Object(j.jsx)("div",{children:Object(j.jsx)(I,{wantedUser:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function B(e){var t=Object(i.f)(),n=Object(r.useState)(),a=Object(u.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(I,{wantedUser:s||null})})}var H=n(49),J=n.n(H);function F(e){return Object(j.jsxs)("div",{className:J.a.Header,children:[Object(j.jsxs)("div",{className:J.a.User,children:[Object(j.jsx)("img",{className:"ADMIN"===e.currUser.role?J.a.adminPhoto:J.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(j.jsx)("p",{children:e.currUser.email})]}),Object(j.jsxs)("div",{className:J.a.Buttons,children:[Object(j.jsxs)(c.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:[Object(j.jsx)(A.Home,{}),"Home"]}),"ADMIN"===e.currUser.role?Object(j.jsxs)(c.b,{to:"/control",children:[Object(j.jsx)(A.Eye,{}),"Control"]}):null,Object(j.jsxs)("a",{name:"LogOut",onClick:function(){e.clearToken()},children:[Object(j.jsx)(A.LogOff,{}),"Log Out"]})]})]})}var M=n(854);var Z=Object(N.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)("NONE"),n=Object(u.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(e.user.name),o=Object(u.a)(i,2),l=o[0],b=o[1],d=Object(r.useState)(e.user.email),h=Object(u.a)(d,2),p=h[0],m=h[1],x=Object(r.useState)(e.user.role),v=Object(u.a)(x,2),g=v[0],E=v[1],k=function(){var t=Object(f.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,G("PATCH",[{name:l,email:p,role:g},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),G("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=16;break;case 10:if("DELETE"!==a){t.next=16;break}return t.next=13,G("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),G().then((function(t){s("NONE"),e.setUsers(t)}));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if("ADMIN"===e.currUser.role){var y=[Object(j.jsxs)(D.a,{type:"submit",name:"okay",children:[Object(j.jsx)(A.Check,{}),"Okay"]}),Object(j.jsxs)(D.a,{value:"NONE",onClick:function(e){return s("NONE")},children:[Object(j.jsx)(A.Close,{})," Cancel"]}),null,null],U=[null,null,Object(j.jsxs)(D.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:[Object(j.jsx)(A.Pen,{}),"Edit"]}),Object(j.jsxs)(D.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:[Object(j.jsx)(A.Trash,{}),"Delete"]})],T=[];T="NONE"===a?U:y;var N=[],C=[Object(j.jsx)(_.a,{value:l,name:"name",onChange:function(e){return b(e.target.value)}}),Object(j.jsx)(_.a,{value:p,onChange:function(e){return m(e.target.value)}}),Object(j.jsxs)(M.a,{id:"roles",value:g,onChange:function(e){return E(e.target.value)},name:"roles",children:[Object(j.jsx)("option",{value:"USER",children:"user"}),Object(j.jsx)("option",{value:"ADMIN",children:"admin"})]})],S=[e.user?e.user.name:"Loading",e.user?e.user.email:"Loading",e.user?e.user.role:"Loading"];return N="EDIT"===a?C:S,Object(j.jsxs)("div",{className:P.a.box,children:[Object(j.jsx)("p",{children:Object(j.jsx)(c.b,{name:"user",to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(j.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}),Object(j.jsxs)("form",{onSubmit:k,children:[Object(j.jsxs)("span",{children:["Name: ",N[0]]}),Object(j.jsxs)("span",{children:["Mail: ",N[1]]}),Object(j.jsxs)("span",{children:["Role: ",N[2]]}),"DELETE"===a?Object(j.jsxs)("span",{children:["Are You sure?",Object(j.jsx)("br",{})]}):null,Object(j.jsx)("div",{children:T})]})]})}return Object(j.jsx)("span",{children:"You have no access to this data."})}));function G(e){return K.apply(this,arguments)}function K(){return(K=Object(f.a)(O.a.mark((function e(t){var n,r=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=Object(N.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1];if(Object(r.useEffect)((function(){s([]);G("POST").then((function(e){s(e)}))}),[]),"ADMIN"===e.currUser.role&&a){var c=Object(T.a)(a).map((function(e,t){return Object(j.jsx)(Z,{setUsers:s,user:a[t]},a[t]._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:P.a.boxGrid,children:c})]})}return Object(j.jsx)("span",{children:"You have no access to this page."})})),q=n(23),Y=n(53);var $=function(e){var t=Object(Y.c)(),n=e.name;return Object(j.jsx)(_.a,Object(q.a)(Object(q.a)({},e),{},{error:!!t.errors[n],value:t.values[n],onInput:t.handleChange,onBlur:t.handleBlur}))},Q=n(772),z=n.n(Q),V=n(855);function X(e,t,n){return ee.apply(this,arguments)}function ee(){return(ee=Object(f.a)(O.a.mark((function e(t,n,r){var a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"Register"!==r){e.next=7;break}return e.next=4,m({username:t.email,password:t.password,role:"USER",name:t.name},"POST");case 4:a=e.sent,console.log(a),!1===a&&alert("Email already registered");case 7:return e.next=9,h({username:t.email,password:t.password},"POST");case 9:(s=e.sent)[0].token?(n.setToken(s[0]),n.setUserAC({email:t.email,role:s[1],token:s}),E(t.email).then((function(e){n.setProfilesAC(e)}))):alert("Login failed");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=Object(N.b)((function(e,t){return{state:e,setToken:t.setToken}}),{setUserAC:C,setProfilesAC:S})((function(e){var t=Object(r.useState)("Login"),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(j.jsx)(Y.b,{className:z.a.formikWrap,initialValues:{email:"",password:"",name:""},validate:function(e){return function(e,t){var n={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Invalid email address"):n.email="Required",e.password?/^[A-Z0-9._%+-]{2,}$/i.test(e.password)||(n.password="Invalid password"):n.password="Required",e.name||"Register"!==t?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||"Register"!==t||(n.name="Invalid name"):n.name="Required",n}(e,a)},onSubmit:function(){var t=Object(f.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",X(n,Object(q.a)({},e),a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:function(e){var t=e.errors;return console.log(t),Object(j.jsxs)(Y.a,{className:z.a.formikForm,children:[Object(j.jsxs)("div",{children:["Email:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"email"}),Object(j.jsx)("br",{}),t?t.email:null]}),Object(j.jsxs)("div",{children:["Password:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"password"}),Object(j.jsx)("br",{}),t?t.password:null]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)(V.a,{type:"radio",onChange:function(e){return s("Register")},checked:"Register"===a,name:"radio",value:"sign up"}),"Sign up"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)(V.a,{type:"radio",onChange:function(e){return s("Login")},checked:"Login"===a,name:"radio",value:"sign in"}),"Sign in"]})]}),"Register"===a?Object(j.jsxs)("div",{children:["Name:",Object(j.jsx)("br",{}),Object(j.jsx)($,{name:"name"}),Object(j.jsx)("br",{}),t?t.name:null," "]}):null,Object(j.jsx)(D.a,{type:"submit",children:"Submit"})]})}})}));var ne=Object(N.b)((function(e){return{state:e}}),{setUserAC:C,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:S})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(r.useState)(e()),n=Object(u.a)(t,2),a=n[0],s=n[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){h({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),n=t.token,a=t.setToken,s=t.clearToken,o=t.renewToken,l=t.getToken;return Object(r.useEffect)((function(){n&&g(l()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(o(t.token,t.email)),E(t.email).then((function(t){e.setProfilesAC(t)}))):s()}))}),[]),n&&n.expiry<(new Date).getTime()&&s(),n?Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)(c.a,{children:[Object(j.jsx)(F,{currUser:e.state.authData.currUser,clearToken:s}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(R,{state:e.state,clearToken:s})}),Object(j.jsx)(i.a,{path:"/dashboard",children:Object(j.jsx)(b,{})}),Object(j.jsx)(i.a,{path:"/control",children:Object(j.jsx)(W,{})}),Object(j.jsx)(i.a,{path:"/userprofiles",children:Object(j.jsx)(B,{})})]})]})}):Object(j.jsx)(te,{setToken:a})})),re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,858)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},ae=n(773),se="SET-USER",ce="SET-TOKEN",ie={currUser:{}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(q.a)(Object(q.a)({},e),{},{currUser:t.user});case ce:return Object(q.a)(Object(q.a)({},e),{},{currUser:Object(q.a)(Object(q.a)({},e.currUser),{},{token:Object(q.a)({},t.token)})});default:return e}},oe="SET-PROFILES",le={currProfiles:[]},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(q.a)(Object(q.a)({},e),{},{currProfiles:Object(T.a)(t.profiles)});default:return e}},be=Object(ae.a)({authData:ue,profileData:je}),de=Object(ae.b)(be);s.a.render(Object(j.jsx)(N.a,{store:de,children:Object(j.jsx)(ne,{state:de.getState(),dispatch:de.dispatch.bind(de)})}),document.getElementById("root")),re()}},[[819,1,2]]]);
//# sourceMappingURL=main.6aa1820f.chunk.js.map