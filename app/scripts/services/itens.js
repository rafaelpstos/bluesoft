'use strict';

/**
 * @ngdoc service
 * @name bluesoftApp.itens
 * @description
 * # itens
 * Service in the bluesoftApp.
 */
angular.module('bluesoftApp')
  .factory('Item', function () {
		var itens = [
		        {id: 1, produto: 'Refrigerante', quantidade: 2, comprado: false},
		        {id: 2, produto: 'Cerveja', quantidade: 100, comprado: false},
		        {id: 3, produto: 'Garrafa de água', quantidade: 1, comprado: false},
		        {id: 4, produto: 'Carvão', quantidade: 3, comprado: false},
		        {id: 5, produto: 'Pão', quantidade: 12, comprado: false}
		    ];

		return {
		    all: function() {
		      return itens;
		    },
		    get: function(id) {
		      var result = null;
		      angular.forEach(itens, function(p) {
		      	console.log(p)
		        if (p.id == id) result = p;
		      });
		      return result;
		    }
		  };

  });
