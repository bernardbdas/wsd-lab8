var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("https://bernardbdas.github.io/wsd-lab8/users.json")
        .then(function(response) {
            $scope.myData = response.data.user;
            $scope.rowlimit = response.data.length();
        });
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
app.filter('myfilter', function() {
    return function(input) {
        return "+91-" + input;
    }
});