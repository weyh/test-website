var i = true;

function startTime() {
  //time
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('dt').innerHTML =
    h + ":" + m;

  if (i) {
    //date
    i = false;
    day();
    date();

    //day/nightmode
    if (6 < h && h < 21 && 00 <= m && m <= 59) {
      //day
      } else {
      //night
      nightmode();
    }
  }

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function date() {
  var ymd = new Date();
  var year = ymd.getFullYear();
  var month = ymd.getMonth() + 1;
  var day = ymd.getDate()

  if(month < 10){
    month = '0' + month;
  }

  ymd = year + "/" + month + "/" + day;
  document.getElementById('dde').innerHTML = ymd;
}

var n;

function day() {
  var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Vasárnap";
    weekday[1] = "Hétfő";
    weekday[3] = "Kedd";
    weekday[2] = "Szerda";
    weekday[4] = "Csütörtök";
    weekday[5] = "Péntek";
    weekday[6] = "Szombat";

    n = weekday[d.getDay()];
    document.getElementById("dd").innerHTML = n;
}

function nightmode() {
  var body = document.getElementById('dbody');

  body.style.color = '#1ea4eb';
  body.style.backgroundColor = '#1a2632'
}

var track = 0;
function amoled() {
  if (track == 5) {
    var body = document.getElementById('dbody');
    var t = document.getElementById('dt');

    t.style.color = '#fff';
    body.style.color = '#848383';
    body.style.backgroundColor = '#000'
  } else {
    track++;
  }
}
