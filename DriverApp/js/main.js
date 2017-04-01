var app = angular.module("driverApp", ["ngRoute", "ngMap"]);

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

app.controller("mapController", function($scope, $location, $http) {

var queryParams = {
  "visits": {
    "order_1": {
      "location": {
        "name": "6800 Cambie",
        "lat": 49.227107,
        "lng": -123.1163085
      }
    },
    "order_2": {
      "location": {
        "name": "3780 Arbutus",
        "lat": 49.2474624,
        "lng": -123.1532338
      }
    },
    "order_3": {
      "location": {
        "name": "800 Robson",
        "lat": 49.2819229,
        "lng": -123.1211844
      }
    }
  },
  "fleet": {
    "vehicle_1": {
      "start_location": {
        "id": "depot",
        "name": "800 Kingsway",
        "lat": 49.2553636,
        "lng": -123.0873365
      }
    }
  }
};

var creds = {
  headers:{ 'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGRmMDcxM2VkNzE0MWFlMGE3ZWI5OWQiLCJpYXQiOjE0OTEwNTQ3NTJ9.rL0viwCPcei2rcj7xf8W5hDyQYxsBuc5cxfeyUdFDL8'}
}

$http.post("https://api.routific.com/v1/vrp", queryParams, creds)
        .then(function (data) {
          console.log(data.status);
        }, function (error) {
          console.log(error.toString());
        });
});

app.controller("acceptController", function($scope, $location) {
  $scope.customerID = "#111111";
  $scope.customerName = "Jane Doe";
  $scope.customerAddress = "2222 Broadway St.";
  $scope.customerPhone = "604-111-1111";
  $scope.travelDistance = "3km";
  $scope.timeFrame = "Within 3 hours";
});
