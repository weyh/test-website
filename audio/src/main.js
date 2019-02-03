$(document).ready(() => Start());


function Start() {
    css();
    loadJSON();
}

function css() {
    if(isMobile())
        $("#css").attr("href", "src/mobile.css");
}

function loadJSON()
{
    var frame = $("#frame");

    $.getJSON("input.json", (data) =>
    {
        loadTiles(frame, data);
    })
    .fail((jqXHR, textStatus, errorThrown) =>
    {
        frame.html("<span style='color: var(--red);'>Error! Request faild!</span>");
        throw Error("JSON request faild!");
    });
}

function loadTiles(frame, audio) {
    frame.html("");

    $.each(audio.music, (key, music) =>
    {
        var text = frame.html();
        let imgURL = "./src/img/def.png";

        if(music.royaltytype.toLowerCase() != "special")
        {
            $.each(audio.licenses, (key, license) =>
            {
                if(license.name.toLowerCase() == music.royaltytype.toLowerCase())
                {
                    music.royalty = license.link;
                    imgURL = license.img;
                }
                else if (license.altname.toLowerCase() == music.royaltytype.toLowerCase())
                {
                    music.royalty = license.link;
                    imgURL = license.img;
                }
            });
        }

        text = text +
        "<div class='appended animated fadeIn'>"+
            "<name>Music name:</name> <b>" + music.name + "</b> <br>"+
            "<composer>Composer:</composer> " + "<composer_name>" + music.composer + "</composer_name> <br>"+
            "<royalty>Royalty type:</royalty> " + "<a href='" + music.royalty + "' target='_blank'>" + music.royaltytype.toUpperCase() +"</a> <br>"+
            "<a href='" + music.url + "' target='_blank'>Link</a>"+
            "<div class='container'>"+
                "<img class='logo' src=" + imgURL + " alt='license logo'>"+
            "</div>"
        "</div>";

        frame.html(text);
    });
}

function countHelper(i, max){
    switch(i){
        case 0:
            return " style='border-width: 0px 1px 0px 2px;'";
        case max:
            return " style='border-width: 0px 2px 0px 1px'";
        default:
            return "";
    }
}
