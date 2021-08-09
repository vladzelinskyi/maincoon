let accordion_list = document.getElementById('accordion-list');
let accordion_titles = accordion_list.getElementsByClassName('accordion-item_title');
let accordion_icons = accordion_list.getElementsByClassName('plus');
let accordion_contents = accordion_list.getElementsByClassName('accordion-item_content');

for (let i = 0; i < accordion_titles.length; i++) {
    accordion_titles[i].addEventListener('click', function () {
        accordion_contents[i].classList.toggle("active");
        if (accordion_icons[i].innerHTML == "+") {
            accordion_icons[i].innerHTML = "-";
        } else {
            accordion_icons[i].innerHTML = "+";
        }
    });
}

let sliders = document.getElementsByClassName('slider');
for(let slider_elem of sliders) {
    let slider_items = slider_elem.getElementsByClassName('slider-item');
    let next = slider_elem.querySelector('.next');
    let prev = slider_elem.querySelector('.prev');
    let cur_slide = 0;

    next.addEventListener('click', () => {
        let prev_slide = cur_slide;
        if (cur_slide == slider_items.length - 1) {
            cur_slide = 0;
        } else {
            cur_slide++;
        }
        move(prev_slide, cur_slide, slider_items);
    });
    prev.addEventListener('click', () => {
        let prev_slide = cur_slide;
        if (cur_slide == 0) {
            cur_slide = slider_items.length - 1;
        } else {
            cur_slide--;
        }
        move(prev_slide, cur_slide, slider_items);
    });
}
function move(prev_slide, cur_slide, slider_items) {
    slider_items[prev_slide].classList.remove('active');
    slider_items[prev_slide].classList.add('no-active');
    slider_items[cur_slide].classList.remove('no-active');
    slider_items[cur_slide].classList.add('active');
}
