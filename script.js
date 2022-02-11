var app = angular.module('myApp', []);

//to fetch data from json file
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://bernardbdas.github.io/wsd-lab8/users.json")
        .then(function(response) {
            $scope.myData = response.data.user;
            $scope.rowlimit = response.data.length();
        });
    $scope.myOrderBy = item;
});

//custom filter 1
app.filter('phnfilter', function() {
    return function(input) {
        return "+91-" + input;
    }
});

//custom filter 2
myapp.filter("namefilter", function() {
    return function(input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
});