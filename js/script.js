// $ global fix 
/* global $ */

//Unit 4 Portfolio with Object
// Class 1 
    // use JavaScript to create a simple object representation of your portfolio
// Class 2
    // create a data representation of your portfolio using nested objects
    // learn to access properties of an object using dot and bracket notation
    // use jquery to update your portfolio html (make sure to add appropriate class to your HTML)
// Class 3
    // add like buttons to your html and like property to your object
    // add new properties, modify, and delete properties an object
    // update existing properties of an object
    // add a click handler to update the like counter when buton is clicked

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************


// Create your potrfolio object representation below







// Use Jquery to update your HTML using your object. Don't forget the Document Ready function. 







// Add your click handler below to update your like counters when the like buttons are clicked. 


// function reSizing() { 
//      if($("jumbtron").class("col-sm-4")) { 
//           $("jumbotron").css("height","900px");
//      } 
// } 

$(window).scroll(function() {
  if ($(document).scrollTop() > 70) {
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

