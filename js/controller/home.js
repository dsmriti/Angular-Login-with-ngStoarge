/**
 * Created by smriti on 7/9/16.
 */
// angular.module('myApp').controller('home', function ($scope,$localStorage,$location)
// {
//
//
// });

/**
 * Created by smriti on 6/9/16.
 */
angular.module('myApp').controller('home', function($scope,$localStorage,$location,$window) {$scope.stop = function () {
    if($localStorage.loginid==null||$localStorage.loginid==undefined||$localStorage.loginid==''){
        alert("Please login to go home page");
        $location.path('/login');
    }
};
    $scope.stop();

    $scope.x = $localStorage.user[$localStorage.loginid];
    $scope.logout = function () {
        delete $localStorage.loginid;
        //console.log($location.path('/#/login'));
        $location.path('/login');
        // $window.location.href='/#/login';
    };});

