/**
 * Created by Administrator on 2016/3/31 0031.
 */
var directive = angular.module('time',[]);

directive.directive('myCuurentTime', function($timeout, dateFilter){
    return function(scope,element,attrs){
        var format;
        var timeoutId;

        function updateTime(){
            element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attrs.myCurrentTime,function(value){
            console.log(value);
            format = value;
            updateTime();
        });

        function updateLater(){
            timeoutId = $timeout(function(){
                updateTime();
                updateLater();
            },1000);
        }

        element.bind('$destory',function(){
           $timeout.cancel(timeoutId);
        });

        updateLater();
    }
});

directive.controller('Ctrl2',function($scope){
    $scope.format = 'M/d/yy h:mm:ss a';
});