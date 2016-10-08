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

    $scope.t9Filter = function(search){
        // return $scope.search;
        if (search != null && search != ""){
            words = [];
            
            // first, get deep into the tree
            currDict = $scope.dict;
            for (i = 0; i < search.length; i++){
                ltr = search[i]
                if (currDict != null){
                    if (currDict.hasOwnProperty(ltr)){
                    // if (currDict[ltr]['word'].length != 0)
                    //     words.push(currDict[ltr]['word'])
                    currDict = currDict[ltr];
                }
                else
                    currDict = null;
                }
                // words.push(ltr);
            }

            // entered a node with no results
            if (currDict == null){
                return "No Results"
            }
            if (currDict['word'].length != 0)
                return currDict['word'];
            return "No Results"
            // words.push(currDict);

            // return search.length
            return words;
        }
        else 
            return ""
    }

    // http://stackoverflow.com/questions/13020821/how-to-load-json-into-my-angular-js-ng-model 
    $http.get('http://qandrew.github.io/meteor/result.json')
        .success(function(data){
    		$scope.dict = data;
    	});
    	//some error handing?
});

// app.filter('t9', function(){
//     return search
// });