const Words = ["COMPUTER PROGRAMMING", "COMPUTER GRAPHICS",
    "TOMATO", "BANANA", "POTATO", "AVOCADO", "DOCTOR STRANGE", "THOR", "WONDER WOMAN", "DATABASE", "MALAYSIA",
    "CAMBODIA", "SPRING",
    "LACOSTE", "DORAEMON", "TROJAN HORSE", "SPYWARE", "WINTER", "APRIL", "BANGKOK"];

const pic = ["hang2/h1.png", "hang2/h2.png", "hang2/h3.png", "hang2/h4.png", "hang2/h5.png", "hang2/h6.png", "hang2/h7.png", "hang2/h8.png"
    , "hang2/h9.png", "hang2/h10.png"];

const hint = ["Subjects in the Department of Information Technology", "Subjects in the Department of Information Technology", "Selected Category is from Fruit",
    "Selected Category is from Fruit", "Selected Category is from Vegetable", "Selected Category is from Vegetable", "Selected Category is The movie from Marvel",
    "Selected Category is The movie from Marvel", "Selected Category is The movie from DC", "Subjects in the Department of Information Technology",
    "Selected Category is Asian countries", "Selected Category is Asian countries", "Selected Category is season", "Selected Category is Shoes brand name",
    "Selected Category is Cartoon characters in Japan", "Selected Category is Computer virus name", "Selected Category is Computer virus name",
    "Selected Category is season", "Selected Category is of Month name", "Selected Category is Name of province in Thailand"];
let s = Math.floor(Math.random() * 19);
let text = [];
let sum = "";
let n = 0;
let live = 10;
for (let i = 0; i < Words[s].length; i++) {
    if (Words[s].charAt(i) === " ") {
        text[i] = " - ";
    } else {
        text[i] = " __ ";
    }
    sum += text[i];
}
document.getElementById("span").innerHTML = "<h2><b> <font color='white'>" + sum + "</font></b></h2>";
document.getElementById("hint").innerHTML = "Hint : " + hint[s];

function go() {
    window.location = 'hangman ver.aor.html';
}
function check(values) {
    ch = document.getElementById(values).value;
    let checkwin = 0;
    //document.getElementById("t1").innerHTML = ch;
    sum = "";
    let check = true;

    document.getElementById(values).style.display = 'none';

    for (let i = 0; i < Words[s].length; i++) {
        if (Words[s].charAt(i) == ch) {
            text[i] = ch;
            check = false;
        }
    }

    for (let i = 0; i < Words[s].length; i++) {
        sum += text[i];
        if (text[i] == " __ ") checkwin++;
    }

    if (check) {
        live -= 1;
        document.getElementById("live").innerHTML = "He has " + live + " lives left";
        document.getElementById('myImage').src = pic[n];
        n += 1;
    }
    if (live == 0) {
        document.getElementById("btn").style.display = 'block';
        document.getElementById("ans").innerHTML = "<font color='red'><h1><b>" + Words[s] + "</b</h3></font>";
        document.getElementById("win").innerHTML = "<font color='red'><h3>Oh no, you've hanged him.</h1></font>";
    }

    if (checkwin == 0) {
        document.getElementById("btn").style.display = 'block';
        document.getElementById('myImage').src = "hang2/h11.png";
        document.getElementById("win").innerHTML = "<font color='red'><h1><b>Well done, you've saved him.</b</h1></font>";
    }
    document.getElementById("span").innerHTML = "<h2><b> <font color='white'>" + sum + "</font></b></h2>";
}