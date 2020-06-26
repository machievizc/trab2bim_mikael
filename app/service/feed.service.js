(function( app ){
    'use strict';

    app.service('FeedService', function( $q, $localStorage ) {
        const deferred = $q.defer();
        const deferredtrial = $q.defer();
        const deferredproducao = $q.defer();
        const deferredentrega = $q.defer();

        function loadJSON() { 
            deferred.resolve({data: $localStorage.feeds || []});
            return deferred.promise;
        }
        function loadJSONTrial() { 
            deferredtrial.resolve({data: $localStorage.feedstrial || []});
            return deferredtrial.promise;
        }
        function loadJSONProducao() { 
            deferredproducao.resolve({data: $localStorage.feedsproducao || []});
            return deferredproducao.promise;
        }
        function loadJSONEntrega() { 
            deferredentrega.resolve({data: $localStorage.feedsentrega || []});
            return deferredentrega.promise;
        }

        // salva feed
        function save( feed ) { 
            var dados = $localStorage.feeds || [];

            //v erifica se existe um ID, se nao existir, deve adicionar o vetor
            if (!feed.id) {
                var ultimo = dados[dados.length-1];

                //Adiciona um ID ao feed
                feed.id = ultimo ? ultimo.id+1 : 1;
                dados.push( feed )
            }

            // atualiza o valor da storage
            $localStorage.feeds = dados;

            deferred.resolve({data: dados});

            return deferred.promise;
        }

        // salva em trial
        function savetrial( feedtrial ) { 
            var dados = $localStorage.feedstrial || [];

            if (!feedtrial.id) {
                var ultimo = dados[dados.length-1];

                feedtrial.id = ultimo ? ultimo.id+1 : 1;
                dados.push( feedtrial )
            }

            $localStorage.feedstrial = dados;

            deferredtrial.resolve({data: dados});

            return deferredtrial.promise;
        }

        // salva em producao
        function saveproducao( feedproducao ) { 
            var dados = $localStorage.feedsproducao || [];

            if (!feedproducao.id) {
                var ultimo = dados[dados.length-1];

                feedproducao.id = ultimo ? ultimo.id+1 : 1;
                dados.push( feedproducao )
            }

            $localStorage.feedsproducao = dados;

            deferredproducao.resolve({data: dados});

            return deferredproducao.promise;
        }
        
        // salva em entrega
        function saveentrega( feedentrega ) { 
            var dados = $localStorage.feedsentrega || [];

            if (!feedentrega.id) {
                var ultimo = dados[dados.length-1];

                feedentrega.id = ultimo ? ultimo.id+1 : 1;
                dados.push( feedentrega )
            }

            $localStorage.feedsentrega = dados;

            deferredentrega.resolve({data: dados});

            return deferredentrega.promise;
        }
        
        function remove( feed ) {
            var dados = $localStorage.feeds

            var index = dados.indexOf(feed);
            dados.splice(index, 1);

            // atualiza o valor da storage
            $localStorage.feeds = dados;

            deferred.resolve(dados);

            return deferred.promise;
        }

        function deletar( feed ){

        }
        
        return {
            listar: loadJSON,
            listartrial: loadJSONTrial,
            listarproducao: loadJSONProducao,
            listarentrega: loadJSONEntrega,
            save: save,
            savetrial: savetrial,
            saveproducao: saveproducao,
            saveentrega: saveentrega,
            remove: remove,
            deletar: deletar,
        }

    });

})( workF );