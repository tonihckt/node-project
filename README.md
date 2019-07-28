# Curso básico de Node.js

npm run start
http://localhost:5785

hacer peticiones con
 curl http://localhost:5785/route

* **USE MONGO **
* mongod (Start mongod server)
* mongo (Start mongo shell)
  
///
npm run fill-db  -- ( llena la base de datos)
npm run clear-db -- (limpia la base de datos)

///

* show databases |o| show dbs
* use db_name => usar la db que se espacifica con el nombre
* create database mydb
* show collections => muestra las tablas
  * db.users.find({}) 
  * db.users.find({}).count() => muestra el numero de registros
  * db.users.find({}).pretty() => muestra los datos 
  * db.movie.insert({"name":"tutorials point"})