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

var customerInfo = {
  "name": "",
  "email": "",
  "phone": "",
  "address": "",
  "city": "",
  "postal": "",
  "timeframe": ""
};

app.controller("infoController", function($scope, $location) {
  
  $scope.saveCustomerInfo = function (customer) {
    customerInfo.name = customer.firstname + " " + customer.lastname;
    customerInfo.email = customer.email;
    customerInfo.phone = customer.phone;
    customerInfo.address = customer.address;
    customerInfo.city = customer.city;
    customerInfo.postal = customer.postal;
    customerInfo.timeframe = customer.timeframe;
    $location.path("/availability");
  };
});

app.controller("availabilityController", function($scope) {
  console.log("Name is: " + customerInfo.name);
});

app.controller("confirmController", function($scope) {
  $scope.customerID = "#111111";
  $scope.customerName = "Jane Doe";
  $scope.customerAddress = "2222 Broadway St.";
  $scope.customerPhone = "604-111-1111";
  $scope.travelDistance = "3km";
  $scope.timeFrame = "Within 3 hours";
  
  var queryParams = {
    "Name": "JC Ling",
    "Email": "jjj@gmail.com"
  };
  
  $http.put("https://bizhack-d6dde.firebaseio.com", queryParams)
    .then(function (data) {
      console.log(data.status);
    }, function (error) {
      console.log(error.toString());
    });

});