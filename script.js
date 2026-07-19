const clickbutton = document.getElementById("button");
let random_password = document.getElementById("result");
function generate() {
    //Creating 1 character UpperCase value for Random Password
    let upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // length of characters
    length = upper_letters.length;
    //making the characters length random 
    let random_index = Math.floor(Math.random()*length);
    //checking the 
    random_index_number = upper_letters[random_index];
    console.log(random_index_number);
}


