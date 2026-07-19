const clickbutton = document.getElementById("button");
let random_password = document.getElementById("result");
function generate() {

    //Creating 1 character UpperCase letter 
    let upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // length of characters
    length1 = upper_letters.length;

    //making the characters  random 
    let random_index1 = Math.floor(Math.random() * length1);

    //checking the specifc character  of the random number
    random_index_num1 = upper_letters[random_index1];

    console.log(random_index_num1);

    //creating 3 lowerCase letter 
    let lower_letters = "abcdefghijklmnopqrstuvwxyz";

    //length of lower letters
    length2 = lower_letters.length;

    //for loop for creating three random lowerCase letters
    for (let i = 0; i < 3; i++) {
        let random_index2 = Math.floor(Math.random() * length2);
        let random_index_num2 = lower_letters[random_index2];
        console.log(random_index_num2);
    }
    
}


