var r = Math.floor((Math.random() * 5) + 1);

function main() {
  var img = document.getElementById('img');
  img.addEventListener("click", button);

  var text = document.getElementById('t');
  var by = document.getElementById('n');

  if (r == 1) {
    text.style.color = '#7e8889';
    text.className = 'title animated rubberBand';
    by.style.color = '#7e8889';
  } else if (r == 2) {
    text.style.color = '#2a9d8f';
    text.className = 'title animated shake';
    by.style.color = '#2a9d8f';
  } else if (r == 3) {
    text.style.color = '#50c9ce';
    text.className = 'title animated swing';
    by.style.color = '#50c9ce';
  } else if (r == 4) {
    text.className = 'title animated jello';
    text.style.color = '#e9c46a';
    by.style.color = '#e9c46a';
  } else{
    console.log('rekt');
  }
}

function button() {
  setTimeout(function() {
    document.location = "https://1drv.ms/f/s!ArWr3uVQdCZYn3D9Q8D2b-tSBvb1";
  }, 3200);
}
