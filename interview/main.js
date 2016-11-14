var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope,$http) {
	$scope.disp = "Meteor Coding Challenge";

    // http://stackoverflow.com/questions/13020821/how-to-load-json-into-my-angular-js-ng-model 
    $http.get('data.json')
        .success(function(data){
    		$scope.dict = data;
    	});
    	//some error handing?
});
