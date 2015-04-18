import angular from 'angular'
import material from 'angular-material'
import uiRouter from 'angular-ui-router'

import 'angular-material/angular-material.css!'

// Load application component modules
import dashboard from 'components/dashboard/dashboard'

// Bootstrap the application when the application assets are ready.
angular
  .element(document)
  .ready(function() {

    let app = angular.module('githubApp', [material, dashboard, 'ui.router']);

    angular.bootstrap(document.body, [app.name]);

  });
