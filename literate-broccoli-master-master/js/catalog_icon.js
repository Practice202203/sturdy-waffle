var catalog = document.querySelector('.catalog__wrapper');
var catalog_icon = document.querySelectorAll('.catalog_icon_i');

catalog.addEventListener("mouseenter", function() {

    catalog_icon[0].style.transform = "translateY(5px) translateZ(0) rotate(45deg)";
    catalog_icon[1].style.transition = "opacity .3s;";
    catalog_icon[1].style.opacity = 0;
    catalog_icon[2].style.transform = "translateY(-5px) translateZ(0) rotate(-45deg)";
})

catalog.addEventListener("mouseleave", function() {
    for(var i = 0; i < catalog_icon.length; i++)
    {
        catalog_icon[i].removeAttribute('style');
    }
})