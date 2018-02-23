var app = angular.module("ex1app", []);
app.controller("ex1ctrl", function($scope, $http){
	$scope.fname = "Mano";

	  $scope.phones = [
	    {
	      name: 'Nexus S',
	      snippet: 'Fast just got faster with Nexus S.'
	    }, {
	      name: 'Motorola XOOM™ with Wi-Fi',
	      snippet: 'The Next, Next Generation tablet.'
	    }, {
	      name: 'MOTOROLA XOOM™',
	      snippet: 'The Next, Next Generation tablet.'
	    }
	  ];

	  $http.get('http://httpbin.org/get').then(function(response){
	  	var val = response;
	  });
});

app.component('user', {
	template : 'Hello {{$ctrl.user}}',
	controller: function userController(){
		this.user = 'world';
	}
});