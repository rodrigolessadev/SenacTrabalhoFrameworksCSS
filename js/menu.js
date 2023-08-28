// Responsável pelo menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.sidenav').sidenav();
});

// var instance = M.Tabs.init(el, options);

// Or with jQuery

$(document).ready(function () {
  $('.tabs').tabs();
});

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.scrollspy');
//   var instances = M.ScrollSpy.init(elems, options);
// });

// Or with jQuery

$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});