## Angular 9 Frontent with SpringBoot (Java) Backend
Application to demonstrate various parts of a service oriented RESTfull application. 


### Technology Stack
Component         | Technology
---               | ---
Frontend          | [Angular 9](https://github.com/angular/angular)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security and [JWT](https://github.com/auth0/java-jwt) )
REST Documentation| [Swagger UI / Springfox](https://github.com/springfox/springfox) and [ReDoc](https://github.com/Rebilly/ReDoc)
REST Spec         | [Open API Standard](https://www.openapis.org/) 
Persistence       | JPA (Using Spring Data)
Client Build Tools| [angular-cli](https://github.com/angular/angular-cli), Webpack, npm
Server Build Tools| Maven(Java) or Gradle

## Folder Structure
```bash
PROJECT_FOLDER
│  README.md
│  pom.xml           
│  build.gradle
└──[src]      
│  └──[main]      
│     └──[java]      
│     └──[resources]
│        │  application.properties #contains springboot cofigurations
│        │  schema.sql  # Contains DB Script to create tables that executes during the App Startup          
│        │  data.sql    # Contains DB Script to Insert data that executes during the App Startup (after schema.sql)
│        └──[public]    # keep all html,css etc, resources that needs to be exposed to user without security
│
└──[target]              #Java build files, auto-created after running java build: mvn install
│  └──[classes]
│     └──[public]
│     └──[webui]         #webui folder is created by (maven/gradle) which copies webui/dist folder 
│                        #the application.properties file list webui as a resource folder that means files can be accesses http://localhost/<files_inside_webui> 
│
└──[webui]
   │  package.json     
   │  angular-cli.json   #ng build configurations)
   └──[node_modules]
   └──[src]              #frontend source files
   └──[dist]             #frontend build files, auto-created after running angular build: ng -build
```

## Prerequisites
Ensure you have this installed before proceeding further
- Java 8
- Maven 3.3.9+ or Gradle 3.3+
- Node 6.0 or above,  
- npm 5 or above,   
- Angular-cli 1.6.3

## About
This is an RESTfull implementation of an order processing app based on Northwind database schema from Microsoft.
The goal of the project is to 
- Highlight techniques of making and securing a REST full app using [SpringBoot](https://projects.spring.io/spring-boot)
- How to consume an RESTfull service and make an HTML5 based Single Page App using [Angular 4+](https://github.com/angular/angular)

### Features of the Project
* Backend
  * Token Based Security (using Spring security)
  * API documentation and Live Try-out links with Swagger 
  * DB MySql, refer folder Db_backup folder for Sql export script
  * Using JPA and JDBC template to talk to relational database
  * How to request and respond for paginated data 

* Frontend
  * Organizing Components, Services, Directives, Pages etc in an Angular App
  * How to chain RxJS Observables (by making sequntial AJAX request- its different that how you do with promises)
  * Techniques to Lazy load Data (Infinite Scroll)
  * Techniques to load large data set in a data-table but still keeping DOM footprint less
  * Routing and guarding pages that needs authentication
  * Basic visulaization

* Build
  * How to build all in one app that includes (database, sample data, RESTfull API, Auto generated API Docs, frontend and security)
  * Portable app, Ideal for dockers, cloud hosting.

## Spring security
Security is **enabled** by default, to disable, you must comment [this line](./src/main/java/com/app/config/SecurityConfig.java#L15) in `src/main/java/com/config/SecurityConfig.java`<br/>
When security is enabled, none of the REST API will be accessesble directly.

To test security access `http://localhost:9119/version` API and you should get a forbidden/Access denied error. 
In order to access these secured API you must first obtain a token. Tokens can be obtained by passing a valid userid/password

<br/>

To get a token call `POST /session` API with a valid userid and password.
for example you may you can use the folliwing curl command to get a token 
```
curl -X POST --header 'Content-Type: application/json' -d '{ "username":"demo", "password":"demo" }' 'http://localhost:9119/session'
```
the above curl command will return you a token, which should be in the format of `xxx.xxx.xxx`. This is a JSON web token format. 
You can decode and validate this token at [jwt.io wesite](https://jwt.io/). Just paste the token there and decode the information.
to validate the token you should provide the secret key which is `mrin` that i am using in this app.
<br/>
after receiving this token you must provide the token in the request-header of every API request. For instance try the `GET /version` api using the below 
curl command (replace xxx.xxx.xxx with the token that you received in above command) and you should be able to access the API.
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: xxx.xxx.xxx' 'http://localhost:9119/version'
``` 

### Build Frontend (optional step)
Code for frontend is allready compiled and saved under the ```webui/dist``` 
when building the backend app (using maven) it will pickup the code from ```webui/dist```. However if you modified the frontend code and want your changes to get reflected then you must build the frontend 
```bash
# Navigate to PROJECT_FOLDER/webui (should contain package.json )
npm install
# build the project (this will put the files under dist folder)
ng build --prod --aot=true
```

### Build Backend (SpringBoot Java)
```bash
# Maven Build : Navigate to the root folder where pom.xml is present 
mvn clean install

#OR

# Gradle Build : Navigate to the root folder where build.gradle is present 
gradle build
```

### Start the API and WebUI server
```bash
# Start the server (9119)
# port and other configurations for API servere is in [./src/main/resources/application.properties](/src/main/resources/application.properties) file

# If you build with maven jar location will be 
java -jar ./target/app-1.0.0.jar

# If you build with gradle jar location will be 
java -jar ./build/libs/app-1.0.0.jar
```

### Accessing Application
Cpmponent         | URL                                      | Credentials
---               | ---                                      | ---
Frontend          |  http://localhost:9119                   | `demo/demo`
Swagger (API Ref) |  http://localhost:9119/swagger-ui.html   | 
Redoc (API Ref)   |  http://localhost:9119/redoc/index.html  |
Swagger Spec      |  http://localhost:9119/api-docs          |


**To get an authentication token** 
```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username": "demo", "password": "demo" }' 'http://localhost:9119/session'
```
or POST the username and password to http://localhost:9119/session

after you get the authentication token you must provide this in the header for all the protected urls 

```bash
curl -X GET --header 'Accept: application/json' --header 'Authorization: [replace this with token ]' 'http://localhost:9119/version'
```


**To get an authentication token** 

**Task to complete****
1. Run Angular Project. You will get this url for front end access http://localhost:4200/
2. Run spring boot Apllication which will run on port 9119 (http://localhost:9119/) to acess APIS.
3. Login using username and password refer database table user to get username and password or used      this (Username: admin@gmail.com, Password: admin).
4. After login you will land on dashboad having menus option on left side.
5. Click on technology stack menu.You will redirct to grid view.
6. click on add button on grid view page.
7. You will see entry form. Where we have to fill this form and upload a file.
8. while submitting this form we are getting error in controller.(Refer error in point 9).
9. com.fasterxml.jackson.databind.exc.InvalidDefinitionException: 
	No serializer found for class java.io.FileDescriptor and no 
	properties discovered to create BeanSerializer (to avoid exception, 
	disable SerializationFeature.FAIL_ON_EMPTY_BEANS) (through reference 
	chain: org.springframework.web.multipart.support.
	StandardMultipartHttpServletRequest$StandardMultipartFile[1]->
	org.springframework.web.multipart.support.
	StandardMultipartHttpServletRequest$StandardMultipartFile
	["inputStream"]->java.io.FileInputStream["fd"]).
10. you need to solve this error.
11. We have used MultipartFile to upload a file.


