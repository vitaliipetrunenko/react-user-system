(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),s=n.n(a),c=(n(104),n(37)),i=n(14),u=(n(105),n(12)),o=n(148),l=n(9),j=n.n(l),b=n(22);function d(e,t){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return function(e){return m.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(j.a.mark((function e(t){var n,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(57),T=n.n(y),S=n(2);function D(){var e=Object(r.useState)({users:0,profiles:0,matureProfiles:0}),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),c=Object(u.a)(s,2),i=c[0],l=c[1];return Object(r.useEffect)((function(){l(!0),fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]}),l(!1)}))}),[]),Object(S.jsxs)("div",{className:T.a.Dashboard,children:[Object(S.jsx)("div",{className:T.a.DashBox,children:Object(S.jsx)("h2",{children:"Dashboard"})}),Object(S.jsxs)("div",{className:T.a.DashBox,children:["Users:",Object(S.jsx)("br",{}),Object(S.jsx)("span",{children:i?Object(S.jsx)(o.a,{}):n.users})]})," ",Object(S.jsxs)("div",{className:T.a.DashBox,children:["Profiles:",Object(S.jsx)("br",{})," ",Object(S.jsx)("span",{children:i?Object(S.jsx)(o.a,{}):n.profiles})]})," ",Object(S.jsxs)("div",{className:T.a.DashBox,children:["Profiles over 18:",Object(S.jsx)("br",{})," ",Object(S.jsx)("span",{children:i?Object(S.jsx)(o.a,{}):n.matureProfiles})]})]})}var U=n(54),P=n(21),C=function(e){return{type:"SET-USER",user:e}},_=function(e){return{type:"SET-PROFILES",profiles:e}},A=n(31),w=n.n(A),L=n(152),I=n(159),R=n(51),B=n.n(R),H=n(59),F=n.n(H),J=n(52),Z=n.n(J),q=n(60),M=n.n(q);var G=Object(P.b)((function(e,t){return{}}),{setProfilesAC:_})((function(e){var t=Object(r.useState)("NONE"),n=Object(u.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.name),i=Object(u.a)(c,2),o=i[0],l=i[1],d=Object(r.useState)(e.surname),O=Object(u.a)(d,2),f=O[0],h=O[1],m=Object(r.useState)(e.age),p=Object(u.a)(m,2),v=p[0],E=p[1],k=function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,g([{name:o,surname:f,age:v,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),x(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=15;break;case 9:if("DELETE"!==a){t.next=15;break}return t.next=12,g({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),x(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=[Object(S.jsxs)(L.a,{type:"submit",name:"okay",children:["Okay",Object(S.jsx)(F.a,{})]}),Object(S.jsxs)(L.a,{value:"NONE",onClick:function(e){return s("NONE")},children:["Cancel",Object(S.jsx)(B.a,{})," "]}),null,null],y=[null,null,Object(S.jsxs)(L.a,{value:"EDIT",id:"edit",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(S.jsx)(Z.a,{})]}),Object(S.jsxs)(L.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(S.jsx)(M.a,{})]})],T=[];T="NONE"===a?y:N;var D=[],U=[Object(S.jsx)(I.a,{value:o,id:"name",name:"name",label:"name",onChange:function(e){return l(e.target.value)}}),Object(S.jsx)(I.a,{value:f,onChange:function(e){return h(e.target.value)}}),Object(S.jsx)(I.a,{type:"number",value:v,onChange:function(e){return E(parseInt(e.target.value))}})],P=[e.name?e.name:"Loading",e.surname?e.surname:"Loading",e.age?e.age:"Loading"];return D="EDIT"===a?U:P,Object(S.jsxs)("div",{className:w.a.box,children:["NONE"===a?Object(S.jsx)("p",{children:Object(S.jsx)("a",{children:Object(S.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(S.jsxs)("form",{onSubmit:k,children:[Object(S.jsxs)("span",{name:"name",label:"name",children:["Name: ",D[0]]}),Object(S.jsxs)("span",{children:["Surname: ",D[1]]}),Object(S.jsxs)("span",{children:["Age: ",D[2]]}),"DELETE"===a?Object(S.jsxs)("span",{children:["Are You sure?",Object(S.jsx)("br",{})]}):null,Object(S.jsx)("div",{children:T})]})]})})),W=n(40),$=n(20);var K=function(e){var t=Object(W.c)(),n=e.name;return console.log(t.errors),Object(S.jsx)(I.a,Object($.a)(Object($.a)({},e),{},{error:!!t.errors[n],value:t.values[n],onInput:t.handleChange,onBlur:t.handleBlur,helperText:t.errors[n],InputLabelProps:{shrink:!1}}))},Y=n(155);function Q(e,t,n){return V.apply(this,arguments)}function V(){return(V=Object(b.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({name:t.name,surname:t.surname,age:t.age,author:n},"PUT");case 2:!1===e.sent&&alert("duplicate profile"),x(n).then((function(e){r(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=Object(P.b)((function(e,t){return{state:e}}),{setProfilesAC:_})((function(e){return Object(S.jsx)(W.b,{initialValues:{name:"",surname:"",age:""},validate:function(e){return function(e,t){var n={};return e.name?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||(n.name="Invalid name"):n.name="Required",e.surname?/^[A-Z0-9._%+-0-9]{2,}$/i.test(e.surname)||(n.surname="Invalid surname"):n.surname="Required",e.age?/^[0-9]{1,}$/i.test(e.age)||(n.age="Invalid age"):n.age="Required",n}(e)},onSubmit:function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Q(n,e.User,e.setProfilesAC));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(S.jsxs)(W.a,{children:[Object(S.jsxs)("div",{children:["Name:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{name:"name",id:"nameA",label:"nameF"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:["Surname:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{name:"surname",id:"surnameA",label:"surnameF"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:["Age:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{type:"number",id:"ageA",name:"age",label:"ageF"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)(L.a,{type:"submit","data-testid":"submitter",children:[" ",Object(S.jsx)(Y.a,{}),"  "]})]})})}));var X=Object(P.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles,isLoadingProfiles:e.profileData.isLoading}}),{setProfilesAC:_,setLoadingTrueAC:function(){return{type:"SET-LOADING-TRUE"}}})((function(e){var t=Object(r.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1],c=e.User?e.User:e.currUser.email;Object(r.useEffect)((function(){e.setLoadingTrueAC(),x(c).then((function(t){console.log("setting from userProfiles"),e.setProfilesAC(t)}))}),[c]);var i=Object(U.a)(e.profileList).map((function(e){return Object(S.jsx)(G,{currUser:c,name:e.name,surname:e.surname,age:e.age,author:e.author},e._id)}));return Object(S.jsxs)("div",{className:"contentBlock",children:[Object(S.jsxs)("div",{className:w.a.Userboard,children:[Object(S.jsxs)("div",{name:"Greeting",children:["Welcome, ",e.currUser.email,"!",Object(S.jsx)("br",{}),"Browsing, ",c," profiles"," "]}),"ADD"===a?Object(S.jsxs)("div",{children:[Object(S.jsx)(z,{User:c}),Object(S.jsx)(L.a,{onClick:function(){s("NONE")},children:Object(S.jsx)(B.a,{})})]}):Object(S.jsxs)(L.a,{id:"ADD",value:"ADD",onClick:function(e){return s("ADD")},children:[" ","Add Profile ",Object(S.jsx)(Z.a,{})]})]}),e.isLoadingProfiles?Object(S.jsx)("div",{className:"LoaderWrap",children:Object(S.jsx)(o.a,{})}):Object(S.jsxs)("div",{className:w.a.boxGrid,children:[" ",i]})]})}));function ee(e){return Object(S.jsx)("div",{children:Object(S.jsx)(X,{User:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function te(e){var t=Object(i.f)();console.log(t);var n=Object(r.useState)(),a=Object(u.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(S.jsx)("div",{children:Object(S.jsx)(X,{User:s||null})})}var ne=n(156),re=n(90),ae=n.n(re),se=n(91),ce=n.n(se),ie=n(58),ue=n.n(ie);function oe(e){return Object(S.jsxs)("div",{className:ue.a.Header,children:[Object(S.jsxs)("div",{className:ue.a.User,children:[Object(S.jsx)("img",{className:"ADMIN"===e.currUser.role?ue.a.adminPhoto:ue.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(S.jsx)("p",{children:e.currUser.email})]}),Object(S.jsxs)("div",{className:ue.a.Buttons,children:[Object(S.jsx)(c.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:Object(S.jsxs)(L.a,{children:["Home ",Object(S.jsx)(ne.a,{})," "]})}),"ADMIN"===e.currUser.role?Object(S.jsx)(c.b,{to:"/control",children:Object(S.jsxs)(L.a,{children:["Users",Object(S.jsx)(ae.a,{})]})}):null,Object(S.jsxs)(L.a,{name:"LogOut",onClick:function(){e.clearToken()},children:["Log Out",Object(S.jsx)(ce.a,{})]})]})]})}var le=n(157);var je=Object(P.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)("NONE"),n=Object(u.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(e.user.name),o=Object(u.a)(i,2),l=o[0],d=o[1],O=Object(r.useState)(e.user.email),f=Object(u.a)(O,2),h=f[0],m=f[1],p=Object(r.useState)(e.user.role),x=Object(u.a)(p,2),v=x[0],g=x[1],E=function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,k("PATCH",[{name:l,email:h,role:v},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),k("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=16;break;case 10:if("DELETE"!==a){t.next=16;break}return t.next=13,k("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),k().then((function(t){s("NONE"),e.setUsers(t)}));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if("ADMIN"===e.currUser.role){var N=[Object(S.jsxs)(L.a,{type:"submit",name:"okay",children:["Okay",Object(S.jsx)(F.a,{})]}),Object(S.jsxs)(L.a,{value:"NONE",onClick:function(e){return s("NONE")},children:[" ","Cancel",Object(S.jsx)(B.a,{})]}),null,null],y=[null,null,Object(S.jsxs)(L.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(S.jsx)(Z.a,{})]}),Object(S.jsxs)(L.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(S.jsx)(M.a,{})]})],T=[];T="NONE"===a?y:N;var D=[],U=[Object(S.jsx)(I.a,{value:l,name:"name",id:"name",label:"name",onChange:function(e){return d(e.target.value)}}),Object(S.jsx)(I.a,{value:h,onChange:function(e){return m(e.target.value)}}),Object(S.jsxs)(le.a,{id:"roles",value:v,onChange:function(e){return g(e.target.value)},name:"roles",children:[Object(S.jsx)("option",{value:"USER",children:"user"}),Object(S.jsx)("option",{value:"ADMIN",children:"admin"})]})],P=[e.user?e.user.name:"Loading",e.user?e.user.email:"Loading",e.user?e.user.role:"Loading"];return D="EDIT"===a?U:P,Object(S.jsxs)("div",{className:w.a.box,children:["NONE"===a?Object(S.jsx)("p",{children:Object(S.jsx)(c.b,{name:"user",to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(S.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(S.jsxs)("form",{onSubmit:E,children:[Object(S.jsxs)("span",{label:"name",name:"name",children:["Name: ",D[0]]}),Object(S.jsxs)("span",{children:["Mail: ",D[1]]}),Object(S.jsxs)("span",{className:w.a.roleSelect,children:["Role: ",D[2]]}),"DELETE"===a?Object(S.jsxs)("span",{children:["Are You sure?",Object(S.jsx)("br",{})]}):null,Object(S.jsx)("div",{children:T})]})]})}return Object(S.jsx)("span",{children:"You have no access to this data."})}));var be=Object(P.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),i=Object(u.a)(c,2),l=i[0],j=i[1];if(Object(r.useEffect)((function(){j(!0);k("POST").then((function(e){s(e),j(!1)}))}),[]),"ADMIN"===e.currUser.role&&a){var b=Object(U.a)(a).map((function(e,t){return Object(S.jsx)(je,{setUsers:s,user:a[t]},a[t]._id)}));return Object(S.jsxs)("div",{className:"contentBlock",children:[Object(S.jsx)(D,{}),l?Object(S.jsx)("div",{className:"LoaderWrap",children:Object(S.jsx)(o.a,{})}):Object(S.jsx)("div",{className:w.a.boxGrid,children:b})]})}return Object(S.jsx)("span",{children:"You have no access to this page."})})),de=n(77),Oe=n.n(de),fe=n(158);function he(){return(he=Object(b.a)(j.a.mark((function e(t,n,r){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Register"!==r){e.next=5;break}return e.next=3,f({username:t.email,password:t.password,role:"USER",name:t.name},"POST");case 3:!1===e.sent&&alert("Email already registered");case 5:return e.next=7,d({username:t.email,password:t.password},"POST");case 7:(a=e.sent)[0].token?(n.setToken(a[0]),n.setUserAC({email:t.email,role:a[1],token:a}),x(t.email).then((function(e){n.setProfilesAC(e)}))):alert("Login failed");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me=Object(P.b)((function(e,t){return{setToken:t.setToken}}),{setUserAC:C,setProfilesAC:_})((function(e){var t=Object(r.useState)("Login"),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(S.jsx)(W.b,{className:Oe.a.formikWrap,initialValues:{email:"",password:"",name:""},validate:function(e){return function(e,t){var n={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Invalid email address"):n.email="Required",e.password?/^[A-Z0-9._%+-]{2,}$/i.test(e.password)||(n.password="Invalid password"):n.password="Required",e.name||"Register"!==t?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||"Register"!==t||(n.name="Invalid name"):n.name="Required",n}(e,a)},onSubmit:function(t){return function(e,t,n){return he.apply(this,arguments)}(t,Object($.a)({},e),a)},children:Object(S.jsxs)(W.a,{className:Oe.a.formikForm,children:[Object(S.jsxs)("div",{children:["Email:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{label:"emailF",name:"email",id:"email"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:["Password:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{id:"pass",label:"passF",name:"password"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("label",{children:[Object(S.jsx)(fe.a,{type:"radio","data-testid":"opChanger",onChange:function(e){return s("Register")},checked:"Register"===a,name:"radio",value:"sign up"}),"Sign up"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)(fe.a,{type:"radio",onChange:function(e){return s("Login")},checked:"Login"===a,name:"radio",value:"sign in"}),"Sign in"]})]}),"Register"===a?Object(S.jsxs)("div",{children:["Name:",Object(S.jsx)("br",{}),Object(S.jsx)(K,{name:"name",id:"name",label:"nameF"}),Object(S.jsx)("br",{})]}):null,Object(S.jsxs)(L.a,{"data-testid":"submitter",type:"submit",children:[" ",Object(S.jsx)(Y.a,{}),"  "]})]})})}));var pe=Object(P.b)((function(e){return{state:e}}),{setUserAC:C,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:_})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(r.useState)(e()),n=Object(u.a)(t,2),a=n[0],s=n[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){d({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),n=t.token,a=t.setToken,s=t.clearToken,o=t.renewToken,l=t.getToken;return Object(r.useEffect)((function(){n&&p(l()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(o(t.token,t.email))):s()}))}),[]),n&&n.expiry<(new Date).getTime()&&s(),n?Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsxs)(c.a,{children:[Object(S.jsx)(oe,{currUser:e.state.authData.currUser,clearToken:s}),Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{exact:!0,path:"/",children:Object(S.jsx)(ee,{state:e.state,clearToken:s})}),Object(S.jsx)(i.a,{path:"/dashboard",children:Object(S.jsx)(D,{})}),Object(S.jsx)(i.a,{path:"/control",children:Object(S.jsx)(be,{})}),Object(S.jsx)(i.a,{path:"/userprofiles",children:Object(S.jsx)(te,{})})]})]})}):Object(S.jsx)(me,{setToken:a})})),xe=n(78),ve="SET-USER",ge="SET-TOKEN",Ee={currUser:{email:"testmail"}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object($.a)(Object($.a)({},e),{},{currUser:t.user});case ge:return Object($.a)(Object($.a)({},e),{},{currUser:Object($.a)(Object($.a)({},e.currUser),{},{token:Object($.a)({},t.token)})});default:return e}},Ne="SET-PROFILES",ye="SET-LOADING-TRUE",Te={currProfiles:[],isLoading:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object($.a)(Object($.a)({},e),{},{currProfiles:Object(U.a)(t.profiles),isLoading:!1});case ye:return Object($.a)(Object($.a)({},e),{},{isLoading:!0});default:return e}},De=Object(xe.a)({authData:ke,profileData:Se}),Ue=Object(xe.b)(De);s.a.render(Object(S.jsx)(P.a,{store:Ue,children:Object(S.jsx)(pe,{state:Ue.getState(),dispatch:Ue.dispatch.bind(Ue)})}),document.getElementById("root"))},31:function(e,t,n){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",roleSelect:"UserProfiles_roleSelect__3M-IR"}},57:function(e,t,n){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf",DashBox:"Dashboard_DashBox__3qhns"}},58:function(e,t,n){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},77:function(e,t,n){e.exports={formikWrap:"Login_formikWrap__2zAfX",formikForm:"Login_formikForm__1lWvK"}}},[[118,1,2]]]);
//# sourceMappingURL=main.7cf0c9a8.chunk.js.map