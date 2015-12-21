'use strict';

angular.module('myApp.recipeDetail', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipe-detail/recipe-detail.html',
    controller: 'RecipeDetailCtrl'
  });
}])

.controller('RecipeDetailCtrl', ['$scope', '$routeParams', '$location', 'Restangular', function ($scope, $routeParams, $location, Restangular) {
	$scope.recipeId = $routeParams.recipeId;

	$scope.editing = false;

	Restangular.one('recipes', $scope.recipeId).customGET()
		.then(function (recipe){
			$scope.recipe = recipe;
		}, 
		function() {
			alert('There was a problem!')
		});

	$scope.deleteRecipe = function () {
		var confirmation = confirm("Are you sure you want to delete this recipe? This cannot be undone.");
		if (confirmation) {
			Restangular.one('recipes', $scope.recipeId).customDELETE()
				.then(
					function () {
						alert('Your recipe was successfully deleted.');
						$location.path('/recipes');
					},
					function () {
						alert('There was a problem deleting your recipe.')
					}
				)
		}
	};
	$scope.saveEditedRecipe = function () {
		Restangular.one('recipes', $scope.recipeId).customPUT($scope.recipe)
			.then(
				function () {
					$scope.editing = false;
					alert('Your recipe was successfully updated.')
				},
				function () {
					alert('There was a problem updating your recipe.')
				}
			)
	}

}]);