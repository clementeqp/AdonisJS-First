

import Route from '@ioc:Adonis/Core/Route'

/* Route.get('/', async () => {
  return { hello: 'world' }
}) */

/* Route.get('/users', 'UsersController.index');
Route.get('/users/:id', 'UsersController.show'); */


// login and register

Route.get('/', async () => {
  return  'AdonisJS by Clemen\n' +'acceso mediante Postman, Registro: https://adonisjs-crud-clemen.herokuapp.com/api/register\n'
  + 'login, (consigue tu token): https://adonisjs-crud-clemen.herokuapp.com/api/login\n'+'modelos: candidates, users, experiences, skills\n'+
  'para crear una experiencia, metodo POST: https://adonisjs-crud-clemen.herokuapp.com/api/experiences\n'
})

Route.group(() => {
  Route.group(() => {

    Route.resource('/users', 'UsersController').apiOnly();

    Route.resource('/candidates', 'CandidatesController').apiOnly();

    Route.resource('/skills', 'SkillsController').apiOnly();

    Route.resource('/experiences', 'ExperiencesController').apiOnly();

  }).middleware('auth');

  Route.post('/register', 'AuthController.register');
  Route.post('/login', 'AuthController.login');

}).prefix('api');
