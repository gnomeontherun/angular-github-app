import angular from 'angular'

// Bootstrap the application when the application assets are ready.
angular
  .element(document)
  .ready(function() {

    let app = angular.module('githubApp', []);

    angular.bootstrap(document.body, [app.name]);

  });
