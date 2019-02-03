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
    img.src = '../../img/menuopenmode.png';
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
    img.src = '../../img/menuclose.png';
    menuplus.style.height = '0%';
    menuplus.style.width = '0px';
    menuplus.style.zIndex = '-100';

    menuabout.style.display = '';
    cookie.style.display = '';

    trackMenu = true;
  }

}

//themes

function changeThemes(x) {

  changeBackground(x.value);

  if (devModeOn) {
    $("#themes").css("color", "#90EE90");
  }
  setTimeout(function() {
    saveCookies("userStyle", x.value);
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

function saveCookies(cookieName, attribute) {
  myCookies[cookieName] = attribute;

  var expiresAttrib = new Date();
  expiresAttrib.setDate(expiresAttrib.getDay() + 30);
  expiresAttrib.toString();

  var cookieString = "";
  for (var key in myCookies) {
    cookieString = key + "=" + myCookies[key] + ";" + expiresAttrib + ";";
    document.cookie = cookieString;
  }
}

function loadCookies() {
  //Start Reuseable Section
  myCookies = {};
  var kv = document.cookie.split(";");
  for (var id in kv) {
    var cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
  //End Reuseable Section

  changeBackground(myCookies["userStyle"]);
  document.getElementById('backgraund').value = myCookies["userStyle"];

  if (myCookies["DevMode"] == "true") {
    for (var i = 0; i < 2; i++) {
      devMode(true, false);
    }
  }

  if (myCookies["userStyle"] == null) {
    document.getElementById('backgraund').value = "def";
  }
}

function hidenr() {
  var h = $("#hegy")[0];
  var hh = $("#hketo")[0];
  var head = $("#head")[0];
  var frame = $("#frame0")[0];

  setTimeout(function() {
    h.style.transition = '5s';
    hh.style.transition = '4.8s';

    h.style.fontSize = '2.2em';
    hh.style.fontSize = '1.5em';

    setTimeout(function() {
      frame.style.marginTop = '5%';
      hideBorder();
      head.style.border = '0';

      h.style.position = 'fixed';
      h.style.top = '0.6%';
      h.style.right = '2%';
      h.style.padding = '0';
      h.style.margin = '0';
      h.style.fontSize = '2.3em';

      hh.style.position = 'fixed';
      hh.style.top = '6.9%';
      hh.style.right = '2%';
      hh.style.padding = '0';
      hh.style.margin = '0';
      hh.style.fontSize = '1.6em';
    }, 5000);
  }, 5000);
}

function hideBorder() {
  var classes = [".pirask", ".fask", ".girl", ".opf", ".mind", ".borg", ".foto"];

  for (var i = 0; i < classes.length; i++) {
    $(classes[i]).css("border-bottom", "1px solid #fff");

    if (classes[i] == classes[0] || classes[i] == classes[2] || classes[i] == classes[4] || classes[i] == classes[5]) {
      $(classes[i]).css("border-left", "1px solid #fff");
    } else {
      $(classes[i]).css("border-right", "1px solid #fff");
    }
  }

  var classesPic = [".piraskp", ".faskp", ".girlp", ".opfp", ".mindp", ".borgp", ".fotop"];

  for (var j = 0; j < classesPic.length; j++) {
    $(classesPic[j]).css("transform", "scale(1.1)");
  }
}

function mnap() {
  var frameO = $('#frame0')[0];
  var frameT = $('#dbody')[0];
  var h = $('#hegy')[0];
  var hh = $('#hketo')[0];

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
function devMode(j, f) {
  divDev = $('#dev')[0];

  if (j == true && f == true) {
    saveCookies("DevMode", "false");
  }

  if (dev == 2) {
    if (!j) {
      divDev.style.top = '15%';
      divDev.className = 'animated fadeIn';
      divDev.innerHTML = "Developer mode has been turned on";

      saveCookies("DevMode", "true");
    }

    $("#themes").css("color", "#90EE90");

    devModeOn = true;
    fadeoutdev(true);
  }

  if (dev == 4) {
    if (!j) {
      divDev.style.top = '15%';
      divDev.className = 'animated fadeIn';
      divDev.innerHTML = "Developer mode has been turned off";

      saveCookies("DevMode", "");
    }

    document.getElementById('themes').style = '';

    devModeOn = false;
    fadeoutdev(false);
  }

  if (dev < 4) {
    dev++;
  }
}

function fadeoutdev(x) {
  setTimeout(function() {
    divDev.className = 'animated fadeOut';
    divDev.style.top = '-15%';
  }, 5000);

  var divP = $('#rdev')[0];
  var divB = $('#ldev')[0];
  var divSpace = $('#spacedev')[0];
  var a = $('#Reload')[0];

  if (x) {
    divP.style.visibility = 'visible';
    divP.style.display = 'inherit';
    divP.style.marginTop = '2%';
    divB.style.visibility = 'visible';
    divB.style.display = 'inherit';
    divB.style.marginTop = '2%';

    a.innerHTML = "> RELOAD <";
    a.style.fontSize = '1.5em';
    a.addEventListener('click', function() {
      a.innerHTML = ">RELOAD<";
      a.style.color = "rgba(255, 255, 255, 0.8)";
      a.style.transition = "0.5s";
      setTimeout(function() {
        document.location = "index.html";
      }, 600);
    });

    divSpace.innerHTML = "Developer Mode";
    divSpace.style.textDecoration = "underline";
    divSpace.style.paddingTop = '7%';
    divSpace.style.paddingBottom = '2.8%';
    divSpace.style.fontSize = '1.3em';
    divSpace.style.textAlign = 'center';

    var space = document.createElement('div');
    space.id = 'space';
    document.getElementById('frame0').appendChild(space);
  } else {
    divP.style.visibility = 'hidden';
    divP.style.display = 'none';
    divB.style.visibility = 'hidden';
    divB.style.display = 'none';

    a.innerHTML = " ";
    divSpace.innerHTML = " ";
    var space = document.getElementById('space');
    space.parentNode.removeChild(space);
  }
}

function changeBackground(x) {

  if (x == 'def') {
    $("#themes").css("color", "#fff");

    $("#body").css("background-color", "#22272a");

    $("#hegy").css("color", "#fff");

    $("#hketo").css("color", "#e85151");

    $("#menu").css("background-color", "#333");
    $("#menu").css("border-color", "#fff");

  } else if (x == 'red') {
    $("#themes").css("color", "red");

    $("#body").css("background-color", "#961130");

    $("#hegy").css("color", "#fff");

    $("#hketo").css("color", "#edf2f4");

    $("#menu").css("background-color", "#2b2d42");
    $("#menu").css("border-color", "#d80032");

  } else if (x == 'blue') {
    $("#themes").css("color", "#00a8e8");

    $("#body").css("background-color", "#005772");

    $("#hegy").css("color", "#fff");

    $("#hketo").css("color", "#ec3797");

    $("#menu").css("background-color", "#003343");
    $("#menu").css("border-color", "#00c2ff");

  } else if (x == 'bl') {
    $("#themes").css("color", "#00a8e8");

    $("#body").css("background-color", "#27476e");

    $("#hegy").css("color", "#fff");

    $("#hketo").css("color", "#e85151");

    $("#menu").css("background-color", "#333");
    $("#menu").css("border-color", "#00b7ff");

  } else if (x == 'nm') {
    $("#themes").css("color", "#7e8889");

    $("#body").css("background-color", "#091219");

    $("#hegy").css("color", "#fff");

    $("#hketo").css("color", "#bdc7c1");

    $("#menu").css("background-color", "#142634");
    $("#menu").css("border-color", "#003459");

  } else {
    $("#themes").css("color", "#eb1e45");

    $("#body").css("background-color", "#1a2632");

    $("#hegy").css("color", "#1ea4eb");

    $("#hketo").css("color", "#889aa8");

    $("#menu").css("background-color", "#212d3b");
    $("#menu").css("border-color", "#bdc7c1");

  }
}
