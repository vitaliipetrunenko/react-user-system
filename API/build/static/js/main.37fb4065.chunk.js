(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{104:function(e,t,r){},105:function(e,t,r){},118:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(10),s=r.n(a),c=(r(104),r(37)),i=r(14),u=(r(105),r(12)),o=r(148),l=r(9),j=r.n(l),b=r(21);function d(e,t){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(j.a.mark((function e(t,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(b.a)(j.a.mark((function e(t,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return function(e){return p.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(j.a.mark((function e(t,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(j.a.mark((function e(t){var r,n=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:r})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=r(82),T=r.n(N),S=r(2);function U(){var e=Object(n.useState)({users:0,profiles:0,matureProfiles:0}),t=Object(u.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){l(!0),fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]}),l(!0)}))}),[]),Object(S.jsxs)("div",{className:T.a.Dashboard,children:[Object(S.jsx)("div",{children:Object(S.jsx)("h2",{children:"Dashboard"})}),Object(S.jsxs)("div",{children:["Users:",Object(S.jsx)("br",{}),Object(S.jsx)("span",{children:i?Object(S.jsx)(o.a,{}):r.users})]})," ",Object(S.jsxs)("div",{children:["Profiles:",Object(S.jsx)("br",{})," ",Object(S.jsx)("span",{children:i?Object(S.jsx)(o.a,{}):r.profiles})]})," ",Object(S.jsxs)("div",{children:["Profiles over 18:",Object(S.jsx)("br",{})," ",Object(S.jsx)("span",{children:i?Object(S.jsx)(o.a,{}):r.matureProfiles})]})]})}var D=r(54),P=r(22),C=function(e){return{type:"SET-USER",user:e}},w=function(e){return{type:"SET-PROFILES",profiles:e}},_=r(31),A=r.n(_),L=r(152),I=r(159),R=r(51),H=r.n(R),B=r(58),J=r.n(B),Z=r(52),F=r.n(Z),M=r(59),q=r.n(M);var G=Object(P.b)((function(e,t){return{}}),{setProfilesAC:w})((function(e){var t=Object(n.useState)("NONE"),r=Object(u.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)(e.name),i=Object(u.a)(c,2),o=i[0],l=i[1],d=Object(n.useState)(e.surname),O=Object(u.a)(d,2),f=O[0],h=O[1],p=Object(n.useState)(e.age),m=Object(u.a)(p,2),v=m[0],E=m[1],k=function(){var t=Object(b.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,g([{name:o,surname:f,age:v,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),x(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=15;break;case 9:if("DELETE"!==a){t.next=15;break}return t.next=12,g({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),x(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=[Object(S.jsxs)(L.a,{type:"submit",name:"okay",children:["Okay",Object(S.jsx)(J.a,{})]}),Object(S.jsxs)(L.a,{value:"NONE",onClick:function(e){return s("NONE")},children:["Cancel",Object(S.jsx)(H.a,{})," "]}),null,null],N=[null,null,Object(S.jsxs)(L.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(S.jsx)(F.a,{})]}),Object(S.jsxs)(L.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(S.jsx)(q.a,{})]})],T=[];T="NONE"===a?N:y;var U=[],D=[Object(S.jsx)(I.a,{value:o,id:"name",name:"name",label:"name",onChange:function(e){return l(e.target.value)}}),Object(S.jsx)(I.a,{value:f,onChange:function(e){return h(e.target.value)}}),Object(S.jsx)(I.a,{type:"number",value:v,onChange:function(e){return E(parseInt(e.target.value))}})],P=[e.name?e.name:"Loading",e.surname?e.surname:"Loading",e.age?e.age:"Loading"];return U="EDIT"===a?D:P,Object(S.jsxs)("div",{className:A.a.box,children:["NONE"===a?Object(S.jsx)("p",{children:Object(S.jsx)("a",{children:Object(S.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(S.jsxs)("form",{onSubmit:k,children:[Object(S.jsxs)("span",{name:"name",label:"name",children:["Name: ",U[0]]}),Object(S.jsxs)("span",{children:["Surname: ",U[1]]}),Object(S.jsxs)("span",{children:["Age: ",U[2]]}),"DELETE"===a?Object(S.jsxs)("span",{children:["Are You sure?",Object(S.jsx)("br",{})]}):null,Object(S.jsx)("div",{children:T})]})]})})),W=r(40),$=r(20);var K=function(e){var t=Object(W.c)(),r=e.name;return console.log(t.errors),Object(S.jsx)(I.a,Object($.a)(Object($.a)({},e),{},{error:!!t.errors[r],value:t.values[r],onInput:t.handleChange,onBlur:t.handleBlur,helperText:t.errors[r],InputLabelProps:{shrink:!1}}))},Y=r(155);function Q(e,t,r){return V.apply(this,arguments)}function V(){return(V=Object(b.a)(j.a.mark((function e(t,r,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("User:",r),e.next=3,g({name:t.name,surname:t.surname,age:t.age,author:r},"PUT");case 3:!1===e.sent&&alert("duplicate profile"),x(r).then((function(e){n(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=Object(P.b)((function(e,t){return{state:e}}),{setProfilesAC:w})((function(e){return Object(S.jsx)(W.b,{initialValues:{name:"",surname:"",age:""},validate:function(e){return function(e,t){var r={};return e.name?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||(r.name="Invalid name"):r.name="Required",e.surname?/^[A-Z0-9._%+-0-9]{2,}$/i.test(e.surname)||(r.surname="Invalid surname"):r.surname="Required",e.age?/^[0-9]{1,}$/i.test(e.age)||(r.age="Invalid age"):r.age="Required",r}(e)},onSubmit:function(){var t=Object(b.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Q(r,e.User,e.setProfilesAC));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(S.jsxs)(W.a,{children:[Object(S.jsxs)("div",{children:["Name:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{name:"name"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:["Surname:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{name:"surname"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:["Age:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{type:"number",name:"age"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)(L.a,{type:"submit",children:[" ",Object(S.jsx)(Y.a,{}),"  "]})]})})}));var X=Object(P.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles,isLoadingProfiles:e.profileData.isLoading}}),{setProfilesAC:w,setLoadingTrueAC:function(){return{type:"SET-LOADING-TRUE"}}})((function(e){var t=Object(n.useState)(),r=Object(u.a)(t,2),a=r[0],s=r[1],c=e.User?e.User:e.currUser.email;Object(n.useEffect)((function(){e.setLoadingTrueAC(),x(c).then((function(t){console.log("setting from userProfiles"),e.setProfilesAC(t)}))}),[c]);var i=Object(D.a)(e.profileList).map((function(e){return Object(S.jsx)(G,{currUser:c,name:e.name,surname:e.surname,age:e.age,author:e.author},e._id)}));return Object(S.jsxs)("div",{className:"contentBlock",children:[Object(S.jsxs)("div",{className:A.a.Userboard,children:[Object(S.jsxs)("div",{name:"Greeting",children:["Welcome, ",e.currUser.email,"!",Object(S.jsx)("br",{}),"Browsing, ",c," profiles"," "]}),"ADD"===a?Object(S.jsxs)("div",{children:[Object(S.jsx)(z,{User:c}),Object(S.jsx)(L.a,{onClick:function(){s("NONE")},children:Object(S.jsx)(H.a,{})})]}):Object(S.jsxs)(L.a,{id:"ADD",value:"ADD",onClick:function(e){return s("ADD")},children:[" ","Add Profile ",Object(S.jsx)(F.a,{})]})]}),e.isLoadingProfiles?Object(S.jsx)("div",{className:"LoaderWrap",children:Object(S.jsx)(o.a,{})}):Object(S.jsxs)("div",{className:A.a.boxGrid,children:[" ",i]})]})}));function ee(e){return Object(S.jsx)("div",{children:Object(S.jsx)(X,{User:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function te(e){var t=Object(i.f)();console.log(t);var r=Object(n.useState)(),a=Object(u.a)(r,2),s=a[0],c=a[1];return Object(n.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(S.jsx)("div",{children:Object(S.jsx)(X,{User:s||null})})}var re=r(156),ne=r(90),ae=r.n(ne),se=r(91),ce=r.n(se),ie=r(57),ue=r.n(ie);function oe(e){return Object(S.jsxs)("div",{className:ue.a.Header,children:[Object(S.jsxs)("div",{className:ue.a.User,children:[Object(S.jsx)("img",{className:"ADMIN"===e.currUser.role?ue.a.adminPhoto:ue.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(S.jsx)("p",{children:e.currUser.email})]}),Object(S.jsxs)("div",{className:ue.a.Buttons,children:[Object(S.jsx)(c.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:Object(S.jsxs)(L.a,{children:["Home ",Object(S.jsx)(re.a,{})," "]})}),"ADMIN"===e.currUser.role?Object(S.jsx)(c.b,{to:"/control",children:Object(S.jsxs)(L.a,{children:["Users",Object(S.jsx)(ae.a,{})]})}):null,Object(S.jsxs)(L.a,{name:"LogOut",onClick:function(){e.clearToken()},children:["Log Out",Object(S.jsx)(ce.a,{})]})]})]})}var le=r(157);var je=Object(P.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(n.useState)("NONE"),r=Object(u.a)(t,2),a=r[0],s=r[1],i=Object(n.useState)(e.user.name),o=Object(u.a)(i,2),l=o[0],d=o[1],O=Object(n.useState)(e.user.email),f=Object(u.a)(O,2),h=f[0],p=f[1],m=Object(n.useState)(e.user.role),x=Object(u.a)(m,2),v=x[0],g=x[1],E=function(){var t=Object(b.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,k("PATCH",[{name:l,email:h,role:v},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),k("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=16;break;case 10:if("DELETE"!==a){t.next=16;break}return t.next=13,k("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),k().then((function(t){s("NONE"),e.setUsers(t)}));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if("ADMIN"===e.currUser.role){var y=[Object(S.jsxs)(L.a,{type:"submit",name:"okay",children:["Okay",Object(S.jsx)(J.a,{})]}),Object(S.jsxs)(L.a,{value:"NONE",onClick:function(e){return s("NONE")},children:[" ","Cancel",Object(S.jsx)(H.a,{})]}),null,null],N=[null,null,Object(S.jsxs)(L.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(S.jsx)(F.a,{})]}),Object(S.jsxs)(L.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(S.jsx)(q.a,{})]})],T=[];T="NONE"===a?N:y;var U=[],D=[Object(S.jsx)(I.a,{value:l,name:"name",id:"name",label:"name",onChange:function(e){return d(e.target.value)}}),Object(S.jsx)(I.a,{value:h,onChange:function(e){return p(e.target.value)}}),Object(S.jsxs)(le.a,{id:"roles",value:v,onChange:function(e){return g(e.target.value)},name:"roles",children:[Object(S.jsx)("option",{value:"USER",children:"user"}),Object(S.jsx)("option",{value:"ADMIN",children:"admin"})]})],P=[e.user?e.user.name:"Loading",e.user?e.user.email:"Loading",e.user?e.user.role:"Loading"];return U="EDIT"===a?D:P,Object(S.jsxs)("div",{className:A.a.box,children:["NONE"===a?Object(S.jsx)("p",{children:Object(S.jsx)(c.b,{name:"user",to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(S.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(S.jsxs)("form",{onSubmit:E,children:[Object(S.jsxs)("span",{label:"name",name:"name",children:["Name: ",U[0]]}),Object(S.jsxs)("span",{children:["Mail: ",U[1]]}),Object(S.jsxs)("span",{className:A.a.roleSelect,children:["Role: ",U[2]]}),"DELETE"===a?Object(S.jsxs)("span",{children:["Are You sure?",Object(S.jsx)("br",{})]}):null,Object(S.jsx)("div",{children:T})]})]})}return Object(S.jsx)("span",{children:"You have no access to this data."})}));var be=Object(P.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(n.useState)([]),r=Object(u.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)(!1),i=Object(u.a)(c,2),l=i[0],j=i[1];if(Object(n.useEffect)((function(){j(!0);k("POST").then((function(e){s(e),j(!1)}))}),[]),"ADMIN"===e.currUser.role&&a){var b=Object(D.a)(a).map((function(e,t){return Object(S.jsx)(je,{setUsers:s,user:a[t]},a[t]._id)}));return Object(S.jsxs)("div",{className:"contentBlock",children:[Object(S.jsx)(U,{}),l?Object(S.jsx)("div",{className:"LoaderWrap",children:Object(S.jsx)(o.a,{})}):Object(S.jsx)("div",{className:A.a.boxGrid,children:b})]})}return Object(S.jsx)("span",{children:"You have no access to this page."})})),de=r(76),Oe=r.n(de),fe=r(158);function he(e,t,r){return pe.apply(this,arguments)}function pe(){return(pe=Object(b.a)(j.a.mark((function e(t,r,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Register"!==n){e.next=5;break}return e.next=3,f({username:t.email,password:t.password,role:"USER",name:t.name},"POST");case 3:!1===e.sent&&alert("Email already registered");case 5:return e.next=7,d({username:t.email,password:t.password},"POST");case 7:(a=e.sent)[0].token?(r.setToken(a[0]),r.setUserAC({email:t.email,role:a[1],token:a}),x(t.email).then((function(e){r.setProfilesAC(e)}))):alert("Login failed");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me=Object(P.b)((function(e,t){return{setToken:t.setToken}}),{setUserAC:C,setProfilesAC:w})((function(e){var t=Object(n.useState)("Login"),r=Object(u.a)(t,2),a=r[0],s=r[1];return Object(S.jsx)(W.b,{className:Oe.a.formikWrap,initialValues:{email:"",password:"",name:""},validate:function(e){return function(e,t){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.password?/^[A-Z0-9._%+-]{2,}$/i.test(e.password)||(r.password="Invalid password"):r.password="Required",e.name||"Register"!==t?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||"Register"!==t||(r.name="Invalid name"):r.name="Required",r}(e,a)},onSubmit:function(){var t=Object(b.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",he(r,Object($.a)({},e),a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(S.jsxs)(W.a,{className:Oe.a.formikForm,children:[Object(S.jsxs)("div",{children:["Email:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{"data-testid":"emailF",name:"email"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:["Password:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{"data-testid":"passF",name:"password"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("label",{children:[Object(S.jsx)(fe.a,{type:"radio","data-testid":"opChanger",onChange:function(e){return s("Register")},checked:"Register"===a,name:"radio",value:"sign up"}),"Sign up"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)(fe.a,{type:"radio",onChange:function(e){return s("Login")},checked:"Login"===a,name:"radio",value:"sign in"}),"Sign in"]})]}),"Register"===a?Object(S.jsxs)("div",{children:["Name:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{name:"name","data-testid":"nameF"}),Object(S.jsx)("br",{})]}):null,Object(S.jsxs)(L.a,{"data-testid":"submitter",type:"submit",children:[" ",Object(S.jsx)(Y.a,{}),"  "]})]})})}));var xe=Object(P.b)((function(e){return{state:e}}),{setUserAC:C,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:w})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(n.useState)(e()),r=Object(u.a)(t,2),a=r[0],s=r[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){d({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),r=t.token,a=t.setToken,s=t.clearToken,o=t.renewToken,l=t.getToken;return Object(n.useEffect)((function(){r&&m(l()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(o(t.token,t.email))):s()}))}),[]),r&&r.expiry<(new Date).getTime()&&s(),r?Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsxs)(c.a,{children:[Object(S.jsx)(oe,{currUser:e.state.authData.currUser,clearToken:s}),Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{exact:!0,path:"/",children:Object(S.jsx)(ee,{state:e.state,clearToken:s})}),Object(S.jsx)(i.a,{path:"/dashboard",children:Object(S.jsx)(U,{})}),Object(S.jsx)(i.a,{path:"/control",children:Object(S.jsx)(be,{})}),Object(S.jsx)(i.a,{path:"/userprofiles",children:Object(S.jsx)(te,{})})]})]})}):Object(S.jsx)(me,{setToken:a})})),ve=r(77),ge="SET-USER",Ee="SET-TOKEN",ke={currUser:{email:"testmail"}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object($.a)(Object($.a)({},e),{},{currUser:t.user});case Ee:return Object($.a)(Object($.a)({},e),{},{currUser:Object($.a)(Object($.a)({},e.currUser),{},{token:Object($.a)({},t.token)})});default:return e}},Ne="SET-PROFILES",Te="SET-LOADING-TRUE",Se={currProfiles:[],isLoading:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object($.a)(Object($.a)({},e),{},{currProfiles:Object(D.a)(t.profiles),isLoading:!1});case Te:return Object($.a)(Object($.a)({},e),{},{isLoading:!0});default:return e}},De=Object(ve.a)({authData:ye,profileData:Ue}),Pe=Object(ve.b)(De);s.a.render(Object(S.jsx)(P.a,{store:Pe,children:Object(S.jsx)(xe,{state:Pe.getState(),dispatch:Pe.dispatch.bind(Pe)})}),document.getElementById("root"))},31:function(e,t,r){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",roleSelect:"UserProfiles_roleSelect__3M-IR"}},57:function(e,t,r){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},76:function(e,t,r){e.exports={formikWrap:"Login_formikWrap__2zAfX",formikForm:"Login_formikForm__1lWvK"}},82:function(e,t,r){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}}},[[118,1,2]]]);
//# sourceMappingURL=main.37fb4065.chunk.js.map