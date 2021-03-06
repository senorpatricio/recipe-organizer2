'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'add-recipe/add-recipe.html',
    controller: 'AddRecipeCtrl'
  });
}])

.controller('AddRecipeCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
	$scope.recipe = {
		ingredients: [] // begin ingredients
	};

	$scope.addIngredientToRecipe = function(ingredientName) {
        if(ingredientName != null) {
            var ingredient = {name: ingredientName};
            $scope.recipe.ingredients.push(ingredient);
            $scope.ingredientName = null;
        }
    };

    $scope.removeIngredientFromRecipe = function(ingredient) {
	    var index = $scope.recipe.ingredients.indexOf(ingredient);
	    if (index != -1) {
	        $scope.recipe.ingredients.splice(index, 1);
        }
    };

    // end ingredients

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