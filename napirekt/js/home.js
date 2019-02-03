var trackMenu = true;
var img, nav, head, cssMaster, cssMenu, close;
var myCookies = {};

$(document).ready(function() {
  img = $("#menuimg")[0];
  nav = $(".navlinks")[0];
  head = $(".head")[0];
  close = $(".close")[0];

  cssMaster = $("#master")[0];
  cssMenu = $("#menu")[0];

  loadCookies();
});

//cookies
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

  changeTheme(myCookies["userStyle"]);

  $("#backgraund")[0].value = myCookies["userStyle"];

  if(myCookies["userStyle"] == 0  || document.cookie == 0){
    $("#backgraund")[0].value = 'def';
  }
}
//cokies END

function menupng() {
  if (trackMenu == true) {
    img.src = 'img/menucloseimg.png';

    nav.className = "navlinks animated fadeInDown";
    nav.style.visibility = "visible";
    nav.style.display = "inherit";

    close.className = "close animated fadeIn";
    close.style.visibility = "visible";
    close.style.display = "inherit";

    trackMenu = false;
  } else {
    img.src = 'img/menuopenimg.png';

    nav.className = "navlinks animated fadeOutUp";
    close.className = "close animated fadeOut";
    setTimeout(function () {
      nav.style = "";
      close.style = "";
    }, 550);

    trackMenu = true;
  }
}

function btn(b) {
  if(b == 0){
    about = $("#aboutimg")[0];

    about.style.filter = 'blur(1px)';

    setTimeout(function () {
      document.location = "about.html";
    }, 300);
  }
}

function themes(x) {
  changeTheme(x.value);
  saveCookies("userStyle", x.value);
}

function changeTheme(x) {

  if(x == 'red'){
    //red
    cssMaster.href='css/altcss/master.css';
    cssMenu.href='css/altcss/menu.css';
  } else if (x == 'green') {
    //green
    cssMaster.href='css/altcss/mastergreen.css';
    cssMenu.href='css/altcss/menugreen.css';

  } else if (x == 'blue') {
    //blue
    cssMaster.href='css/altcss/masterblue.css';
    cssMenu.href='css/altcss/menublue.css';

  }  else if (x == 'purple') {
    //purple
    cssMaster.href='css/altcss/masterpurple.css';
    cssMenu.href='css/altcss/menupurple.css';

  }  else if (x == 'nightmode') {
    //nightmode
    cssMaster.href='css/altcss/masternm.css';
    cssMenu.href='css/altcss/menunm.css';
  } else if (x == 'def') {
    //def
    cssMaster.href='css/master.css';
    cssMenu.href='css/menu.css';
  }
}
