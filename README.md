# react-user-system

Docs

Project is split into 2 directories:\
- Client (Front-end source and unit tests)\
&nbsp;&nbsp;&nbsp;&nbsp;        |- After making changes, project should be compiled with "npm run buildcopy"(works on WIN), to compile it on other systems,\
&nbsp;&nbsp;&nbsp;&nbsp;        |  build it and manualy transfer build folder to API project directory.\
&nbsp;&nbsp;&nbsp;&nbsp;        |- Tests cover about 85%, ran by "npm run test"\
&nbsp;&nbsp;&nbsp;&nbsp;        |- Powered by Redux, but most of the logic is managed by local states\

- API (Front-end build, routing, api, e2e tests)\
&nbsp;&nbsp;&nbsp;&nbsp;        |- Back-end is powered by express, MongoDB Atlas is used as a db.\
&nbsp;&nbsp;&nbsp;&nbsp;        |- E2e tests (powered by puppeteer) are ran by "npm run test"\
&nbsp;&nbsp;&nbsp;&nbsp;        |- Rest-API was 'kinda' used\
&nbsp;&nbsp;&nbsp;&nbsp;        | (I reserved all get requests for rendering, otherwise API endpoints have different operations depending on method)\

Docker:

- In the beginning, docker-compose was used, but now project is ran as a single image of API project
- Lightweight alpine-node is used\

Heroku:

- At first app was published through container registry, but now it simply runs as API directory repository
- Link "https://reactserver0608.herokuapp.com/" (may be outdated a bit)

Design:

- Used heavily material-UI 
- Most forms are created with Formik
- I know it's ugly.

Entities:

- User:\
{\
&nbsp;&nbsp;&nbsp;&nbsp;email: string\
&nbsp;&nbsp;&nbsp;&nbsp;password: string\
&nbsp;&nbsp;&nbsp;&nbsp;name: string\
&nbsp;&nbsp;&nbsp;&nbsp;token:{\
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;token: string\
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expiry: number\
	&nbsp;&nbsp;&nbsp;&nbsp;}\
 }
 
- Profile:\
{\
&nbsp;&nbsp;&nbsp;&nbsp;name: string\
&nbsp;&nbsp;&nbsp;&nbsp;surname: string\
&nbsp;&nbsp;&nbsp;&nbsp;age: number\
&nbsp;&nbsp;&nbsp;&nbsp;author: string\
 }	

