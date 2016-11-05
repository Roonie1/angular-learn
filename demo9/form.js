var form = angular.module('form',[]);
form.controller('form_ctl', function($scope){
	$scope.email_error="请输入正确的邮箱";
	$scope.submit = function(valid){
		alert(valid);
	}
})
form.directive('multipleEmail',function () {
	return {
		restrict:"A",	
	    require: "ngModel",
	    link: function ($scope, $element, $attr, ngModel) {
	    	ngModel.$parsers.unshift(function(viewValue) {
				var emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	            if (emailExp.test(viewValue)) {
	                ngModel.$setValidity('email', true);
	                return viewValue;
	            } else {
	                ngModel.$setValidity('email', false);
	                return undefined;
	            }
	   		});
		}
	};
});

form.directive('multipleName', [function () {
	return {
		restrict: 'A',
		require:"ngModel",
		link: function (scope, iElement, iAttrs,ngModel) {
			ngModel.$parsers.unshift(function(value){
				var userExp = /^[a-zA-Z][a-zA-Z0-9]{3,15}/;
				console.log(userExp.test(value));
				if (userExp.test(value)){
					ngModel.$setValidity("name",true);
					return value;
				} else {
					ngModel.$setValidity("name",false);
					return undefined;
				}
			});
		}
	};
}])