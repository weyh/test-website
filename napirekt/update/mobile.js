var last;
var c = ["<!--Title-->",
  "<!--Title End-->",
  "<!--Text-->",
  "<!--Text End-->",
  "Last Update Date: "
];

$(document).ready(function() {
  last = $("#last")

  setTimeout(function() {
    $(".t").css({"transition": "2s", "font-size": "1.4em"});
  }, 3100);

  loadPosts();
});

function deleteElement(element, time) {
  if (element != null) {
    setTimeout(function() {
      $(element[0]).detach();
    }, time);
  }
}

function loadPosts() {
  $.ajax({
    url: '../template/template.html',
    type: 'GET',
    success: function(data) {
      $(".t").html($('<title>').append(data).find( '.UpdateLog title').text());

      var i = $('<div>').append(data).find('.UpdateLog top');
      var j = $('<div>').append(data).find('.UpdateLog text');
      var time = $('<div>').append(data).find('.UpdateLog top')[0].innerHTML;

      for (var k = i.length; 0 < k + 1; k--) {
        $(".body").after("<div class='content animated fadeInRight content" + k + "'>" + c[0] + "<h3></h3>" + c[1] + c[2] + "<h4></h4>" + c[3] + "</div>");
      }
      $(".body").append("<div class='length'>"+ c[4] + time + "</div>");
      for (var k = i.length; 0 < k + 1; k--) {
        $(".content" + k + "> h3").html(i[k]);
        $(".content" + k + "> h4").html(j[k]);
      }

      $('.content'+i.length).remove();
    }
  });
}
