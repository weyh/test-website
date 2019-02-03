/*
-developperJS doesn't rely on external sources
-To disable for a short time just type: DevMode = false;
*/

var DevMode = true;
var clearConsoleOnStart = true;
var ptxt = true;
var txt = [
  "---------------------------",
  " developperJS is running..",
  "---------------------------"
];

window.onload = function() {
  setTimeout(function() {
    if (DevMode) {
      if (clearConsoleOnStart)
        console.clear();

      if (ptxt)
        for (var i in txt) {
          console.log(txt[i]);
        }
    }
  }, 100);
}

function reloadPage(time, unit) {
  switch (unit) {
    case "ms":
      break;
    case "s":
      time = time * 1000;
      break;
    case "m":
      time = time * 60000;
      break;
    case "h":
      time = time * 3600000;
  }

  if (DevMode) {
    setTimeout(function() {
      document.location = document.location;
    }, time);
  }
}
