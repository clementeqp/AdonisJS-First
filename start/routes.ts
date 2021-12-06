

import Route from '@ioc:Adonis/Core/Route'

/* Route.get('/', async () => {
  return { hello: 'world' }
}) */

/* Route.get('/users', 'UsersController.index');
Route.get('/users/:id', 'UsersController.show'); */


// login and register

Route.get('/', async () => {
  return  'AdonisJS by Clemen\n' + '../api/register\n' + '../api/login\n' + 'for get the token use the header Authorization: Bearer {token}'
})

Route.group(() => {
  Route.group(() => {

    Route.resource('/users', 'UsersController').apiOnly();

    Route.resource('/candidates', 'CandidatesController').apiOnly();

    Route.resource('/skils', 'SkillsController').apiOnly();

    Route.resource('/experience', 'ExperiencesController').apiOnly();

  }).middleware('auth');

  Route.post('/register', 'AuthController.register');
  Route.post('/login', 'AuthController.login');

}).prefix('api');
