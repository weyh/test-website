var t, txt, e;
var i = 0;

function start() {
  t = document.getElementById('t');
  txt = document.getElementById('tx');
  e = document.getElementById('ex');

  setTimeout(function () {
    e.style.visibility = "visible";
    e.className = "exit animated fadeInDownBig";

    text();
  }, 500);

  return t, txt, e;
}

function text() {
  setTimeout(function () {
    txt.style.visibility = "visible";
    txt.className = "txt animated fadeInDownBig";

    toph();
  }, 1100);
}

function toph() {
  setTimeout(function () {
    t.style.visibility = "visible";
    t.className = "title animated fadeInLeftBig";
    setTimeout(function () {
      document.getElementById('html').id = "lock";
      document.getElementById('body').id = "lock";
    }, 1000);
  }, 900);
}

function button(a) {
  setTimeout(function () {
    if (a == 1) {
      document.location = "tou.html";
    } else if (a == 2) {
      document.location = "game/index.html";
    } else if (a == 3) {
      document.location = "update/index.html";
    } else {
      e.style.boxShadow = "0px 0px 1000px #fff";
      setTimeout(function () {
        document.location = "index.html";
      }, 500);
    }
  }, 900);
}

function eegg() {
  i++;

  if (i == 2) {
    document.getElementById('egg').innerHTML = 'OMG!';
    document.getElementById('eegg').innerHTML = 'eXiT!4!44!4';
    var body = document.getElementById('body');

    body.style.backgroundColor = '#17a086';
  }
}
