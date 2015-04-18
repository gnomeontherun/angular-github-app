import dashboardController from 'components/dashboard/controller'

let dashboard = angular
  .module('dashboard', ['ui.router'])
  .config($stateProvider => {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      controller: 'dashboardController',
      templateUrl: 'components/dashboard/dashboard.html'
    })
  })
  .controller('dashboardController', dashboardController);

export default dashboard.name;
