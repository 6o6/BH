var app = angular.module("customerApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/info", {
        templateUrl: "partials/customer/customerInfo.html",
        controller: "infoController"
    })
    .when("/availability", {
        templateUrl: "partials/customer/driverAvailability.html",
        controller: "availabilityController"
    })
    .when("/confirm", {
        templateUrl: "partials/customer/confirmRequest.html",
        controller: "confirmController"
    });
});

app.controller("infoController", function($scope) {
});

app.controller("availabilityController", function($scope) {
});

app.controller("confirmController", function($scope) {
});