//---------------------------------------Scrolling function---------------------------------------------
var lastScrollTop;
var scrollLock;
var pageHeight;

window.onscroll = function() {myFunction(null)};

function myFunction(hash) {
    // Using jQuery's animate() method to add smooth page scroll
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    
    if(hash != null && !scrollLock)
    {
      scrollLock = true;
     $('html, body').scrollTop = $(hash).offset().top;
     lastScrollTop = $(hash).offset().top;
     setTimeout(() => { scrollLock = false;  }, 70);
    }
    else{
    if (st > lastScrollTop && !scrollLock){
      lastScrollTop = pageHeight + st;
      scrollLock = true;
      $('html, body').animate({
        scrollTop: pageHeight + st
      }, 800, function() {scrollLock = false;} );
    }

    if(st < lastScrollTop && !scrollLock){
      lastScrollTop = st - pageHeight;
      scrollLock = true;
      $('html, body').animate({
        scrollTop: st - pageHeight
      }, 800, function() {scrollLock = false;} );
    }
  }
}

window.onresize = function() {pageHeight = window.innerHeight;}

    $(document).ready(function(){
      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollLock = false;
      
      pageHeight = window.innerHeight;
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;

          myFunction(hash);
          
          window.location.hash = hash;
       
        } // End if
      });
    });