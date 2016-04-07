/**
 * Created by Administrator on 2016/4/5 0005.
 */
var parse = angular.module('parse',[]);
parse.controller('ctrl',function($scope,$filter){
    $scope.expres = [];
    $scope.expr = $filter('currency')(3*10);
    $scope.addExp = function(expr){
        $scope.expres.push(expr);
    }
    $scope.removeExp = function(index){
        $scope.expres.splice(index,1);
    }
})