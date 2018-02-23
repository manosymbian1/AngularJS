angular.module("ex1app").component('phoneList', {
	template : '<ul>'+
					'<li ng-repeat = "val in $ctrl.phones">{{val.name}}{{val.snippet}}'+
				'</ul>',

	controller: function(){
		this.phones = [
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
	}


});