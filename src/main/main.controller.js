angular
  .module('app')
  .controller('MainController', MainController)

MainController.$inject = ['projectsResolve']

function MainController (projectsResolve) {
  var ctrl = this

  ctrl.colors = [
    'pink', 'red', 'purple', 'lighten-2', 'blue', 'indigo', 'orange', 'yellow'
  ]

  ctrl.projects = projectsResolve.project

  console.log('projectsResolve', projectsResolve)
}
