/**
 * Created by Administrator on 2016/3/31 0031.
 */
var provider = angular.module("timeExampleModule",[]);
provider.factory('time',function($timeout){
        var time = {};
        (function tick(){
            time .now = new Date().toString();
            $timeout(tick,1000);
        })();
        return time;
    });
provider.controller('ClockCtrl',function($scope,time){
    $scope.time = time;
});