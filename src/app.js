angular
  .module('app', [
    'ui.router'
  ])
  .config(config)

config.$inject = ['$urlRouterProvider']

function config ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/main')
}
