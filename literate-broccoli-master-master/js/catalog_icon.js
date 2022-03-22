//изменение состояния иконки при наведении на каталог

var catalog = document.querySelector('.catalog__wrapper');
var catalog_icon = document.querySelectorAll('.catalog_icon_i');

//переход в состояние Х при наведении на каталог
catalog.addEventListener("mouseenter", function() {

    catalog_icon[0].style.transform = "translateY(7px) translateZ(0) rotate(45deg)";
    catalog_icon[1].style.transition = "opacity .3s;";
    catalog_icon[1].style.opacity = 0;
    catalog_icon[2].style.transform = "translateY(-7px) translateZ(0) rotate(-45deg)";
})

//переход в начальное состояние при выведении курсора из области видимости каталога
catalog.addEventListener("mouseleave", function() {
    for(var i = 0; i < catalog_icon.length; i++)
    {
        catalog_icon[i].removeAttribute('style');
    }
})