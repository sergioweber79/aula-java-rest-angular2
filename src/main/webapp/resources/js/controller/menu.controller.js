angular.module('menu')
.controller('menuCtrl', [
	'$scope',
	'$location',
	function($scope, $location) {
		
		$scope.menu = [
           {itemLabel: 'Produto', link: '/produto'},
           {itemLabel: 'Categoria', link: '/categoria'}
        ];
		
		$scope.redirect = function(link) {
			$location.path(link);
		}
		
	}
]);
