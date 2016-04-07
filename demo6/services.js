/**
 * Created by Administrator on 2016/4/7 0007.
 */
var app = angular.module('serviceApp',[]);

app.controller('Ctrl',function($scope,remoteData){
    $scope.getData = function(){
        console.log("key="+remoteData.name+",value="+remoteData.value);
    }
});

app.factory('remoteData',function(){
   var data = {name:"n",value:"v"};
    return data;
});