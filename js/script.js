


window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show1');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);//запускаем нашу функц и скрываются все пункты кроме первогок

    function showTabContent(b) {//функция которая показывает TabContent
        if (tabContent[b].classList.contains('hide')) {//проверяем дествительно этот элемент скрытв
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show1');
        }
    }
    //делигируем события и применяем это к родителю
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {//провепяем что кликнули правельно
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {//то куда нажали полностью совпадает
                    hideTabContent(0);//все табы скрыли
                    showTabContent(i);
                    break;
                }
            }
        }

    });
});