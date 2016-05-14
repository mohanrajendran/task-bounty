(function() {
    var app = angular.module("taskbounty", ["ngMaterial"]);
    
	var homepage = function($http) {
        var home = this;
        
		home.title = "TASK BOUNTY";	
        
        home.sub
		
		home.open_jobs = [];
		
		$http.get('https://dev16788.service-now.com/api/8380/task_bounty/openTasks')
			.then(function successCallback(response) {
			home.open_jobs = response.data.result;
		}, function errorCallback(response) {
			console.log(response);
		});
        
       
	}; 
	
	app.controller("homeController",  ['$http', homepage]);
})();