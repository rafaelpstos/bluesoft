'use strict';

/**
 * @ngdoc function
 * @name bluesoftApp.controller:ItensdetailCtrl
 * @description
 * # ItensdetailCtrl
 * Controller of the bluesoftApp
 */
angular.module('bluesoftApp')
  .controller('ItensdetailCtrl', function ($scope, $routeParams, Item) {
  	$scope.item = Item.get($routeParams.id);
  });
