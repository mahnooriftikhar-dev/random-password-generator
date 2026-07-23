const clickbutton = document.getElementById("button");
let random_password = document.getElementById("result");
function generate() {

    //1 UpperCase letter 
    let upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // length of characters
    length1 = upper_letters.length;

    //making the characters  random 
    let random_index1 = Math.floor(Math.random() * length1);

    //checking the specifc character  of the random number
    random_index_num1 = upper_letters[random_index1];

    console.log(random_index_num1);

    //3 lowerCase letter 
    let lower_letters = "abcdefghijklmnopqrstuvwxyz";

    //length of lower letters
    length2 = lower_letters.length;

    //for loop for creating three random lowerCase letters
    for (let i = 0; i < 3; i++) {
        let random_index2 = Math.floor(Math.random() * length2);
        let random_index_num2 = lower_letters[random_index2];
        console.log(random_index_num2);
    }

    //random symbols
    let symbols = "!@#$%";
    length_symbols = symbols.length;
    let symbol_random = Math.floor(Math.random() * length_symbols);
    let symbol_char = symbols[symbol_random];
    console.log(symbol_char);

    //4 Numbers 
    let Numbers = "01234567890";
    let Numbers_length = Numbers.length;
    for (let i = 0; i < 4; i++) {
        let random_no = Math.floor(Math.random() * Numbers_length);
        let random_no_index = Numbers[random_no];
        console.log(random_no_index);
    }

}




