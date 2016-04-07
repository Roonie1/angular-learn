/**
 * Created by Administrator on 2016/4/6 0006.
 */
var app = angular.module('directive',[])
   app.directive('expander',function(){
        return {
            restrict:'E',
            templateUrl:'tpl.html',
            require:'?^accordion',
            replace:true,
            transclude:true,
            scope:{
                mytitle:'=etitle'
            },
            link: function(scope,element,attr,accordionCtrl){
                scope.showText = false;
                accordionCtrl.addExpander(scope);
                scope.toggleText = function(){
                    scope.showText = ! scope.showText;
                    accordionCtrl.getOpened(scope);
                }
            }
        }
    });
    app.controller('directive',function($scope){
        $scope.expanders = [
            {title:"angular",text:"angular js概念多"},
            {title:"react",text:"react + reduce + ui路由机制"}
        ];
    });


    app.directive('accordion',function(){
       return {
           restrict:"E",
           template:'<div ng-transclude></div>',
           replace:true,
           transclude:true,
           controller:function(){
               var expanders = [];

               this.getOpened = function(selectExpander){
                   angular.forEach(expanders,function(e){
                        if (selectExpander != e){
                            e.showText = false;
                        }
                   });
               }

               this.addExpander = function(e){
                   expanders.push(e);
               }
           }
       }
    });