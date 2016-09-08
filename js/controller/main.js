angular.module('myApp', ['ngRoute','ngStorage']).controller("test",function($scope){
}).config(function ($routeProvider) {
        $routeProvider
           
            .when("/" ,{
                templateUrl:"template/profile.html",
	    controller:"test"	
            })
            .when("/home" ,{
                templateUrl:"template/home.html",
                controller:"home"
            })
            .when("/notes" ,{
                templateUrl:"template/load.html",
	    controller:"test"	
})

            .when("/login" ,{
                templateUrl:"template/login.html",
	            controller:"login"
})
            .when("/register" ,
                {
                templateUrl:"template/register.html",
	            controller:"register"
})
        });





