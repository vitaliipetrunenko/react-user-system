(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{104:function(e,t,r){},105:function(e,t,r){},118:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(10),s=r.n(a),c=(r(104),r(36)),i=r(14),u=(r(105),r(13)),o=r(9),l=r.n(o),j=r(21);function b(e,t){return d.apply(this,arguments)}function d(){return(d=Object(j.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return function(e){return h.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function m(e){return x.apply(this,arguments)}function x(){return(x=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(l.a.mark((function e(t){var r,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:r})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=r(82),N=r.n(y),T=r(2);function U(){var e=Object(n.useState)({users:0,profiles:0,matureProfiles:0}),t=Object(u.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]})}))}),[]),Object(T.jsxs)("div",{className:N.a.Dashboard,children:[Object(T.jsx)("div",{children:Object(T.jsx)("h2",{children:"Dashboard"})}),Object(T.jsxs)("div",{children:["Users:",Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:r.users})]})," ",Object(T.jsxs)("div",{children:["Profiles:",Object(T.jsx)("br",{})," ",Object(T.jsx)("span",{children:r.profiles})]})," ",Object(T.jsxs)("div",{children:["Profiles over 18:",Object(T.jsx)("br",{})," ",Object(T.jsx)("span",{children:r.matureProfiles})]})]})}var S=r(54),D=r(22),P=function(e){return{type:"SET-USER",user:e}},C=function(e){return{type:"SET-PROFILES",profiles:e}},w=r(31),_=r.n(w),A=r(148),L=r(159),I=r(51),R=r.n(I),H=r(58),B=r.n(H),J=r(52),Z=r.n(J),F=r(59),M=r.n(F);var q=Object(D.b)((function(e,t){return{}}),{setProfilesAC:C})((function(e){var t=Object(n.useState)("NONE"),r=Object(u.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)(e.name),i=Object(u.a)(c,2),o=i[0],b=i[1],d=Object(n.useState)(e.surname),O=Object(u.a)(d,2),f=O[0],h=O[1],p=Object(n.useState)(e.age),x=Object(u.a)(p,2),g=x[0],E=x[1],k=function(){var t=Object(j.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,v([{name:o,surname:f,age:g,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),m(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=15;break;case 9:if("DELETE"!==a){t.next=15;break}return t.next=12,v({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),m(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=[Object(T.jsxs)(A.a,{type:"submit",name:"okay",children:["Okay",Object(T.jsx)(B.a,{})]}),Object(T.jsxs)(A.a,{value:"NONE",onClick:function(e){return s("NONE")},children:["Cancel",Object(T.jsx)(R.a,{})," "]}),null,null],N=[null,null,Object(T.jsxs)(A.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(T.jsx)(Z.a,{})]}),Object(T.jsxs)(A.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(T.jsx)(M.a,{})]})],U=[];U="NONE"===a?N:y;var S=[],D=[Object(T.jsx)(L.a,{value:o,id:"name",name:"name",label:"name",onChange:function(e){return b(e.target.value)}}),Object(T.jsx)(L.a,{value:f,onChange:function(e){return h(e.target.value)}}),Object(T.jsx)(L.a,{type:"number",value:g,onChange:function(e){return E(parseInt(e.target.value))}})],P=[e.name?e.name:"Loading",e.surname?e.surname:"Loading",e.age?e.age:"Loading"];return S="EDIT"===a?D:P,Object(T.jsxs)("div",{className:_.a.box,children:["NONE"===a?Object(T.jsx)("p",{children:Object(T.jsx)("a",{children:Object(T.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(T.jsxs)("form",{onSubmit:k,children:[Object(T.jsxs)("span",{name:"name",label:"name",children:["Name: ",S[0]]}),Object(T.jsxs)("span",{children:["Surname: ",S[1]]}),Object(T.jsxs)("span",{children:["Age: ",S[2]]}),"DELETE"===a?Object(T.jsxs)("span",{children:["Are You sure?",Object(T.jsx)("br",{})]}):null,Object(T.jsx)("div",{children:U})]})]})})),G=r(155),W=r(39),$=r(20);var K=function(e){var t=Object(W.c)(),r=e.name;return console.log(t.errors),Object(T.jsx)(L.a,Object($.a)(Object($.a)({},e),{},{error:!!t.errors[r],value:t.values[r],onInput:t.handleChange,onBlur:t.handleBlur,helperText:t.errors[r],InputLabelProps:{shrink:!1}}))},Y=r(154);function Q(e,t,r){return V.apply(this,arguments)}function V(){return(V=Object(j.a)(l.a.mark((function e(t,r,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("User:",r),e.next=3,v({name:t.name,surname:t.surname,age:t.age,author:r},"PUT");case 3:!1===e.sent&&alert("duplicate profile"),m(r).then((function(e){n(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=Object(D.b)((function(e,t){return{state:e}}),{setProfilesAC:C})((function(e){return Object(T.jsx)(W.b,{initialValues:{name:"",surname:"",age:""},validate:function(e){return function(e,t){var r={};return e.name?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||(r.name="Invalid name"):r.name="Required",e.surname?/^[A-Z0-9._%+-0-9]{2,}$/i.test(e.surname)||(r.surname="Invalid surname"):r.surname="Required",e.age?/^[0-9]{1,}$/i.test(e.age)||(r.age="Invalid age"):r.age="Required",r}(e)},onSubmit:function(){var t=Object(j.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Q(r,e.User,e.setProfilesAC));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(T.jsxs)(W.a,{children:[Object(T.jsxs)("div",{children:["Name:",Object(T.jsx)("br",{}),Object(T.jsx)(K,{name:"name"}),Object(T.jsx)("br",{})]}),Object(T.jsxs)("div",{children:["Surname:",Object(T.jsx)("br",{}),Object(T.jsx)(K,{name:"surname"}),Object(T.jsx)("br",{})]}),Object(T.jsxs)("div",{children:["Age:",Object(T.jsx)("br",{}),Object(T.jsx)(K,{type:"number",name:"age"}),Object(T.jsx)("br",{})]}),Object(T.jsxs)(A.a,{type:"submit",children:[" ",Object(T.jsx)(Y.a,{}),"  "]})]})})}));var X=Object(D.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles,isLoadingProfiles:e.profileData.isLoading}}),{setProfilesAC:C,setLoadingTrueAC:function(){return{type:"SET-LOADING-TRUE"}}})((function(e){var t=Object(n.useState)(),r=Object(u.a)(t,2),a=r[0],s=r[1],c=e.User?e.User:e.currUser.email;Object(n.useEffect)((function(){e.setLoadingTrueAC(),e.setProfilesAC([]),m(c).then((function(t){console.log("setting from userProfiles"),e.setProfilesAC(t)}))}),[c]);var i=Object(S.a)(e.profileList).map((function(e){return Object(T.jsx)(q,{currUser:c,name:e.name,surname:e.surname,age:e.age,author:e.author},e._id)}));return Object(T.jsxs)("div",{className:"contentBlock",children:[Object(T.jsxs)("div",{className:_.a.Userboard,children:[Object(T.jsxs)("div",{name:"Greeting",children:["Welcome, ",e.currUser.email,"!",Object(T.jsx)("br",{}),"Browsing, ",c," profiles"," "]}),"ADD"===a?Object(T.jsxs)("div",{children:[Object(T.jsx)(z,{User:c}),Object(T.jsx)(A.a,{onClick:function(){s("NONE")},children:Object(T.jsx)(R.a,{})})]}):Object(T.jsxs)(A.a,{id:"ADD",value:"ADD",onClick:function(e){return s("ADD")},children:[" ","Add Profile ",Object(T.jsx)(Z.a,{})]})]}),e.isLoadingProfiles?Object(T.jsx)("div",{className:"LoaderWrap",children:Object(T.jsx)(G.a,{})}):Object(T.jsxs)("div",{className:_.a.boxGrid,children:[" ",i]})]})}));function ee(e){return Object(T.jsx)("div",{children:Object(T.jsx)(X,{User:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function te(e){var t=Object(i.f)();console.log(t);var r=Object(n.useState)(),a=Object(u.a)(r,2),s=a[0],c=a[1];return Object(n.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(T.jsx)("div",{children:Object(T.jsx)(X,{User:s||null})})}var re=r(156),ne=r(90),ae=r.n(ne),se=r(91),ce=r.n(se),ie=r(57),ue=r.n(ie);function oe(e){return Object(T.jsxs)("div",{className:ue.a.Header,children:[Object(T.jsxs)("div",{className:ue.a.User,children:[Object(T.jsx)("img",{className:"ADMIN"===e.currUser.role?ue.a.adminPhoto:ue.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(T.jsx)("p",{children:e.currUser.email})]}),Object(T.jsxs)("div",{className:ue.a.Buttons,children:[Object(T.jsx)(c.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:Object(T.jsxs)(A.a,{children:["Home ",Object(T.jsx)(re.a,{})," "]})}),"ADMIN"===e.currUser.role?Object(T.jsx)(c.b,{to:"/control",children:Object(T.jsxs)(A.a,{children:["Users",Object(T.jsx)(ae.a,{})]})}):null,Object(T.jsxs)(A.a,{name:"LogOut",onClick:function(){e.clearToken()},children:["Log Out",Object(T.jsx)(ce.a,{})]})]})]})}var le=r(157);var je=Object(D.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(n.useState)("NONE"),r=Object(u.a)(t,2),a=r[0],s=r[1],i=Object(n.useState)(e.user.name),o=Object(u.a)(i,2),b=o[0],d=o[1],O=Object(n.useState)(e.user.email),f=Object(u.a)(O,2),h=f[0],p=f[1],m=Object(n.useState)(e.user.role),x=Object(u.a)(m,2),v=x[0],g=x[1],k=function(){var t=Object(j.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,E("PATCH",[{name:b,email:h,role:v},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),E("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=16;break;case 10:if("DELETE"!==a){t.next=16;break}return t.next=13,E("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),E().then((function(t){s("NONE"),e.setUsers(t)}));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if("ADMIN"===e.currUser.role){var y=[Object(T.jsxs)(A.a,{type:"submit",name:"okay",children:["Okay",Object(T.jsx)(B.a,{})]}),Object(T.jsxs)(A.a,{value:"NONE",onClick:function(e){return s("NONE")},children:[" ","Cancel",Object(T.jsx)(R.a,{})]}),null,null],N=[null,null,Object(T.jsxs)(A.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(T.jsx)(Z.a,{})]}),Object(T.jsxs)(A.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(T.jsx)(M.a,{})]})],U=[];U="NONE"===a?N:y;var S=[],D=[Object(T.jsx)(L.a,{value:b,name:"name",id:"name",label:"name",onChange:function(e){return d(e.target.value)}}),Object(T.jsx)(L.a,{value:h,onChange:function(e){return p(e.target.value)}}),Object(T.jsxs)(le.a,{id:"roles",value:v,onChange:function(e){return g(e.target.value)},name:"roles",children:[Object(T.jsx)("option",{value:"USER",children:"user"}),Object(T.jsx)("option",{value:"ADMIN",children:"admin"})]})],P=[e.user?e.user.name:"Loading",e.user?e.user.email:"Loading",e.user?e.user.role:"Loading"];return S="EDIT"===a?D:P,Object(T.jsxs)("div",{className:_.a.box,children:["NONE"===a?Object(T.jsx)("p",{children:Object(T.jsx)(c.b,{name:"user",to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(T.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(T.jsxs)("form",{onSubmit:k,children:[Object(T.jsxs)("span",{label:"name",name:"name",children:["Name: ",S[0]]}),Object(T.jsxs)("span",{children:["Mail: ",S[1]]}),Object(T.jsxs)("span",{className:_.a.roleSelect,children:["Role: ",S[2]]}),"DELETE"===a?Object(T.jsxs)("span",{children:["Are You sure?",Object(T.jsx)("br",{})]}):null,Object(T.jsx)("div",{children:U})]})]})}return Object(T.jsx)("span",{children:"You have no access to this data."})}));var be=Object(D.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(n.useState)(),r=Object(u.a)(t,2),a=r[0],s=r[1];if(Object(n.useEffect)((function(){s([]);E("POST").then((function(e){s(e)}))}),[]),"ADMIN"===e.currUser.role&&a){var c=Object(S.a)(a).map((function(e,t){return Object(T.jsx)(je,{setUsers:s,user:a[t]},a[t]._id)}));return Object(T.jsxs)("div",{className:"contentBlock",children:[Object(T.jsx)(U,{}),Object(T.jsx)("div",{className:_.a.boxGrid,children:c})]})}return Object(T.jsx)("span",{children:"You have no access to this page."})})),de=r(76),Oe=r.n(de),fe=r(158);function he(e,t,r){return pe.apply(this,arguments)}function pe(){return(pe=Object(j.a)(l.a.mark((function e(t,r,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Register"!==n){e.next=5;break}return e.next=3,O({username:t.email,password:t.password,role:"USER",name:t.name},"POST");case 3:!1===e.sent&&alert("Email already registered");case 5:return e.next=7,b({username:t.email,password:t.password},"POST");case 7:(a=e.sent)[0].token?(r.setToken(a[0]),r.setUserAC({email:t.email,role:a[1],token:a}),m(t.email).then((function(e){r.setProfilesAC(e)}))):alert("Login failed");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me=Object(D.b)((function(e,t){return{setToken:t.setToken}}),{setUserAC:P,setProfilesAC:C})((function(e){var t=Object(n.useState)("Login"),r=Object(u.a)(t,2),a=r[0],s=r[1];return Object(T.jsx)(W.b,{className:Oe.a.formikWrap,initialValues:{email:"",password:"",name:""},validate:function(e){return function(e,t){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(r.email="Invalid email address"):r.email="Required",e.password?/^[A-Z0-9._%+-]{2,}$/i.test(e.password)||(r.password="Invalid password"):r.password="Required",e.name||"Register"!==t?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||"Register"!==t||(r.name="Invalid name"):r.name="Required",r}(e,a)},onSubmit:function(){var t=Object(j.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",he(r,Object($.a)({},e),a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(T.jsxs)(W.a,{className:Oe.a.formikForm,children:[Object(T.jsxs)("div",{children:["Email:",Object(T.jsx)("br",{}),Object(T.jsx)(K,{"data-testid":"emailF",name:"email"}),Object(T.jsx)("br",{})]}),Object(T.jsxs)("div",{children:["Password:",Object(T.jsx)("br",{}),Object(T.jsx)(K,{"data-testid":"passF",name:"password"}),Object(T.jsx)("br",{})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("label",{children:[Object(T.jsx)(fe.a,{type:"radio","data-testid":"opChanger",onChange:function(e){return s("Register")},checked:"Register"===a,name:"radio",value:"sign up"}),"Sign up"]}),Object(T.jsxs)("label",{children:[Object(T.jsx)(fe.a,{type:"radio",onChange:function(e){return s("Login")},checked:"Login"===a,name:"radio",value:"sign in"}),"Sign in"]})]}),"Register"===a?Object(T.jsxs)("div",{children:["Name:",Object(T.jsx)("br",{}),Object(T.jsx)(K,{name:"name","data-testid":"nameF"}),Object(T.jsx)("br",{})]}):null,Object(T.jsxs)(A.a,{"data-testid":"submitter",type:"submit",children:[" ",Object(T.jsx)(Y.a,{}),"  "]})]})})}));var xe=Object(D.b)((function(e){return{state:e}}),{setUserAC:P,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:C})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(n.useState)(e()),r=Object(u.a)(t,2),a=r[0],s=r[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){b({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),r=t.token,a=t.setToken,s=t.clearToken,o=t.renewToken,l=t.getToken;return Object(n.useEffect)((function(){r&&p(l()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(o(t.token,t.email))):s()}))}),[]),r&&r.expiry<(new Date).getTime()&&s(),r?Object(T.jsx)("div",{className:"wrapper",children:Object(T.jsxs)(c.a,{children:[Object(T.jsx)(oe,{currUser:e.state.authData.currUser,clearToken:s}),Object(T.jsxs)(i.c,{children:[Object(T.jsx)(i.a,{exact:!0,path:"/",children:Object(T.jsx)(ee,{state:e.state,clearToken:s})}),Object(T.jsx)(i.a,{path:"/dashboard",children:Object(T.jsx)(U,{})}),Object(T.jsx)(i.a,{path:"/control",children:Object(T.jsx)(be,{})}),Object(T.jsx)(i.a,{path:"/userprofiles",children:Object(T.jsx)(te,{})})]})]})}):Object(T.jsx)(me,{setToken:a})})),ve=r(77),ge="SET-USER",Ee="SET-TOKEN",ke={currUser:{email:"testmail"}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object($.a)(Object($.a)({},e),{},{currUser:t.user});case Ee:return Object($.a)(Object($.a)({},e),{},{currUser:Object($.a)(Object($.a)({},e.currUser),{},{token:Object($.a)({},t.token)})});default:return e}},Ne="SET-PROFILES",Te="SET-LOADING-TRUE",Ue={currProfiles:[],isLoading:!0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object($.a)(Object($.a)({},e),{},{currProfiles:Object(S.a)(t.profiles),isLoading:!0});case Te:return Object($.a)(Object($.a)({},e),{},{isLoading:!0});default:return e}},De=Object(ve.a)({authData:ye,profileData:Se}),Pe=Object(ve.b)(De);s.a.render(Object(T.jsx)(D.a,{store:Pe,children:Object(T.jsx)(xe,{state:Pe.getState(),dispatch:Pe.dispatch.bind(Pe)})}),document.getElementById("root"))},31:function(e,t,r){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",roleSelect:"UserProfiles_roleSelect__3M-IR"}},57:function(e,t,r){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},76:function(e,t,r){e.exports={formikWrap:"Login_formikWrap__2zAfX",formikForm:"Login_formikForm__1lWvK"}},82:function(e,t,r){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}}},[[118,1,2]]]);
//# sourceMappingURL=main.a5872a48.chunk.js.map