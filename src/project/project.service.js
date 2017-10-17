const storage = require('electron-json-storage')
const uuid = require('uuid/v4')
const PROJECT_KEY = 'PROJECT_STORAGE'

angular
  .module('app')
  .factory('ProjectService', ProjectService)

function ProjectService () {
  var factory = {
    add,
    get
  }
  return factory

  function add (project, done) {
    get((error, data) => {
      if (error) done(error)

      data.project = data.project && data.project.length > 0 ? data.project : []

      data.project.push({
        id: uuid(),
        name: project.name,
        color: project.color
      })

      storage.set(PROJECT_KEY, data, done)
    })
  }

  function get (done) {
    return new Promise((resolve, reject) => {
      storage.get(PROJECT_KEY, (error, data) => {
        if (done) done(error, data)
        if (error) reject(error)
        resolve(data)
      })
    })
  }
}
