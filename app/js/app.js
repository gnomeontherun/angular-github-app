import angular from 'angular'
import material from 'angular-material'

import 'angular-material/angular-material.css!'

// Bootstrap the application when the application assets are ready.
angular
  .element(document)
  .ready(function() {

    let app = angular.module('githubApp', [material]);

    angular.bootstrap(document.body, [app.name]);

  });
