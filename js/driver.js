var app = angular.module("driverApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/driver/driver.html",
        controller: "mapController"
    })
    .when("/confirm", {
        templateUrl: "partials/driver/acceptRequest.html",
        controller: "acceptController"
    });
});

app.controller("mapController", function($scope) {
});

app.controller("acceptController", function($scope) {
});
