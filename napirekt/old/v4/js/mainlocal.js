// JavaScript Document
//Copyright by nobody :DDD


//menupng change
var trackMenu = true;
var tD = true;
var dev = 1;
var divDev;
var devModeOn = false;

function menupng() {
  var img = document.getElementById('menuimg');
  var menuplus = document.getElementById('back');
  var menuabout = document.getElementById('menuabout');
  var cookie = document.getElementById('cookie');

  if (trackMenu == true) {
    img.src = 'img/menuopenmode.png';
    menuplus.style.height = '100%';
    menuplus.style.width = '200px';
    menuplus.style.zIndex = '100';

    setTimeout(function() {
      menuabout.className = 'animated fadeIn';
      menuabout.style.display = 'inherit';
      cookie.className = 'animated fadeIn';
      cookie.style.display = 'inherit';
    }, 800);

    trackMenu = false;
  } else {
    img.src = 'img/menuclose.png';
    menuplus.style.height = '0%';
    menuplus.style.width = '0px';
    menuplus.style.zIndex = '-100';

    menuabout.style.display = '';
    cookie.style.display = '';

    trackMenu = true;
  }

}

//themes

function changeBackground(x) {

  if (x.value == 'def') {
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

  } else if (x.value == 'red') {
    var back = '#961130'; //hátér
    var h = '#fff'; //hegy
    var hh = '#edf2f4'; //hketo
    var menu = '#2b2d42' // menu
    var menub = '#d80032'; //menu széle
    var themes = 'red'; //Themes

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

  } else if (x.value == 'blue') {
    var back = '#005772'; //hátér
    var h = '#fff'; //hegy
    var hh = '#ec3797'; //hketo
    var menu = '#003343' // menu
    var menub = '#00c2ff'; //menu széle
    var themes = '#00a8e8'; //Themes

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

  } else if (x.value == 'bl') {
    var back = '#27476e'; //hátér
    var h = '#fff'; //hegy
    var hh = '#e85151'; //hketo
    var menu = '#333' // menu
    var menub = '#00b7ff'; //menu széle
    var themes = '#00a8e8'; //Themes

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

  } else if (x.value == 'nm') {
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

  } else if (x.value == 'tnm') {
    var back = '#1a2632'; //hátér
    var h = '#1ea4eb'; //hegy
    var hh = '#889aa8'; //hketo
    var menu = '#212d3b' // menu
    var menub = '#bdc7c1'; //menu széle
    var themes = '#eb1e45'; //Themes

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

  } else {
    console.log("ERROR! Unknow value!");
    Alert('ERROR! -Unknow value!');
  }

  if (devModeOn) {
    document.getElementById('themes').style.color = '#90EE90';
  }
  setTimeout(function() {
    saveCookies(x.value);
  }, 100);
}

function gratings() {
  //loadCookies
  loadCookies()
  //text
  var h = document.getElementById('hegy');

  h.style.fontSize = '6em';

  setTimeout(function() {
    h.style = ' ';
    h.style.transition = '2.3s';
    hidenr();
  }, 3000);
}

var myCookies = {};

function saveCookies(styleOfThePage)
{
	localStorage.userStyle = styleOfThePage.toString();
}
function loadCookies()
{
  changeBackgroundCookie(localStorage.userStyle.toString());
  document.getElementById('backgraund').value = localStorage.userStyle;
}

