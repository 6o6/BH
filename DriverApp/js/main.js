var app = angular.module("driverApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/map.html",
        controller: "mapController"
    })
    .when("/accept", {
        templateUrl: "partials/acceptRequest.html",
        controller: "acceptController"
    });
});

app.controller("mapController", function($scope) {
  
});

app.controller("acceptController", function($scope, $location) {
  $scope.customerID = "#111111";
  $scope.customerName = "Jane Doe";
  $scope.customerAddress = "2222 Broadway St.";
  $scope.customerPhone = "604-111-1111";
  $scope.travelDistance = "3km";
  $scope.timeFrame = "Within 3 hours";
  
});
