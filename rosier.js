const accordionItems = document.querySelectorAll('.accordion_box');
//console.log(accordionItems);

if (accordionItems) {
    accordionItems.forEach((accordion) => {
        accordion.addEventListener('click', (e) => toggleAccordion(e))
    })
}

const toggleAccordion = (e) => {
    console.log(e.currentTarget);
    let target = e.currentTarget;

    if (!target.classList.contains('accordion_expand')) {
        target.classList.add('accordion_expand');
    } else {
        target.classList.remove('accordion_expand');
    }
}


const menus = document.querySelectorAll('.menu');
//console.log(`found menus: ${menus}`);

if (menus) {
    menus.forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => toggleMenu(e))
    })
}

const toggleMenu = (e) => {
    console.log(e.currentTarget);
    //console.log(`toggling menu`);
    //console.log(e.currentTarget);
    let target = e.currentTarget;

    if (!target.classList.contains('menu_expand')) {
        target.classList.add('menu_expand');
    } else {
        target.classList.remove('menu_expand');
    }
}