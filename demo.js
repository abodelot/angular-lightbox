var app = angular.module('DemoApp', ['angular-lightbox']);

app.controller('DemoController', function($scope) {

  $scope.images = [
    'images/java.png',
    'images/php.png',
    'images/python.png',
    'images/broken/link.png',
    'images/ruby.png',
  ];

  $scope.largeImage = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/ESC_large_ISS022_ISS022-E-11387-edit_01.JPG';
});
