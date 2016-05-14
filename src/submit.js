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
            if (!submit.task || !submit.latitute || !submit.longitute || !submit.bounty) {
                $http.post('https://dev16788.service-now.com/api/8380/task_bounty/submitTask', {
                    lat: submit.latitude,
                    lng: submit.longitute,
                    summary: submit.task,
                    totalBounty: submit.bounty,
                    image: ""
                })
                    .then(function successCallback(response) {
                        window.location.replace('home.html');
                    }, function errorCallback(response) {
                        console.log(response);
                    });
            }
        };
    };

    app.controller("submitController", ['$http', submitpage]);
})();