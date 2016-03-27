/**
 * Created by ronnie on 16/3/27.
 */
var demo = angular.module('demo', []);
demo.controller('InvoiceCntl',function($scope){
    $scope.qty = 8;
    $scope.cost = 19.98;

});
//describe('InvoiceCntl',function(){
//    it('should show of angular binding',function(){
//        expect(binding(qty*cost)).toEqual('$19.98');
//        input('qty').enter('2');
//        input('cost').enter('5.00');
//        expect(binding('qty*cost')).toEqual('$10.00');
//    });
//});