const beforeImg = document.querySelector('.senbei-bg.before');
const afterImg = document.querySelector('.senbei-bg.after');
const text1 = document.querySelector('.senbei-text.text1');
const text2 = document.querySelector('.senbei-text.text2');

let isBefore = true;

setInterval(() => {
  if (isBefore) {
    beforeImg.classList.remove('active');
    afterImg.classList.add('active');

    text1.classList.add('show');
    text2.classList.add('show');
  } else {

    beforeImg.classList.add('active');
    afterImg.classList.remove('active');

    text1.classList.remove('show');
    text2.classList.remove('show');
  }

  isBefore = !isBefore;
}, 1500); 
