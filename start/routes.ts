

import Route from '@ioc:Adonis/Core/Route';


/* Route.get('/', async () => {
  return { hello: 'world' }
}) */

/* Route.get('/users', 'UsersController.index');
Route.get('/users/:id', 'UsersController.show'); */




Route.get('/', async () => {
  return  'AdonisJS by Clemen\n' +'Acceso mediante Postman, Registro: https://adonisjs-crud-clemen.herokuapp.com/api/v1/register\n'
  + 'login, (consigue tu token): https://adonisjs-crud-clemen.herokuapp.com/api/v1/login\n'+'Modelos: candidates, users, experiences, skills\n'+
  'Metodos: Post, Get, Put, Delete (Crear, Mostrar,Actualizar,Borrar)\n'+'Ejemplo de uso: https://adonisjs-crud-clemen.herokuapp.com/api/candidates/1\n'

});



Route.group(() => {
  Route.group(() => {

    // Rutas CRUD

    Route.resource('/users', 'UsersController').apiOnly();

    Route.resource('/candidates', 'CandidatesController').apiOnly();

    Route.resource('/skills', 'SkillsController').apiOnly();

    Route.resource('/experiences', 'ExperiencesController').apiOnly();

  }).middleware('auth');

  // login and register
  Route.post('/register', 'AuthController.register');
  Route.post('/login', 'AuthController.login');

}).prefix('api');
