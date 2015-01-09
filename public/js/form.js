angular.module('formApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    //nested states
    .state('yourtags', {
      url: '/sign-up',
      templateUrl: '/form/yourtags'
    })

    .state('mytags', {
      templateUrl: '/form/mytags'
    })

    .state('contact', {
      templateUrl: '/form/contact'
    })
    
    $urlRouterProvider.otherwise('/sign-up');
})

.controller('formController', ['$scope', function($scope){
  $scope.formData = {};
  $scope.formData.yourtags = [];
  $scope.formData.mytags = [];
  $scope.formData.contact = {};
  $scope.signUp = function() {

  };
}])