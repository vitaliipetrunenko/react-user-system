(this["webpackJsonpreact-user-system"]=this["webpackJsonpreact-user-system"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),s=n.n(a),c=(n(104),n(36)),i=n(14),u=(n(105),n(13)),o=n(8),l=n.n(o),j=n(21);function b(e,t){return d.apply(this,arguments)}function d(){return(d=Object(j.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/register",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return function(e){return h.apply(this,arguments)}(e).then((function(e,t){return!t&&e}))}function m(e){return x.apply(this,arguments)}function x(){return(x=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/profiles",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,e.abrupt("return",fetch("/api/admin",{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n})}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(82),T=n.n(y),N=n(2);function U(){var e=Object(r.useState)({users:0,profiles:0,matureProfiles:0}),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){fetch("/api/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:null}).then((function(e){return e.json()})).then((function(e){a({users:e[0],profiles:e[1],matureProfiles:e[2]})}))}),[]),Object(N.jsxs)("div",{className:T.a.Dashboard,children:[Object(N.jsx)("div",{children:Object(N.jsx)("h2",{children:"Dashboard"})}),Object(N.jsxs)("div",{children:["Users:",Object(N.jsx)("br",{}),Object(N.jsx)("span",{children:n.users})]})," ",Object(N.jsxs)("div",{children:["Profiles:",Object(N.jsx)("br",{})," ",Object(N.jsx)("span",{children:n.profiles})]})," ",Object(N.jsxs)("div",{children:["Profiles over 18:",Object(N.jsx)("br",{})," ",Object(N.jsx)("span",{children:n.matureProfiles})]})]})}var S=n(54),D=n(22),P=function(e){return{type:"SET-USER",user:e}},C=function(e){return{type:"SET-PROFILES",profiles:e}},w=n(31),_=n.n(w),A=n(148),L=n(158),I=n(51),R=n.n(I),H=n(58),B=n.n(H),J=n(52),Z=n.n(J),F=n(59),M=n.n(F);var q=Object(D.b)((function(e,t){return{}}),{setProfilesAC:C})((function(e){var t=Object(r.useState)("NONE"),n=Object(u.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.name),i=Object(u.a)(c,2),o=i[0],b=i[1],d=Object(r.useState)(e.surname),O=Object(u.a)(d,2),f=O[0],h=O[1],p=Object(r.useState)(e.age),x=Object(u.a)(p,2),g=x[0],E=x[1],k=function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=9;break}return t.next=4,v([{name:o,surname:f,age:g,author:e.author},{name:e.name,surname:e.surname,age:e.age,author:e.author}],"PATCH");case 4:!1===t.sent&&alert("duplicate profile"),m(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")})),t.next=15;break;case 9:if("DELETE"!==a){t.next=15;break}return t.next=12,v({name:e.name,surname:e.surname,age:e.age,author:e.author},"DELETE");case 12:!1===t.sent&&alert("profile not deleted"),m(e.currUser).then((function(t){e.setProfilesAC(t),s("NONE")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=[Object(N.jsxs)(A.a,{type:"submit",name:"okay",children:["Okay",Object(N.jsx)(B.a,{})]}),Object(N.jsxs)(A.a,{value:"NONE",onClick:function(e){return s("NONE")},children:["Cancel",Object(N.jsx)(R.a,{})," "]}),null,null],T=[null,null,Object(N.jsxs)(A.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(N.jsx)(Z.a,{})]}),Object(N.jsxs)(A.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(N.jsx)(M.a,{})]})],U=[];U="NONE"===a?T:y;var S=[],D=[Object(N.jsx)(L.a,{value:o,id:"name",name:"name",label:"name",onChange:function(e){return b(e.target.value)}}),Object(N.jsx)(L.a,{value:f,onChange:function(e){return h(e.target.value)}}),Object(N.jsx)(L.a,{type:"number",value:g,onChange:function(e){return E(parseInt(e.target.value))}})],P=[e.name?e.name:"Loading",e.surname?e.surname:"Loading",e.age?e.age:"Loading"];return S="EDIT"===a?D:P,Object(N.jsxs)("div",{className:_.a.box,children:["NONE"===a?Object(N.jsx)("p",{children:Object(N.jsx)("a",{children:Object(N.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(N.jsxs)("form",{onSubmit:k,children:[Object(N.jsxs)("span",{name:"name",label:"name",children:["Name: ",S[0]]}),Object(N.jsxs)("span",{children:["Surname: ",S[1]]}),Object(N.jsxs)("span",{children:["Age: ",S[2]]}),"DELETE"===a?Object(N.jsxs)("span",{children:["Are You sure?",Object(N.jsx)("br",{})]}):null,Object(N.jsx)("div",{children:U})]})]})})),G=n(39),$=n(20);var K=function(e){var t=Object(G.c)(),n=e.name;return console.log(t.errors),Object(N.jsx)(L.a,Object($.a)(Object($.a)({},e),{},{error:!!t.errors[n],value:t.values[n],onInput:t.handleChange,onBlur:t.handleBlur,helperText:t.errors[n],InputLabelProps:{shrink:!1}}))},W=n(154);function Y(e,t,n){return Q.apply(this,arguments)}function Q(){return(Q=Object(j.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("User:",n),e.next=3,v({name:t.name,surname:t.surname,age:t.age,author:n},"PUT");case 3:!1===e.sent&&alert("duplicate profile"),m(n).then((function(e){r(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=Object(D.b)((function(e,t){return{state:e}}),{setProfilesAC:C})((function(e){return Object(N.jsx)(G.b,{initialValues:{name:"",surname:"",age:""},validate:function(e){return function(e,t){var n={};return e.name?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||(n.name="Invalid name"):n.name="Required",e.surname?/^[A-Z0-9._%+-0-9]{2,}$/i.test(e.surname)||(n.surname="Invalid surname"):n.surname="Required",e.age?/^[0-9]{1,}$/i.test(e.age)||(n.age="Invalid age"):n.age="Required",n}(e)},onSubmit:function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Y(n,e.User,e.setProfilesAC));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(N.jsxs)(G.a,{children:[Object(N.jsxs)("div",{children:["Name:",Object(N.jsx)("br",{}),Object(N.jsx)(K,{name:"name"}),Object(N.jsx)("br",{})]}),Object(N.jsxs)("div",{children:["Surname:",Object(N.jsx)("br",{}),Object(N.jsx)(K,{name:"surname"}),Object(N.jsx)("br",{})]}),Object(N.jsxs)("div",{children:["Age:",Object(N.jsx)("br",{}),Object(N.jsx)(K,{type:"number",name:"age"}),Object(N.jsx)("br",{})]}),Object(N.jsxs)(A.a,{type:"submit",children:[" ",Object(N.jsx)(W.a,{}),"  "]})]})})}));var z=Object(D.b)((function(e,t){return{currUser:e.authData.currUser,profileList:e.profileData.currProfiles,isLoadingProfiles:e.profileData.isLoading}}),{setProfilesAC:C,setLoadingTrueAC:function(){return{type:"SET-LOADING-TRUE"}}})((function(e){var t=Object(r.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1],c=e.User?e.User:e.currUser.email;Object(r.useEffect)((function(){e.setLoadingTrueAC(),e.setProfilesAC([]),m(c).then((function(t){console.log("setting from userProfiles"),e.setProfilesAC(t)}))}),[c]);var i=Object(S.a)(e.profileList).map((function(e){return Object(N.jsx)(q,{currUser:c,name:e.name,surname:e.surname,age:e.age,author:e.author},e._id)}));return Object(N.jsxs)("div",{className:"contentBlock",children:[Object(N.jsxs)("div",{className:_.a.Userboard,children:[Object(N.jsxs)("div",{name:"Greeting",children:["Welcome, ",e.currUser.email,"!",Object(N.jsx)("br",{}),"Browsing, ",c," profiles"," "]}),"ADD"===a?Object(N.jsxs)("div",{children:[Object(N.jsx)(V,{User:c}),Object(N.jsx)(A.a,{onClick:function(){s("NONE")},children:Object(N.jsx)(R.a,{})})]}):Object(N.jsxs)(A.a,{id:"ADD",value:"ADD",onClick:function(e){return s("ADD")},children:[" ","Add Profile ",Object(N.jsx)(Z.a,{})]})]}),Object(N.jsx)("div",{className:_.a.boxGrid,children:e.isLoadingProfiles?"Loading":i})]})}));function X(e){return Object(N.jsx)("div",{children:Object(N.jsx)(z,{User:e.state.authData.currUser?e.state.authData.currUser.email:null})})}function ee(e){var t=Object(i.f)();console.log(t);var n=Object(r.useState)(),a=Object(u.a)(n,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){c(t.state.wantedProfile)}),[]),Object(N.jsx)("div",{children:Object(N.jsx)(z,{User:s||null})})}var te=n(155),ne=n(90),re=n.n(ne),ae=n(91),se=n.n(ae),ce=n(57),ie=n.n(ce);function ue(e){return Object(N.jsxs)("div",{className:ie.a.Header,children:[Object(N.jsxs)("div",{className:ie.a.User,children:[Object(N.jsx)("img",{className:"ADMIN"===e.currUser.role?ie.a.adminPhoto:ie.a.userPhoto,alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"}),Object(N.jsx)("p",{children:e.currUser.email})]}),Object(N.jsxs)("div",{className:ie.a.Buttons,children:[Object(N.jsx)(c.b,{to:{pathname:"/",state:{wantedProfile:e.currUser.email}},children:Object(N.jsxs)(A.a,{children:["Home ",Object(N.jsx)(te.a,{})," "]})}),"ADMIN"===e.currUser.role?Object(N.jsx)(c.b,{to:"/control",children:Object(N.jsxs)(A.a,{children:["Users",Object(N.jsx)(re.a,{})]})}):null,Object(N.jsxs)(A.a,{name:"LogOut",onClick:function(){e.clearToken()},children:["Log Out",Object(N.jsx)(se.a,{})]})]})]})}var oe=n(156);var le=Object(D.b)((function(e,t){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)("NONE"),n=Object(u.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(e.user.name),o=Object(u.a)(i,2),b=o[0],d=o[1],O=Object(r.useState)(e.user.email),f=Object(u.a)(O,2),h=f[0],p=f[1],m=Object(r.useState)(e.user.role),x=Object(u.a)(m,2),v=x[0],g=x[1],k=function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"EDIT"!==a){t.next=10;break}return t.next=4,E("PATCH",[{name:b,email:h,role:v},{name:e.user.name,email:e.user.email,role:e.user.role}]);case 4:!1===t.sent&&alert("duplicate user"),E("POST").then((function(t){e.setUsers(t)})),s("NONE"),t.next=16;break;case 10:if("DELETE"!==a){t.next=16;break}return t.next=13,E("DELETE",{name:e.user.name,email:e.user.email,role:e.user.role});case 13:!1===t.sent&&alert("profile not deleted"),E().then((function(t){s("NONE"),e.setUsers(t)}));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if("ADMIN"===e.currUser.role){var y=[Object(N.jsxs)(A.a,{type:"submit",name:"okay",children:["Okay",Object(N.jsx)(B.a,{})]}),Object(N.jsxs)(A.a,{value:"NONE",onClick:function(e){return s("NONE")},children:[" ","Cancel",Object(N.jsx)(R.a,{})]}),null,null],T=[null,null,Object(N.jsxs)(A.a,{value:"EDIT",name:"edit",onClick:function(e){return s("EDIT")},children:["Edit",Object(N.jsx)(Z.a,{})]}),Object(N.jsxs)(A.a,{value:"DELETE",name:"delete",onClick:function(e){return s("DELETE")},children:["Delete",Object(N.jsx)(M.a,{})]})],U=[];U="NONE"===a?T:y;var S=[],D=[Object(N.jsx)(L.a,{value:b,name:"name",id:"name",label:"name",onChange:function(e){return d(e.target.value)}}),Object(N.jsx)(L.a,{value:h,onChange:function(e){return p(e.target.value)}}),Object(N.jsxs)(oe.a,{id:"roles",value:v,onChange:function(e){return g(e.target.value)},name:"roles",children:[Object(N.jsx)("option",{value:"USER",children:"user"}),Object(N.jsx)("option",{value:"ADMIN",children:"admin"})]})],P=[e.user?e.user.name:"Loading",e.user?e.user.email:"Loading",e.user?e.user.role:"Loading"];return S="EDIT"===a?D:P,Object(N.jsxs)("div",{className:_.a.box,children:["NONE"===a?Object(N.jsx)("p",{children:Object(N.jsx)(c.b,{name:"user",to:{pathname:"/userprofiles",state:{wantedProfile:e.user.email}},children:Object(N.jsx)("img",{alt:"",src:"http://mymbs.co.id/public/upload/image/user/user.png"})})}):null,Object(N.jsxs)("form",{onSubmit:k,children:[Object(N.jsxs)("span",{label:"name",name:"name",children:["Name: ",S[0]]}),Object(N.jsxs)("span",{children:["Mail: ",S[1]]}),Object(N.jsxs)("span",{className:_.a.roleSelect,children:["Role: ",S[2]]}),"DELETE"===a?Object(N.jsxs)("span",{children:["Are You sure?",Object(N.jsx)("br",{})]}):null,Object(N.jsx)("div",{children:U})]})]})}return Object(N.jsx)("span",{children:"You have no access to this data."})}));var je=Object(D.b)((function(e){return{currUser:e.authData.currUser}}),{})((function(e){var t=Object(r.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1];if(Object(r.useEffect)((function(){s([]);E("POST").then((function(e){s(e)}))}),[]),"ADMIN"===e.currUser.role&&a){var c=Object(S.a)(a).map((function(e,t){return Object(N.jsx)(le,{setUsers:s,user:a[t]},a[t]._id)}));return Object(N.jsxs)("div",{className:"contentBlock",children:[Object(N.jsx)(U,{}),Object(N.jsx)("div",{className:_.a.boxGrid,children:c})]})}return Object(N.jsx)("span",{children:"You have no access to this page."})})),be=n(76),de=n.n(be),Oe=n(157);function fe(e,t,n){return he.apply(this,arguments)}function he(){return(he=Object(j.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Register"!==r){e.next=5;break}return e.next=3,O({username:t.email,password:t.password,role:"USER",name:t.name},"POST");case 3:!1===e.sent&&alert("Email already registered");case 5:return e.next=7,b({username:t.email,password:t.password},"POST");case 7:(a=e.sent)[0].token?(n.setToken(a[0]),n.setUserAC({email:t.email,role:a[1],token:a}),m(t.email).then((function(e){n.setProfilesAC(e)}))):alert("Login failed");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pe=Object(D.b)((function(e,t){return{setToken:t.setToken}}),{setUserAC:P,setProfilesAC:C})((function(e){var t=Object(r.useState)("Login"),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(N.jsx)(G.b,{className:de.a.formikWrap,initialValues:{email:"",password:"",name:""},validate:function(e){return function(e,t){var n={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Invalid email address"):n.email="Required",e.password?/^[A-Z0-9._%+-]{2,}$/i.test(e.password)||(n.password="Invalid password"):n.password="Required",e.name||"Register"!==t?/^[A-Z0-9._%+-]{2,}$/i.test(e.name)||"Register"!==t||(n.name="Invalid name"):n.name="Required",n}(e,a)},onSubmit:function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fe(n,Object($.a)({},e),a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(N.jsxs)(G.a,{className:de.a.formikForm,children:[Object(N.jsxs)("div",{children:["Email:",Object(N.jsx)("br",{}),Object(N.jsx)(K,{"data-testid":"emailF",name:"email"}),Object(N.jsx)("br",{})]}),Object(N.jsxs)("div",{children:["Password:",Object(N.jsx)("br",{}),Object(N.jsx)(K,{"data-testid":"passF",name:"password"}),Object(N.jsx)("br",{})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("label",{children:[Object(N.jsx)(Oe.a,{type:"radio","data-testid":"opChanger",onChange:function(e){return s("Register")},checked:"Register"===a,name:"radio",value:"sign up"}),"Sign up"]}),Object(N.jsxs)("label",{children:[Object(N.jsx)(Oe.a,{type:"radio",onChange:function(e){return s("Login")},checked:"Login"===a,name:"radio",value:"sign in"}),"Sign in"]})]}),"Register"===a?Object(N.jsxs)("div",{children:["Name:",Object(N.jsx)("br",{}),Object(N.jsx)(K,{name:"name","data-testid":"nameF"}),Object(N.jsx)("br",{})]}):null,Object(N.jsxs)(A.a,{"data-testid":"submitter",type:"submit",children:[" ",Object(N.jsx)(W.a,{}),"  "]})]})})}));var me=Object(D.b)((function(e){return{state:e}}),{setUserAC:P,setTokenAC:function(e){return{type:"SET-TOKEN",token:e}},setProfilesAC:C})((function(e){var t=function(){var e=function(){var e=localStorage.getItem("token");return JSON.parse(e)},t=Object(r.useState)(e()),n=Object(u.a)(t,2),a=n[0],s=n[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),s(e)},clearToken:function(){localStorage.removeItem("token"),s()},renewToken:function(e,t){b({email:t},"PUT").then((function(e){return s(e),localStorage.setItem("token",JSON.stringify(e)),e}))},getToken:e,token:a}}(),n=t.token,a=t.setToken,s=t.clearToken,o=t.renewToken,l=t.getToken;return Object(r.useEffect)((function(){n&&p(l()).then((function(t){t.token?(e.setUserAC(t),e.setTokenAC(o(t.token,t.email))):s()}))}),[]),n&&n.expiry<(new Date).getTime()&&s(),n?Object(N.jsx)("div",{className:"wrapper",children:Object(N.jsxs)(c.a,{children:[Object(N.jsx)(ue,{currUser:e.state.authData.currUser,clearToken:s}),Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{exact:!0,path:"/",children:Object(N.jsx)(X,{state:e.state,clearToken:s})}),Object(N.jsx)(i.a,{path:"/dashboard",children:Object(N.jsx)(U,{})}),Object(N.jsx)(i.a,{path:"/control",children:Object(N.jsx)(je,{})}),Object(N.jsx)(i.a,{path:"/userprofiles",children:Object(N.jsx)(ee,{})})]})]})}):Object(N.jsx)(pe,{setToken:a})})),xe=n(77),ve="SET-USER",ge="SET-TOKEN",Ee={currUser:{email:"testmail"}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object($.a)(Object($.a)({},e),{},{currUser:t.user});case ge:return Object($.a)(Object($.a)({},e),{},{currUser:Object($.a)(Object($.a)({},e.currUser),{},{token:Object($.a)({},t.token)})});default:return e}},ye="SET-PROFILES",Te="SET-LOADING-TRUE",Ne={currProfiles:[],isLoading:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object($.a)(Object($.a)({},e),{},{currProfiles:Object(S.a)(t.profiles),isLoading:!1});case Te:return Object($.a)(Object($.a)({},e),{},{isLoading:!1});default:return e}},Se=Object(xe.a)({authData:ke,profileData:Ue}),De=Object(xe.b)(Se);s.a.render(Object(N.jsx)(D.a,{store:De,children:Object(N.jsx)(me,{state:De.getState(),dispatch:De.dispatch.bind(De)})}),document.getElementById("root"))},31:function(e,t,n){e.exports={Userboard:"UserProfiles_Userboard__2aU5Z",addButton:"UserProfiles_addButton__Kvj31",boxGrid:"UserProfiles_boxGrid__yR2QL",box:"UserProfiles_box__uECKc",roleSelect:"UserProfiles_roleSelect__3M-IR"}},57:function(e,t,n){e.exports={Header:"Header_Header__DlE4a",User:"Header_User__sI2_r",adminPhoto:"Header_adminPhoto__1yISi",userPhoto:"Header_userPhoto__2M3EZ",Buttons:"Header_Buttons__1Oqka"}},76:function(e,t,n){e.exports={formikWrap:"Login_formikWrap__2zAfX",formikForm:"Login_formikForm__1lWvK"}},82:function(e,t,n){e.exports={Dashboard:"Dashboard_Dashboard__3nbQf"}}},[[118,1,2]]]);
//# sourceMappingURL=main.2199818d.chunk.js.map