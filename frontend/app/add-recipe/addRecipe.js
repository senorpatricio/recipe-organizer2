'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'add-recipe/add-recipe.html',
    controller: 'AddRecipeCtrl'
  });
}])

.controller('AddRecipeCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
	$scope.recipe = {};

	$scope.addRecipe = function () {
		Restangular.all('add-recipe').customPOST($scope.recipe)
			.then(
				function () {
					alert("Your recipe was created successfully.");
					$scope.recipe = {};
				},
				function () {
					alert("There was a problem creating your recipe.");
				}
			)
	}
}]);