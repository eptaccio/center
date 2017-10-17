angular
  .module('app')
  .config(config)

config.$inject = ['$stateProvider']

function config ($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      controller: 'MainController',
      controllerAs: 'ctrl',
      templateUrl: './src/main/main.html',
      resolve: {
        projectsResolve: projectsResolve
      }
    })

  projectsResolve.$inject = ['ProjectService']
  function projectsResolve (ProjectService) {
    return ProjectService.get()
  }
}
