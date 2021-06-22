async function pagesetup() {
    //Build the list items
    var f1 = await fetch("./mp3/mp3_manifest.json");
    var f2 = await f1.json();
    var f = await f2["files"];
    var h = "";
    for (i in f) {
        let s1 = "<li class=\"soundbutton\" id=\"";
        let s2 = f[i]["id"];
        let s3 = "\"><input class=\"btn btn-lg btn-primary\" type=\"button\" value=\"";
        let s4 = f[i]["name"];
        let s5 = "\" onclick=\"playAudio(\'";
        let s6 = f[i]["filename"];
        let s7 = "\')\"> </li>";
        let s = s1 + s2 + s3 + s4 + s5 + s6 + s7;
        
        h = h + s;
    }
    h = h + "<li class=\"soundbutton\"><input  id=\"stopbtn\" class=\"btn btn-lg btn-error\" type=\"button\" value=\"Stop\" onclick=\"stopAudio()\"></li>";
    document.getElementById("soundlist").innerHTML = h;
    document.getElementById("stopbtn").disabled = true;
    document.getElementById("stopbtn").classList.add("disabled");
    //document.getElementById("stopbtn").classList.remove("btn-error");
}

function playAudio(mp3) {
    var b = document.getElementById('stopbtn');
    var e = document.getElementById('audioctl');
    e.src = "./mp3/" + mp3;
    //e.addEventListener("ended", stopAudio()); doesnt work lol
    e.play();
    b.disabled = false;
    b.classList.remove("disabled");
}

function stopAudio() {
    var b = document.getElementById('stopbtn');
    var e = document.getElementById('audioctl');
    e.pause();
    b.disabled = true;
    b.classList.add("disabled");
}

document.addEventListener("DOMContentLoaded", pagesetup());
