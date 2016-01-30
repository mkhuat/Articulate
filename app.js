var data;
var baseurl = 'http://api.diffbot.com/v3/article?token=a562e9dc247fc496c1d2df2e94a23e3b&url='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.articleObject = {}

  //To get article author
  $scope.getAuthor = function () {
    $http.get(baseurl + $scope.article).success(function(response){
      data = $scope.article = response.objects
      console.log(data);
    })
  }
})