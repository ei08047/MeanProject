/**
 * Created by José on 11/08/2015.
 */
var app = angular.module('site', []);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/AddNewOrder', {
                templateUrl: '/templates/add_order.html',
                controller: 'AddOrderController'
            }).
            when('/AddContact', {
                templateUrl: 'templates/add_contact.html',
                controller: 'formCtrl'
            }).
            when('/AddCigar',{
                templateUrl: 'templates/cigar_form.html',
                controller : 'form2Ctrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

//controllers


app.controller('siteController', function(){
});

app.controller('menuController', function($scope) {});

app.controller('AddOrderController', function($scope) {

    $scope.message = 'This is Add new order screen';

});

app.controller('formCtrl', function($scope) {
    $scope.master = {firstName:"John", lastName:"Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

app.controller('form2Ctrl', function($scope) {
    $scope.cigar = {type:"JPS", time:"22:30" , day : "17/02"};
});




