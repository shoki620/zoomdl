const VIDEO_ELM = document.querySelector('video');
const VIDEO_SRC = VIDEO_ELM.src;  
document.body.insertAdjacentHTML('afterbegin', `<a href='${VIDEO_SRC}' download>alt + click here</a>`);