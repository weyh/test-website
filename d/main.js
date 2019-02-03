let textareaOLD = "";
let inputOLD = "";

function Start() {
  $('#t').css('height', window.innerHeight - 23);
}

function FixedUpdate() {
  input();
  Filter();

  setTimeout(() => FixedUpdate(), 1000);
}

function input() {
  let inputNew = $('#c').val();
  let textarea = $('#t').val();
  let i = inputNew.split(" ");

  if (inputNew != inputOLD && inputNew.length > 0 && i.length <= 1)
  {
    var l = calc(textarea, inputNew) - 1;
    $('.special').text(`${inputNew}: ${l}`);
  }
  else if (inputNew.length == 0)
  {
    $('.special').text("Your char: 0");
  }
  else if (i.length > 1)
  {
    $('.special').text("A Space in the system");
  }
  inputOLD = inputNew;
}


function Filter() {
  let textarea = $('#t').val();

  if (textareaOLD != textarea)
  {
    let t = textarea.split(" ");
    $('.console').text(`Lines: 0`);
    $('.spaces').text(`Spaces: ${t.length - 1}`);

    if (t.length - 1 > 0)
    {
      var l = calc(textarea, "\n");
      $('.console').text(`Lines: ${l}`);
    }
  }
  textareaOLD = textarea;
}

function abcSort() {
  $('#t').val(
    $('#t').val().split(" ").sort().join("\n")
  );
}

function abcSortEnter() {
  $('#t').val(
    $('#t').val().split("\n").sort().join("\n")
  );
}

function calc(i, j)
{
  return i.split(j).length;
}

$(document).ready(() => {
  Start();
  FixedUpdate();
});
