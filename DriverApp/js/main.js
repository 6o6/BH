var app = angular.module("driverApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/map.html",
        controller: "mapController"
    })
    .when("/confirm", {
        templateUrl: "partials/acceptRequest.html",
        controller: "acceptController"
    });
});

app.controller("mapController", function($scope) {

});

app.controller("acceptController", function($scope) {
});
