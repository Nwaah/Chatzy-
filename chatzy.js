var color_green = 'green';
var words = Array();
words.push(Array(" Feriahii ", " butt "));
words.push(Array(" Feriahi ", " butt "));
words.push(Array(" feriahii ", " butt "));
words.push(Array(" feriahi ", " butt "));
words.push(Array(" faggot ", " senpai "));
words.push(Array(" fag ", " senpai "));
words.push(Array(" :3 ", " <img src='http://thumb1.shutterstock.com/display_pic_with_logo/4133056/444079624/stock-vector-cat-on-a-white-background-vector-illustration-cat-cat-face-cat-icon-cat-logo-cat-art-cat-444079624.jpg' height='50px' width='50px'/> "));
words.push(Array( " (mlg) ", " <img src='http://i.imgur.com/iYjFs9i.gif' height='50' width='50'> "));
words.push(Array(" OP ", " faggot "));
words.push(Array(" op ", " faggot "));
words.push(Array(" mary ", " bitch "));
words.push(Array(" Mary ", " bitch "));
words.push(Array(" :v ", " FUCK YOU RIFF WHAT DOES IT EVEN MEAN!!! "));
words.push(Array(" thanks mr skeltal ", " <img src='https://media.giphy.com/media/B9zXf5ky9wW9q/giphy.gif'> "));

var users = Array();
users.push(Array("Nwaah", userIcon("http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/06/06c6085be159af80c4bfa02e2543511f1ef7814f_full.jpg", "Nwaah")));
users.push(Array("Riff", userIcon("http://img.ctrlv.in/img/16/07/15/578926311e8e0.png", "Riff")));
users.push(Array("CLoud5", userIcon("https://media.giphy.com/media/fbttYf593V5kc/giphy.gif", "CLous5")));
users.push(Array("Feriahii", userIcon("http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/07/07b3870b6a06da149c70f42fb88cebb2dc58f2e0_full.jpg", "Feriahi")));
users.push(Array("Feriahi", userIcon("http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/07/07b3870b6a06da149c70f42fb88cebb2dc58f2e0_full.jpg", "Feriahi")));
users.push(Array("AxallHasck", userIcon("https://65.media.tumblr.com/003e4c413067929442a8a1b3a7440473/tumblr_o5hrw5tNcF1r8uyogo1_500.jpg", "AxallHasck")));

function check() {
    var all = document.getElementsByClassName('a');
    for (var i = 0; i < all.length; i++) {
        greenify(all[i]);
        usercheck(all[i]);
        //spellcheck(all[i]);
        showImage(all[i]);
        all[i].setAttribute('class', 'q');
        //all[i].setAttribute('align', 'top');
    }
}

function greenify(text) {
    var a = text.textContent;
    var greater = a.search(/:/);
    if (greater > -1) {
        greater = a.charAt(greater + 2);
        if (greater == '>') {
            var html = text.innerHTML;
            var parts = html.split('</b>: ');
            text.innerHTML = parts[0] + '</b>: ' + '<span style=\'color: ' + color_green + '\'>' + parts[1] + '</span>';
        }
    }
}

window.setInterval(check, 1000);

function spellcheck(text) {
    var html = text.innerHTML.split("</b>:");
    var message = html[1]+" ";
    for (var i = 0; i < words.length; i++) {
        var regexp = RegExp(words[i][0], "g");
        message = message.replace(regexp, words[i][1]);
    }
    text.innerHTML = html[0] + "</b>:" + message;

}

function usercheck(text) {
    var html = text.innerHTML.split("</b>: ");
    var name = html[0];
    for (var i = 0; i < users.length; i++) {
        var prev = name;
        name = name.replace(users[i][0], users[i][1]);
        if (name != prev)
            break;
    }
    text.innerHTML = name + "</b>: " + html[1];
}

function getUserPart(text)
{

}

function userIcon(img, nick) {
    return "<div align=left><img src='" + img + "' width='30' height='30' align='left'>" + "<span align='right top'>" + nick + "</span></div>";
}

function showImage(text){
    var html = text.innerHTML.split("</b>:");
    var msg = html[1];
    var image = msg.match(/https?:\/\/.+\.((jpe?g)|(gif)|(png))/gi);
    
    if (image != null) {
        var inside = document.createTextNode(image);
        var a = text.getElementsByTagName("a")[0];
        a.innerHTML = "<img src='"+image+"' width=200 height=200>";
    }
}