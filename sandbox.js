const images = document.querySelectorAll(".imageslider");

let i = 0;
setInterval(function () {
  if (i == 0) {
    images[i].style.display = "block";
  } else if (i == images.length) {
    images[i - 1].style.display = "none";
    images[0].style.display = "block";
    i = 0;
  } else {
    images[i - 1].style.display = "none";
    images[i].style.display = "block";
  }

  i++;
}, 4000);

const popupTxt = document.querySelectorAll("#deci");

let s = 0;
setInterval(function () {
  if (s == 0) {
    popupTxt[i].style.display = "block";
  } else if (s == popupTxt.length) {
    popupTxt[s - 1].style.display = "none";
    popupTxt[0].style.display = "block";
    s = 0;
  } else {
    popupTxt[s - 1].style.display = "none";
    popupTxt[s].style.display = "block";
  }

  s++;
}, 4000);