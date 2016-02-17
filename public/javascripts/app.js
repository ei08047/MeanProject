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
            when('/Desporto', {
                templateUrl: '/templates/example.html',
                controller: 'DesportoController'
            }).
            when('/Jogos', {
                templateUrl: 'templates/example.html',
                controller: 'JogosController'
            }).
            when('/Musica', {
                templateUrl: 'templates/example.html',
                controller: 'MusicaController'
            }).
            when('/Filmes', {
                templateUrl: 'templates/example.html',
                controller: 'FilmesController'
            }).
            when('/Series', {
                templateUrl: 'templates/example.html',
                controller: 'SeriesController'
            }).
            when('/Livros', {
                templateUrl: 'templates/example.html',
                controller: 'LivrosController'
            }).
            when('/Fotos', {
                templateUrl: 'templates/display_pics.html',
                controller: 'DisplayPicsController'
            }).
            when('/AddContact', {
                templateUrl: 'templates/add_contact.html',
                controller: 'formCtrl'
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

app.controller('DesportoController', function($scope) {
    $scope.message = 'Desporto';
});

app.controller('JogosController', function($scope) {
    $scope.message = 'Jogos';
});

app.controller('MusicaController', function($scope) {
    $scope.message = 'Musica';
});

app.controller('FilmesController', function($scope) {
    $scope.message = 'Filmes';
});

app.controller('SeriesController', function($scope) {
    $scope.message = 'Series';
});

app.controller('LivrosController', function($scope) {
    $scope.message = 'Livros';
});

app.controller('DisplayPicsController', function($scope) {
    $scope.message = 'Pics';
});

app.controller('formCtrl', function($scope) {
    $scope.master = {firstName:"John", lastName:"Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});




