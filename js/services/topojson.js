(function(angular){ 'use strict';

	angular.module('site')
		.factory('topojsonService', ['$window','$document', '$q', '$rootScope', function($window, $document, $q) {

			var defer = $q.defer();

			return {

				loaded: function(){
					var onScriptLoad = function(){
							return defer.resolve($window.topojson);
						};


					var scriptTag = $document[0].createElement('script');

					if($window.topojson){
						onScriptLoad();
					}
					else{

						scriptTag.type = 'text/javascript';
						scriptTag.async = true;
						scriptTag.src = '/dev/rwd20-demo/js/vendor/topojson.js';
						scriptTag.onreadystatechange = function () {
							if (this.readyState === 'complete') {
								onScriptLoad();
							}else{
								defer.reject();
							}
						};
						scriptTag.onload = onScriptLoad;
						var s = $document[0].getElementsByTagName('body')[0];
						s.appendChild(scriptTag);
					}

					return defer.promise;
				}
			};


		}]);

})(window.angular);

