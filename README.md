Angular Lightbox
----------------

A minimal lightbox directive for AngularJS.

Check out the [demo page](http://rawgit.com/abodelot/angular-lightbox/master/demo.html)!

## Installation

Include the dependencies and the directive (Javascript and CSS) in your angular application:

```html
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://code.angularjs.org/1.3.3/angular.min.js"></script>

<script src="angular-lightbox/angular-lightbox.js"></script>
<link type="text/css" rel="stylesheet" href="angular-lightbox/angular-lightbox.css" />
```

## Usage

Declare an array of image URLs:

```js
var app = angular.module('MyApp', ['angular-lightbox']);

app.controller('MyController',  function($scope) {
  $scope.myImages = ['foobar.png', 'foobaz.jpg', 'barbaz.gif'];
});
```

In your view, declare the `lightbox` on any element, and use the `lightbox-trigger` class on any child element to trigger the lightbox opening.

Example:
```html
<ul lightbox="myImages">
  <li ng-repeat="image in myImages">
    <a href="image" class="lightbox-trigger">{{image}}</a>
  </li>
</ul>
```

## Keyboard shortcuts

- <kbd>Left</kbd>: Previous image
- <kbd>Right</kbd>: Next image
- <kbd>Home</kbd>: First image
- <kbd>End</kbd>: Last image
- <kbd>Escap</kbd>: Close Lightbox
