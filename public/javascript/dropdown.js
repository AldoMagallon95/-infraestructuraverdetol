options={
    hover:true,
    coverTrigger:false,
    constrainWidth: true,
    
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
    M.Dropdown.init({ })
  });