(function (app) {
    'use strict';

    app.controller('FeedController', function ($scope, SignService, $location, FeedService) {
        // pega o user logado
        $scope.logado = SignService.logado();
        // users
        $scope.usuarios = [];
        // feeds
        $scope.feeds = [];
        // feeds trial
        $scope.feedstrial = [];
        // feeds producao
        $scope.feedsproducao = [];
        // feeds entrega
        $scope.feedsentrega = [];
        // models
        $scope.imagem = '';
        $scope.descricao = '';

        // faz o logout
        $scope.sair = function () {
            SignService.sair().then(function () {
                $location.path('/signin');
            });
        }

        // faz a postagem
        $scope.postar = function () {
            let comments = [];

            // adiciona como primeiro comentario a descricao do feed
            comments.push({
                usuario: $scope.logado,
                dtenvio: new Date(),
                comentario: $scope.descricao
            });

            // alimenta o Feed
            let feed = {
                dtpost: new Date(),
                usuario: $scope.logado,
                imagem: $scope.imagem,
                comentarios: comments,
            }

            FeedService.save(feed).then(function (result) {
                $scope.feeds = result.data;

                // limpa os models para os campos nao ficarem preenchidos permanentemente
                $scope.imagem = '';
                $scope.descricao = '';
            });
        }

        // faz a postagem na aba trial
        $scope.postartrial = function () {
            let comments = [];

            comments.push({
                usuario: $scope.logado,
                dtenvio: new Date(),
                comentario: $scope.descricao
            });

            let feedtrial = {
                dtpost: new Date(),
                usuario: $scope.logado,
                imagem: $scope.imagem,
                comentarios: comments,
            }

            FeedService.savetrial(feedtrial).then(function (result) {
                $scope.feedstrial = result.data;

                $scope.imagem = '';
                $scope.descricao = '';
            });
        }

        // faz a postagem na aba producao
        $scope.postarproducao = function () {
            let comments = [];

            comments.push({
                usuario: $scope.logado,
                dtenvio: new Date(),
                comentario: $scope.descricao
            });

            let feedproducao = {
                dtpost: new Date(),
                usuario: $scope.logado,
                imagem: $scope.imagem,
                comentarios: comments,
            }

            FeedService.saveproducao(feedproducao).then(function (result) {
                $scope.feedsproducao = result.data;

                $scope.imagem = '';
                $scope.descricao = '';
            });
        }

        // faz a postagem na aba entrega
        $scope.postarentrega = function () {
            let comments = [];

            comments.push({
                usuario: $scope.logado,
                dtenvio: new Date(),
                comentario: $scope.descricao
            });

            let feedentrega = {
                dtpost: new Date(),
                usuario: $scope.logado,
                imagem: $scope.imagem,
                comentarios: comments,
            }

            FeedService.saveentrega(feedentrega).then(function (result) {
                $scope.feedsentrega = result.data;

                $scope.imagem = '';
                $scope.descricao = '';
            });
        }

        // carrega os feeds
        FeedService.listar().then(function (result) {
            $scope.feeds = result.data;

        });

        // carrega os feeds da aba trial
        FeedService.listartrial().then(function (result) {
            $scope.feedstrial = result.data;

        });

        // carrega os feeds da aba producao
        FeedService.listarproducao().then(function (result) {
            $scope.feedsproducao = result.data;

        });
        // carrega os feeds da aba entrega
        FeedService.listarentrega().then(function (result) {
            $scope.feedsentrega = result.data;

        });


    });

})(workF);