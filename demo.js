var app = angular.module('DemoApp', ['angular-lightbox']);

app.controller('DemoController', function($scope) {

  $scope.title = 'Angular Lightbox';

  $scope.images = [
    'images/java.png',
    'images/php.png',
    'images/python.png',
    'images/broken/link.png',
    'images/ruby.png'
  ];

  $scope.foobar = function() {
    $scope.images = [
      'http://i.huffpost.com/gen/1234822/images/r-FORT-SOUSMARINE-large570.jpg',
      'http://www.nordforsk.org/en/store-satsinger/nordforsks-store-satsinger/header-image_header'
    ];
  };
});
