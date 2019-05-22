import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import peopleController from './controllers/peopleController'
import savedController from './controllers/savedController'
import contactController from './controllers/contactController'

crossroads.addRoute('#/', function() {
  $('.main').load('/partials/_home.html', homeController)
})

crossroads.addRoute('#/people', function() {
  $('.main').load('/partials/_people.html', peopleController)
})

crossroads.addRoute('#/saved', function() {
  $('.main').load('/partials/_saved.html', savedController)
})

crossroads.addRoute('#/contact', function() {
  $('.main').load('/partials/_contact.html', contactController)
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)