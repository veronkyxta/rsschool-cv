const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu__active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const copyright = document.getElementById('copyright');

    let START_YEAR = 2023;
    let today = new Date(),
    currentYear = today.getFullYear();
    let result = "&copy;  " + START_YEAR;
    if (currentYear > START_YEAR) {
        result +=  "&ndash;" + currentYear;
    }
    
    
    copyright.innerHTML = result;

    window.onload = function() { // после загрузки страницы

        var scrollTop = document.getElementById('ToTop');
         // найти элемент
    
        scrollTop.onmouseover = function() { // добавить прозрачность
            scrollTop.style.opacity=0.3;
            scrollTop.style.filter  = 'alpha(opacity=30)';
        };
    
        scrollTop.onmouseout = function() { //убрать прозрачность
            scrollTop.style.opacity = 0.5;
            scrollTop.style.filter  = 'alpha(opacity=50)';
        };
    
        scrollTop.onclick = function() { //обработка клика
            window.scrollTo(0,0);
        };
    
    // show button
    
    window.onscroll = function () { // при скролле показывать и прятать блок
            if ( window.pageYOffset > 0 ) {
                scrollTop.style.display = 'block';
            } else {
                scrollTop.style.display = 'none';
            }
    
        };
    };
