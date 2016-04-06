/**
 * Created by Administrator on 2016/4/6 0006.
 */
var app = angular.module('directive',[])
   app.directive('expander',function(){
        return {
            restrict:'E',
            templateUrl:'tpl.html',
            replace:true,
            transclude:true,
            scope:{
                mytitle:'=etitle'
            },
            link: function(scope,element,attr){
                scope.showText = false;
                scope.toggleText = function(){
                    scope.showText = ! scope.showText;
                }
            }
        }
    });
    app.controller('directive',function($scope){
        $scope.title = "个人简介";
        $scope.text = "Angular js概念多"
    });