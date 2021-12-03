

import Route from '@ioc:Adonis/Core/Route'

/* Route.get('/', async () => {
  return { hello: 'world' }
}) */

/* Route.get('/users', 'UsersController.index');
Route.get('/users/:id', 'UsersController.show'); */

Route.resource('/users', 'UsersController').apiOnly();

Route.resource('/candidates', 'CandidatesController').apiOnly();

Route.resource('/skils', 'SkillsController').apiOnly();

Route.resource('/experience', 'ExperiencesController').apiOnly();


//Route.resource('users.candidates', 'CandidatesController').apiOnly();
