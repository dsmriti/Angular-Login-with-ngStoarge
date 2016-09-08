/**
 * Created by smriti on 5/9/16.
 */
angular.module('myApp')
    .controller('register', function($scope,$localStorage){

        $scope.user = {};
        $scope.registerUser  = function () {
            if($localStorage.user){
                $localStorage.user.push($scope.user);
               // $scope.user = {};
                alert('registered');
            }
            else {
                $localStorage.user=[ ];
                $localStorage.user.push($scope.user);
                // $scope.user = {};
                alert('registered');
            }
        };
    });
