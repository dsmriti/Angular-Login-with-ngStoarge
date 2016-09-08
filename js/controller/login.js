/**
 * Created by smriti on 6/9/16.
 */
angular.module('myApp').controller('login', function($scope,$localStorage,$location) {
    $scope.user={};
    $scope.login = function ()
    {
        console.log($localStorage);
        $scope.loggedin = false;
        if($scope.user.email==undefined||$scope.user.email==''){
            alert('email required');
            return;
        } else if($scope.user.password==undefined||$scope.user.password==''){
            alert('password required');
            return;
        }
        for (i = 0; i < $localStorage.user.length; i++) {
            if($localStorage.user[i].email == $scope.user.email && $localStorage.user[i].password == $scope.user.password)
            {
                $scope.loggedin = true;
                alert("you are logged in..!");
                $localStorage.loginid=i;
                $location.path('/home');
            }
            else
            {
                $location.path('/login');
            }
        }
        if($scope.loggedin == false){
            alert('invalid email or password');
        }
    };

});
