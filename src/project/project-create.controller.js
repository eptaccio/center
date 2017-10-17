angular
  .module('app')
  .controller('ProjectCreateController', ProjectCreateController)

ProjectCreateController.$inject = ['ProjectService', '$state']

function ProjectCreateController (ProjectService, $state) {
  var ctrl = this

  ctrl.project = {
    color: '#1028ba'
  }

  ctrl.save = save

  function save (project) {
    ProjectService.add(project, (erro) => {
      $state.go('main')
    })
  }
}
