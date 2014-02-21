(function(angular){ 'use strict';

angular.module('site', ['rwd20', 'ngTouch', /*'ngRoute', 'ngAnimate' */ ])
	.config(['responsiveServiceProvider', function(responsiveServiceProvider) {
		responsiveServiceProvider.addBreakpoint('xlarge', 1600, 99999);
	}]);

})(window.angular);

