'use strict';

/**
 * @ngdoc function
 * @name bluesoftApp.controller:ItensCtrl
 * @description
 * # ItensCtrl
 * Controller of the bluesoftApp
 */
angular.module('bluesoftApp')
  .controller('ItensCtrl', function ($scope, Item) {

  		$scope.itens = Item.all();

		$scope.adicionaItem = function (index) {
		        $scope.itens.push({
		        				   id: $scope.itens.length + 1,
		        				   produto: $scope.item.produto,
	             				   quantidade: $scope.item.quantidade,  
		                           comprado: false});
		        $scope.item.produto = $scope.item.quantidade = '';
		    };

		$scope.editarItem = function (item) {
		        $scope.itens.push({produto: $scope.item.produto, quantidade: $scope.item.quantidade});
		    };


		$scope.deletarItem = function(item){
		    for(var i = $scope.itens.length - 1; i >= 0; i--){
		      if($scope.itens[i].produto == item.produto){
		          $scope.itens.splice(i,1);
		      }
		    }
		  }


  });
