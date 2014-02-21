(function(angular){ 'use strict';

	angular.module('site')
		.factory('d3Service', ['$window', '$document', '$q', '$rootScope', function($window, $document, $q) {

			var defer = $q.defer();

			return {

				loaded: function(){

					var	onScriptLoad = function(){
							return defer.resolve($window.d3);
						};

					if($window.d3){
						onScriptLoad();
					}
					else{
						var scriptTag = $document[0].createElement('script');

						scriptTag.type = 'text/javascript';
						scriptTag.async = true;
						scriptTag.src = '//d3js.org/d3.v3.min.js';
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

