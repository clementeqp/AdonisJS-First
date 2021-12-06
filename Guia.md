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




## Deploy
* node ace build --production
    OR use the npm script
* npm run build

* Procfile

    * release: ENV_SILENT=true node ./build/ace migration:run --force
    * web: ENV_SILENT=true node ./build/server.js

Meterle optional los parametros del env.ts host, port, y el drive_disk en variables de configuracion
production



## Database.ts


pg_heroku: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST'),
        port: Env.get('PG_PORT'),
        user: Env.get('PG_USER'),
        password: Env.get('PG_PASSWORD', ''),
        database: Env.get('PG_DB_NAME'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },

