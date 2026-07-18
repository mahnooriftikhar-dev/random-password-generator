const clickbutton = document.getElementById("button");
let random_password = document.getElementById("result");
function generate() {
    let upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    length = upper_letters.length;
    let random_index = Math.floor(Math.random()*length);
    random_index_number = upper_letters[random_index];
    console.log(random_index_number);
}


