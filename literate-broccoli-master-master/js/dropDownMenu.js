var catalog = document.querySelector('.catalog');
var catalog__list = document.querySelector('.catalog__list');
var open = false;

catalog.addEventListener("click", function() {
  
    if(open)
    {
        catalog__list.style.display = 'none';
        open = false;
    }
        
    else
    {
        catalog__list.style.display = 'block';
        open = true;
    }
        
    
    console.log(open);
});

