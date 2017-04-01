var app = angular.module("customerApp", ["ngRoute"]);

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
});