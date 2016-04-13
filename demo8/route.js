/**
 * Created by Administrator on 2016/4/11 0011.
 */
var route = angular.module('route',['ngRoute']);
function routeConfig($routeProvider){
    $routeProvider.
        when('/',{
            controller:"listController",
            templateUrl:"list.html",
        }).
        when('/details/:id',{
            controller:"detailController",
            templateUrl:"details.html",
        }).
        when('/edit/:id',{
            controller:"editController",
            templateUrl:"edit.html"
        }).
        when('/list',{
            controller:"listController",
            templateUrl:"list.html"
        }).
        when('/add',{
            controller:"addController",
            templateUrl:"add.html"
        }).
        otherwise({
            redirectTo:'/'
        });
};

route.config(routeConfig);

var newsList = [{
    id:1,
    title:"1111",
    content:"11111111",
    date:new Date()
}];

route.controller('listController',function($scope){
   $scope.newsList = newsList;
});

route.controller('detailController',function($scope,$routeParams){
   $scope.news = newsList[$routeParams.id-1];
});

route.controller('addController',function($scope,$location){
    $scope.title = "";
    $scope.content = "";
    $scope.add = function(){
        newsList.push({
            id:newsList.length + 1,
            title:$scope.title,
            content:$scope.content,
            date:new Date(),
        });
        $location.path('list');
    }
});

route.controller('editController',function($scope,$routeParams,$location){
    $scope.news = newsList[$routeParams.id - 1];
    $scope.update = function(){
        newsList[$routeParams.id - 1] = $scope.news;
        $location.path('list');
    }
})