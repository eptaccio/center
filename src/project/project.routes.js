angular
  .module('app')
  .config(config)

config.$inject = ['$stateProvider']

function config ($stateProvider) {
  $stateProvider
    .state('project', {
      url: '/project/add',
      controller: 'ProjectCreateController',
      controllerAs: 'ctrl',
      templateUrl: './src/project/project-create.html'
    })
}
