window.addEventListener('DOMContentLoaded', function() {

    
$(document).ready(function() {
    $("#phone").mask("+7(999) 999-99-99");
});



let tab, tabContent, info;


tab = document.querySelectorAll('.info-header-tab'),
tabContent = document.querySelectorAll('.info-tabcontent'),
info = document.querySelector('.info-header');

// tab

hoverTab = (a) => {
    for (let i = a; i < tab.length; i++) {
        tab[i].classList.remove('default');
        tab[i].classList.add('hover');
    }
}



defaultTab = (a) => {
    if (tab[a].classList.contains('hover')) {
        tab[a].classList.add('default');
        tab[a].classList.remove('hover');
    }
}

// tabcontent


hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}


showTabContent = (a) => {
    if (tabContent[a].classList.contains('hide')) {
        tabContent[a].classList.add('show');
        tabContent[a].classList.remove('hide');
    }
}


info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hoverTab(0);
                defaultTab(i);

                hideTabContent(0);
                showTabContent(i);
            }
        }
    }
})


})

