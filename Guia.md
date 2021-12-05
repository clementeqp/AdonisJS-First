## Api con AdonisJs 5

* npm init adonis-ts-app@latest adonis-clemen
* cd adonis-clemen
* node ace serve --watch

* https://docs.adonisjs.com/guides/models/introduction#creating-your-first-model


## Instalamos lucid

* npm i @adonisjs/lucid
* node ace configure @adonisjs/lucid

## Driver de la BD
* npm i pg

## Creando los modelos

* node ace make: model User -mc
  Crea el modelo User, la migracion y el controlador.

  Creamos los campos de cada modelo.
  en el modelo y en la migracion

* node ace make:validator CreateUser
  Crea el validador de la creacion



* node ace migration:run
  Ejecutamos la migracion(Deben estar en el orden correcto segun las relaciones para ejecutar la migracion)

* node ace migration:rollback
  Deshacer migracion
  
## Routes
* node ace list:routes



## Autenticacion

* npm i @adonisjs/auth
* node ace configure @adonisjs/auth


## Usar Hash en el password

* npm i phc-argon2