function changeBackgroundCookie(x) {
  document.getElementById('rektrekt').innerHTML = x;
  if (x == 'def') {
    var h = '#fff'; //hegy

    document.getElementById('themes').style.color = h;

    document.getElementById('body').style.backgroundColor = '#22272a';

    document.getElementById('hegy').style.color = h;

    document.getElementById('hketo').style.color = '#e85151';

    var c = document.getElementById('menu');
    c.style.backgroundColor = '#333';
    c.style.borderColor = h;

  } else if (x == 'red') {
    var h = '#fff'; //hegy
    var menu = '#2b2d42' // menu
    var menub = '#d80032'; //menu széle

    document.getElementById('themes').style.color = 'red';

    document.getElementById('body').style.backgroundColor = '#961130';

    document.getElementById('hegy').style.color = h;

    document.getElementById('hketo').style.color = h;

    var c = document.getElementById('menu');
    c.style.backgroundColor = menu;
    c.style.borderColor = menub;

  } else if (x == 'blue') {
    var menu = '#003343' // menu
    var menub = '#00c2ff'; //menu széle

    document.getElementById('themes').style.color = '#00a8e8';

    document.getElementById('body').style.backgroundColor= '#005772';

    document.getElementById('hegy').style.color = '#fff';

    document.getElementById('hketo').style.color = '#ec3797';

    var c = document.getElementById('menu');
    c.style.backgroundColor = menu;
    c.style.borderColor = menub;

  } else if (x == 'bl') {
    var menu = '#333' // menu
    var menub = '#00b7ff'; //menu széle

    document.getElementById('themes').style.color = '#00a8e8';

    document.getElementById('body').style.backgroundColor ='#27476e';

    document.getElementById('hegy').style.color = '#fff';

    document.getElementById('hketo').style.color = '#e85151';

    var c = document.getElementById('menu');
    c.style.backgroundColor = menu;
    c.style.borderColor = menub;

  } else if (x == 'nm') {
    var menu = '#142634' // menu
    var menub = '#003459'; //menu széle

    document.getElementById('themes').style.color = '#7e8889';

    document.getElementById('body').style.backgroundColor = '#091219';

    document.getElementById('hegy').style.color = '#fff';

    document.getElementById('hketo').style.color = '#bdc7c1';

    var c = document.getElementById('menu');
    c.style.backgroundColor = menu;
    c.style.borderColor = menub;

  } else {
    var menu = '#212d3b' // menu
    var menub = '#bdc7c1'; //menu széle

    document.getElementById('themes').style.color = '#eb1e45';

    document.getElementById('body').style.backgroundColor = '#1a2632';

    document.getElementById('hegy').style.color = '#1ea4eb';

    document.getElementById('hketo').style.color = '#889aa8';

    var c = document.getElementById('menu');
    c.style.backgroundColor = menu;
    c.style.borderColor = menub;
  }
}

function hidenr() {
  var h = document.getElementById('hegy');
  var hh = document.getElementById('hketo');

  setTimeout(function() {
    h.style.transition = '5s';
    hh.style.transition = '4.8s';

    h.style.fontSize = '2.2em';
    hh.style.fontSize = '1.5em';
  }, 10000);
}

function mnap() {
  var frameO = document.getElementById('frame0');
  var frameT = document.getElementById('dbody');
  var h = document.getElementById('hegy');
  var hh = document.getElementById('hketo');

  if (tD) {
    frameO.style.visibility = 'hidden';
    frameO.style.display = 'none';

    h.style.visibility = 'hidden';
    h.style.display = 'none';
    hh.style.visibility = 'hidden';
    hh.style.display = 'none';

    frameT.style.visibility = 'visible';
    frameT.style.display = 'inherit';

    startTime();

    tD = false;
  } else {
    frameT.style.visibility = 'hidden';
    frameT.style.display = 'none';

    h.style.visibility = 'visible';
    h.style.display = 'inherit';
    hh.style.visibility = 'visible';
    hh.style.display = 'inherit';

    frameO.style.visibility = 'visible';
    frameO.style.display = 'inherit';

    tD = true;
  }
}

//dev mode
function devMode() {
  divDev = document.getElementById('dev');

  if (dev == 3) {
    divDev.style.top = '15%';
    divDev.className = 'animated fadeIn';
    divDev.innerHTML = "Developer mode has been turned on";

    document.getElementById('themes').style.color = '#90EE90';
    devModeOn = true;
    fadeoutdev(true);
  }

  if (dev < 8) {
    dev++;
  }
}

function fadeoutdev(x) {
  setTimeout(function() {
    divDev.className = 'animated fadeOut';
    divDev.style.top = '-15%';
  }, 5000);

  if (x) {
    var divP = document.getElementById('rdev');
    var divB = document.getElementById('ldev');
    var divSpace = document.getElementById('spacedev');

    divP.style.visibility = 'visible';
    divP.style.display = 'inherit';
    divB.style.visibility = 'visible';
    divB.style.display = 'inherit';

    divSpace.innerHTML = "Developer Mode";
    divSpace.style.textDecoration = "underline";
    divSpace.style.paddingTop = '7%';
    divSpace.style.paddingBottom = '2.8%';
    divSpace.style.fontSize = '1.3em';
    divSpace.style.textAlign = 'center';
  }
}
