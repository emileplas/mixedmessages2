//mised messages



//declarations



//declaration of promt sync function
const prompt = require('prompt-sync')({sigint: true});

//declaration of leaveProgram
var leaveProgram = false;

//declaration of mixed messages array
var messagesArray = [
    "Raquel and Emile met in 2017.", 
    "Raquel and Emile met in Spain.",
    "Raquel and Emile their first trip to a foreign country as a couple was Portugal.",
    "Raquel and Emile spent a few months in a long distance relationship after dating only a few weeks.",
    "Raquel and Emile are both huge fans of dogs."
]

//log to user screen

//
console.log("\n" +
"\n" +
"\n" +
"Welcome to our program 'did you know' Emile and Raquel." + 
"\n" +
"\n" + 
"The goal of this program is to get to know Emile and Raquel" +
"\n Everytime you type YES to the question do you want to know more, you will be given a random messages about Emile and Raquel so you can get to know them more." +
"\n" +
"\n"); 
const input = prompt("Do you want to get to know more about Raquel and Emile? ", "answer");

//create a mixed message
function mixedmessages(){
    randomNumber = Math.floor(Math.random() * messagesArray.length);
    console.log(messagesArray[randomNumber]);
}


//check input from user
if (input === "YES" || input === "yes" || input === " yes" || input === " YES") {
    console.log("\n");
    mixedmessages();
    console.log("\n");
    var firstAnswer = 1
  } else {
    console.log(
        "\n" +
        "INVALID INPUT" +
        '\n To get a fun fact about Raquel and Emile, you need to type YES.' +
        "\n");
  
  }

while (leaveProgram === false) {
    if (firstAnswer === 1){
        console.log("\n");
        const inputTwo = prompt("Thank you for using the program, do you want to get another fun fact? Type YES for another fun fact. Type NO to leave the program: ", "answer");
        if(inputTwo === "YES" || inputTwo === "yes" || inputTwo === " yes" || inputTwo === " YES") {
            console.log("\n");
            mixedmessages();
            console.log("\n");
        }
        else if (inputTwo === "NO" || inputTwo === "no" || inputTwo === " no" || inputTwo === " NO") {
            console.log("\n");
            console.log("Sad to see you go. Have a wonderful day!");
            console.log("\n");
            leaveProgram = true;
        }
        else{
            console.log(
                "\n" +
                "INVALID INPUT" +
                '\n To get a fun fact about Raquel and Emile, you need to type YES.' +
                '\n To leave the program, type NO.' +
                "\n");
        }

    }  
}

