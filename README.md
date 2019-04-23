Angular Lightbox
----------------

A minimal lightbox directive for AngularJS. No other dependencies!

Check out the [demo page](https://rawgit.com/abodelot/angular-lightbox/master/demo.html)!

## Installation

This project is available as npm package `angularjs-lightbox`:

```
npm install angularjs-lightbox
```

Include the directive sources (Javascript and CSS) in your AngularJS application:

```html
<script src="https://code.angularjs.org/1.7.8/angular.min.js"></script>

<script src="angularjs-lightbox/src/angular-lightbox.js"></script>
<link type="text/css" rel="stylesheet" href="angularjs-lightbox/src/angular-lightbox.css">
```

## Usage

Declare an array of image URLs, or a single URL:

```js
var app = angular.module('MyApp', ['angular-lightbox']);

app.controller('MyController',  function($scope) {
  $scope.myImages = ['foobar.png', 'foobaz.jpg', 'barbaz.gif'];

  $scope.imageUrl = 'foobar2.png';
});
```

In your view, use the `lightbox` attribute on any element, and use the `lightbox-trigger` class on any child element to trigger the lightbox opening.

Example for a list:

```html
<ul lightbox="myImages">
  <li ng-repeat="image in myImages">
    <a href="image" class="lightbox-trigger">{{ image }}</a>
  </li>
</ul>
```

Example for a single image:

```html
<span lightbox="imageUrl">
  <a href class="lightbox-trigger">link</a>
</span>
```

## Keyboard shortcuts

- <kbd>Left</kbd>: Previous image
- <kbd>Right</kbd>: Next image
- <kbd>Home</kbd>: First image
- <kbd>End</kbd>: Last image
- <kbd>Escap</kbd>: Close Lightbox

## Dependencies

- Angularjs >= 1.3
