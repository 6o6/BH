var app = angular.module("customerApp", ["ngRoute", "ngMap"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/customerInfo.html",
        controller: "infoController"
    })
    .when("/availability", {
        templateUrl: "partials/driverAvailability.html",
        controller: "availabilityController"
    })
    .when("/confirm", {
        templateUrl: "partials/confirmRequest.html",
        controller: "confirmController"
    });
});

app.controller("infoController", function($scope) {
});

app.controller("availabilityController", function($scope) {
});

app.controller("confirmController", function($scope) {
  $scope.customerID = "#111111";
  $scope.customerName = "Jane Doe";
  $scope.customerAddress = "2222 Broadway St.";
  $scope.customerPhone = "604-111-1111";
  $scope.travelDistance = "3km";
  $scope.timeFrame = "Within 3 hours";
});