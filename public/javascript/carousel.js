var instances = M.Carousel.init({ });


  var options = {    
    dist: -100,  
    shift: 100,    
    numVisible: 5,
    indicators: true,
       
  }

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);  });

 

  M.AutoInit();