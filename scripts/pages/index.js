import { musicInit } from '../media/music.js';
import { radioInit } from '../media/radio.js';
import { videoInit } from '../media/video.js';

const tabBtnMedia = document.querySelectorAll('.tab__btn');
const mediaTab = document.querySelectorAll('.media');

tabBtnMedia.forEach((tab, i) => tab.addEventListener('click', (e) =>
    (
        clickBtn(e, tab, i)))
    );

function clickBtn(event, tab, index){
    console.log(mediaTab[index]);
}


musicInit();
radioInit();
videoInit();

