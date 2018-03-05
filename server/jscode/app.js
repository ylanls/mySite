var app = angular.module('app', []);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    })
   .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        // .otherwise({
        //     templateUrl: 'index.html',
        //     controller: 'indexController'
        // });
});

app.controller('homeController', function ($scope, $http) {
    $scope.message = '123';
    $scope.getUser = function () {
        $http.get('/user').then(function (result) {
            $scope.user = result.data.user;
        })
    }
});
app.controller('indexController', function ($scope, $http) {
    $scope.message = '123',
        $scope.getUser = function () {
            $http.get('/home').then(function (result) {
                $scope.user = result.data.user;
            })
        }
});
app.controller('MyController', function ($scope, $parse) {
    $scope.parseValue = "test";
    $scope.$watch('expr', function (newVal, oldVal, scope) {
        if (newVal !== oldVal) {       // 用该表达式设置parseFun      
            var parseFun = $parse(newVal);
            // 获取经过解析后表达式的值      
            $scope.parseValue = parseFun(scope);
        }
    });
}); 