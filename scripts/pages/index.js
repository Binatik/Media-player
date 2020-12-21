import { musicInit } from '../media/music.js';
import { radioInit } from '../media/radio.js';
import { videoInit } from '../media/video.js';

const tabBtnMedia = document.querySelectorAll('.tab__btn');
const mediaTab = document.querySelectorAll('.media');

function checkTabLength(btn, content){
    return btn.length === content.length ? btn.length : 0;
}

function clickBtn(event, tab, index){
    const length = checkTabLength(tabBtnMedia, mediaTab);

    if (length !== 0){
        for (let i = 0; i<length; i++){
            tabBtnMedia[i].classList.remove('active');
            mediaTab[i].classList.remove('active');
        }
    }
    tab.classList.add('active');
    mediaTab[index].classList.add('active');
}

tabBtnMedia.forEach((tab, i) => tab.addEventListener('click', (e) =>
    (
        clickBtn(e, tab, i)))
);


musicInit();
radioInit();
videoInit();

