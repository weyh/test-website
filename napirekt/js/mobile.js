var last;

$(document).ready(function () {
  last = $("#last")

  setTimeout(function () {
    deleteElement($( ".t" ), 1100);
    $(".t").addClass( "fadeOut" );
  }, 3000);

  loadPosts();
});

function deleteElement(element, time) {
  if (element != null) {
    setTimeout(function () {
      $(element[0]).detach();;
    }, time);
  }
}

function loadPosts() {
  $.ajax({
    method:'GET',
    url:'https://ask.fm/Dnzsofi',
    dataType: "html"
  }).done(function(data) {
    console.log(data);
  });
}
