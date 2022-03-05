var myapp = angular.module('myApp', []);

//to fetch data from json file
myapp.controller('myCtrl', function($scope, $http) {
    $http.get("https://bernardbdas.github.io/wsd-lab9/users.json")
        .success(function(response) {
            $scope.myData = response.users;
            console.log($scope.myData);
        });
});

//custom filter 1 : Makes the first char of the name capital
myapp.filter('formatName', function() {
    return function(input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
});

//custom filter 2 : Limits the no. of rows displayed
myapp.filter("limitRow", function() {
    return function(input, option) {
        if (isNaN(option) || (option == "")) {
            return input;
        } else {
            return input.substring(0, option).toLowerCase();
        }
    }
});

//custom filter 3 : Adds country code "+91-" before every phone number
myapp.filter('formatNum', function() {
    return function(input) {
        return "+91-" + input;
    }
});

function hw() {
    alert("just an alertbox to check whether the script file is linking properly.");
}