var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope,$http) {
	$scope.disp = "Meteor Coding Challenge";

	$scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];

    // http://stackoverflow.com/questions/13020821/how-to-load-json-into-my-angular-js-ng-model 
    $http.get('http://www.iNorthwind.com/Service1.svc/getAllCustomers')
         .success(function (data) {
             $scope.listOfCustomers = data.GetAllCustomersResult;
         });

    $http.get('http://qandrew.github.io/meteor/result.json').success(function(data){
    		$scope.todos = res;
    	});
    	//some error handing?
});