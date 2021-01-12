//---------------------------------------Scrolling function---------------------------------------------
var lastScrollTop;
var pageHeight;

window.onresize = function() {pageHeight = window.innerHeight;}

    $(document).ready(function(){
      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      pageHeight = window.innerHeight;
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800);
          
          window.location.hash = hash;
       
        } // End if
      });
    });

  