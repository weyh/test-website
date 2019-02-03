var ajax = new XMLHttpRequest();
ajax.open("GET", "input.html", true);
ajax.send();

ajax.onreadystatechange = function() {
	if (ajax.readyState == 4 && ajax.status == 200) {
    var splitedByEnter = ajax.responseText.split("\n");
    var joinedString = "<ul class='inputList'>";

    for(var i = 0; i < splitedByEnter.length; i++){
      if(splitedByEnter[i] != "")
        joinedString += "<li>" + splitedByEnter[i] + "</li>";
    }
    joinedString += "</ul>";

    document.getElementById("main").innerHTML = "";
    appendHtml(document.getElementById("main"), joinedString);
	}
}

function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;

  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }

}
