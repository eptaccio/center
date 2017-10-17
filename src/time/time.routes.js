angular
  .module('app')
  .config(config)

config.$inject = ['$stateProvider']

function config ($stateProvider) {
  $stateProvider
    .state('time', {
      url: '/time',
      controller: 'TimeCreateController',
      controllerAs: 'ctrl',
      templateUrl: './src/time/time-create.html'
    })
}
