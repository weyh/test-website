var selected = [];
var correct = ["serious", "organised", "outgoing", "immature", "IQ fighter", "patriotic", "secretive"];
var final = [];

$(document).ready(() => {
  $('.done').css({"visibility": "hidden", "opacity": "0"});
});

function check(length) {
  for (var i = 0; i < length; i++) {
    selected[i] = $(`.a${i} select :selected`).text();
  }

  for (var i = 0; i < selected.length; i++) {
    if (selected[i].toLowerCase() != correct[i].toLowerCase()) {
      $(`.a${i} select`).addClass("wrong");
      final[i] = 1;
    } else {
      $(`.a${i} select`).removeClass("wrong");
      final[i] = 0;
    }
  }

  let bool = true;
  for (f of final) {
    if (f == 1) {
      bool = false;
      break;
    }
  }

  if (bool) {
    $(`.btn`).removeClass("gray");
    $('.done').css({"visibility": "visible",
    "opacity": "1"});
  }
}
