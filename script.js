var myapp = angular.module('myApp', []);

//to fetch data from json file
myapp.controller('myCtrl', function($scope, $http) {
    $http.get("https://bernardbdas.github.io/wsd-lab8/users.json")
        .success(function(response) {
            $scope.myData = response.users;
            $scope.rowlimit = response.users.length();
        });
    //$scope.myOrderBy = item;
});

//custom filter 1
myapp.filter('phnfilter', function() {
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

function hw() {
    alert("to check whether the script file is linking properly!");
}