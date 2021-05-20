# react-user-system

Docs

Project is split into 2 directories:\
-Client (Front-end source and unit tests)\
&nbsp;&nbsp;&nbsp;&nbsp;        |- After making changes, project should be compiled with "npm run buildcopy"(works on WIN), to compile it on other systems,\
&nbsp;&nbsp;&nbsp;&nbsp;        |  build it and manualy transfer build folder to API project directory.\
&nbsp;&nbsp;&nbsp;&nbsp;        |- Tests cover about 85%, ran by "npm run test"\
  
 -API (Front-end build, routing, api, e2e tests)\
&nbsp;&nbsp;&nbsp;&nbsp;        |- Back-end is powered by express, MongoDB Atlas is used as a db.\
&nbsp;&nbsp;&nbsp;&nbsp;        |- E2e tests (powered by puppeteer) are ran by "npm run test"
	
Entities:

-User:\
{\
&nbsp;&nbsp;&nbsp;&nbsp;email: string\
&nbsp;&nbsp;&nbsp;&nbsp;password: string\
&nbsp;&nbsp;&nbsp;&nbsp;name: string\
&nbsp;&nbsp;&nbsp;&nbsp;token:{\
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;token: string\
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expiry: number\
	}\
 }\
 
 -Profile:\
{\
&nbsp;&nbsp;&nbsp;&nbsp;name: string\
&nbsp;&nbsp;&nbsp;&nbsp;surname: string\
&nbsp;&nbsp;&nbsp;&nbsp;age: number\
&nbsp;&nbsp;&nbsp;&nbsp;author: string\
 }\	
