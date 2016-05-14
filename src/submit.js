(function() {
    var app = angular.module("taskbounty", ["ngMaterial"]);
    
	var submitpage = function($http) {
        var submit = this;
        
		submit.title = "CREATE NEW BOUNTY";
        
        // form data
        submit.task = null;
        submit.latitute = null;
        submit.longitute = null;
        submit.bounty = null;
        
        submit.create = function() {
            if(submit.task && submit.latitute && submit.longitute && submit.bounty) {
                
            }
        };
	}; 
	
	app.controller("submitController",  ['$http', submitpage]);
})();