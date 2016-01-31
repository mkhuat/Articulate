var data;
var baseurl = 'http://api.diffbot.com/v3/article?token=a562e9dc247fc496c1d2df2e94a23e3b&url='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.articleObject = {}

  //To get article author
  $scope.getAuthor = function () {
    $http.get(baseurl + $scope.article).success(function(response){
		data = response.objects //$scope.article
		$scope.articleObject = data[0];

		var client = Algorithmia.client('sim9B6nzyVHR3LuYtjDwWyFmqOz1');
  		var input = data[0].text;
  		id="article"
  		document.getElementById("article").style.display = "";
	       		
  		client.algo("algo://nlp/Summarizer/0.1.3")
	       .pipe(input)
	       .then(function(output) {
	       		var sumtext = document.getElementById("summtext");
	       		document.getElementById("summary").style.display = "";
	       		sumtext.innerHTML = output.result;
	       		console.log(output.result);
	       		//console.log($scope.articleObject.summarizer);
           });
    })
  }
})