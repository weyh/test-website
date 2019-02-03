var h = new Date().getHours();
var m = new Date().getMinutes();

var massageTrack = true;

if (5 < h && h < 21 && 00 <= m && m <= 59) {
  //day
  day();
  } else {
  //night
  night();
}

function day() {
  changeBack('def');
}

function night() {
  changeBack('nm');
}

function changeBack(x) {
  if (x == 'def') {
    var back = '#22272a'; //hátér
    var h = '#fff'; //hegy
    var hh = '#e85151'; //hketo
    var menu = '#333' // menu
    var menub = '#fff'; //menu széle
    var themes = '#fff'; //Themes

    var theme = document.getElementById('themes');
    theme.style.color = themes;

    var body = document.getElementById('body');
    body.style.backgroundColor = back;

    var a = document.getElementById('hegy');
    a.style.color = h;

    var b = document.getElementById('hketo');
    b.style.color = hh;

    var c = document.getElementById('menu');
    c.style.backgroundColor = menu;
    c.style.borderColor = menub;

    massageTrack = true;
    massage();
  } else {
    var back = '#091219'; //hátér
    var h = '#fff'; //hegy
    var hh = '#bdc7c1'; //hketo
    var menu = '#142634' // menu
    var menub = '#003459'; //menu széle
    var themes = '#7e8889'; //Themes

    var theme = document.getElementById('themes');
    theme.style.color = themes;

    var body = document.getElementById('body');
    body.style.backgroundColor = back;

    var a = document.getElementById('hegy');
    a.style.color = h;

    var b = document.getElementById('hketo');
    b.style.color = hh;

    var c = document.getElementById('menu');
    c.style.backgroundColor = menu;
    c.style.borderColor = menub;

    massageTrack = false;
    massage();
  }
}

function massage() {
  var text;

  if (massageTrack) {
    text = 'Have a nice day!';
  } else {
    text = 'Good evening!';
  }

  var NewDiv = document.createElement('div');
  NewDiv.id = 'daynight';
  NewDiv.className = 'animated fadeIn';
  document.getElementsByTagName('body')[0].appendChild(NewDiv);
  NewDiv.innerHTML = text;

  massageFadeOut();
}

function massageFadeOut() {
  var div = document.getElementById('daynight');

  setTimeout(function () {
    div.className = 'animated fadeOut';

    setTimeout(function () {
      div.remove();
    }, 1100);
  }, 2000);
}
