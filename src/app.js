angular
  .module('app', [
    'ui.router',
    'ngMaterial'
  ])
  .config(config)

config.$inject = ['$urlRouterProvider']

function config ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/main')
}
