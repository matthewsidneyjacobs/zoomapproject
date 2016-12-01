angular.module('zoomap',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('','/')
    .otherwise('/error')

    $stateProvider
      .state('home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        url: '/'
      })
      .state('map',{
        templateUrl:'views/map.html',
        controller: 'mapCtrl',
        url: '/map'
      })
      .state('animal_info', {
        templateUrl: 'views/animal_info.html',
        controller: 'animal_infoCtrl',
        url: '/animal_info'
      })








})
