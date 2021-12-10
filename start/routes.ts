

import Route from '@ioc:Adonis/Core/Route';


/* Route.get('/', async () => {
  return { hello: 'world' }
}) */

/* Route.get('/users', 'UsersController.index');
Route.get('/users/:id', 'UsersController.show'); */




Route.get('/', async () => {
  return 'Hello everyone!\n'
          +'_______________\n\n'
          +'AdonisJS by Clemen\n\n'
          +'Acceso mediante Postman, Registro: https://adonisjs-crud-clemen.herokuapp.com/api/v1/register\n\n'
          +'login, (consigue tu token): https://adonisjs-crud-clemen.herokuapp.com/api/v1/login\n\n'
          +'Modelos: candidates, users, experiences, skills\n\n'
          +'Metodos: Post, Get, Put, Delete (Crear, Mostrar,Actualizar,Borrar)\n\n'
          +'Primero registrate, luego haz login, luego usa el token para acceder a los metodos\n\n'
          +'Ejemplo de uso: https://adonisjs-crud-clemen.herokuapp.com/api/v1/candidates/1\n\n'

});





Route.group(() => {
  Route.group(() => {

    // Rutas CRUD

    Route.resource('/users', 'UsersController').apiOnly();

    Route.resource('/candidates', 'CandidatesController').apiOnly();

    Route.resource('/skills', 'SkillsController').apiOnly();

    Route.resource('/experiences', 'ExperiencesController').apiOnly();


    Route.get('/candidates/:name/:level', 'CandidatesController.findBySkillsAndExperiences');

    Route.get('/candidatesfull', 'CandidatesController.findCandidatesWithSkillsAndExperiences');

    Route.get('/candidatesfull/:id', 'CandidatesController.findCandidateWithSkillsAndExperiences');

    Route.post('logout', 'AuthController.logout')

  }).middleware('auth');

  // login and register
  Route.post('/register', 'AuthController.register');
  Route.post('/login', 'AuthController.login');

}).prefix('api/v1');
