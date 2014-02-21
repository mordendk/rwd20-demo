(function(angular){ 'use strict';

	angular.module('site')
		.directive('model', ['$http', function($http) {
			return {
				scope: true,
				link: function ($scope, $element, $attr) {
					$http.get($attr.model).success(function(data) {
						$scope.model = data;
					});
				}
			};
		}]);

})(window.angular);

