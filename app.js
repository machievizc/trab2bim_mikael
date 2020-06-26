const workF = angular.module('workF', ['ngStorage', 'ngRoute']);

//Configuração das rotas
workF.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/template/main.html',
            controller: 'SignController'
        })
        .when('/table', {
            templateUrl: 'app/template/table.html',
            controller: 'FeedController',
        })
        .when('/signin', {
            templateUrl: 'app/template/signin.html',
            controller: 'SignController'
        })
        .when('/signup', {
            templateUrl: 'app/template/signup.html',
            controller: 'SignController'
        })
        .otherwise({ redirectTo: '/main.html' });

});

//Define que acontecerá na execução da aplicação
workF.run(function ($rootScope, $location, $sessionStorage) {

    $rootScope.$on('$locationChangeStart', function () {

        if ($location.path().indexOf('sign') < 0) {
            //Verifica se o usuário entrou
            if (!$sessionStorage.logado) {
                $location.path('/');
            }
        }
    });

});