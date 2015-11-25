
/* ---------------------------------- */
/*
 * Jano Cycles 
 * http://janocycles.com
 * 
 * Author: Ian Coyle
 * 
 *
 */

var _mobile = ( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) )

var JanoApp = angular.module("JanoApp", []);

JanoApp.controller('AppCtrl', function($scope){});

JanoApp.directive('responsive', function($window) {

	return {
		restrict: 'A',
		link: function(scope, element) {
			if (_mobile) {

				element.attr('src', element.attr('mobile'));
				
			}
		}
	}
});