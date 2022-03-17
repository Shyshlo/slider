const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');

//CПОСОБ ИЗМЕНЕНИЕ РАЗМЕРОВ ЭЛ_В ПРИ МАСШТАБИРОВАНИИ ЭКРАНА
//Далее объявим переменную к-я ссылается на активный слайдер
let count = 0;
let width;

//Далее нам нужно рассчитать ширину рабочей области и изменить слайдер
//Узнаем ширину слайдера

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    //все изобр делаем=ширине слайдера
    images.forEach(item => {
        item.style.width = width + "px";
        //т о ширина изображений должна подтянуться под ширину черной обводки
        item.style.height = 'auto';
    });
    rollSlider();
}

//Далее повесим событие reasize к=е будет срабатывать при изменении размеров картинки и выз ф-цию init
window.addEventListener('resize', init);
init();

//Пишем ф-ю к-я будет листать слайды при ажатии кн prev
document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
if (count <0) {
    count = images.length - 1;
}
    rollSlider() 
});

//Пишем ф-ю к-я будет листать слайды при ажатии кн next
document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
if (count >= images.length) {
    count = 0;
}
    rollSlider() 
});


//Напишем ф-ю к-я отвечает за смещение
function rollSlider() {
    sliderLine.style.transform = 'translate(-'+ count*width+'px)';
}