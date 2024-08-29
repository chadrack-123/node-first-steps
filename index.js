import { greet, yo } from "./greet.js";
import { yoo } from "./yo.js";
import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";

const printWithChalk = (bgColor, textColor, message) => {
    console.log(chalk[bgColor][textColor](message));
};

const cowSayText = (message, bgColor, textColor) => {
    return chalk[bgColor][textColor](
        cowsay.say({ text: message })
    );
};

// First CowSay Message
printWithChalk("bgGreen", "whiteBright", cowsay.say({ text: "Hello CowSay" }));
console.log();
printWithChalk("bgRed", "whiteBright", "======== Breaking Line ==========");
console.log();

// Second CowSay Message
const secondCowMessage = cowSayText("Hello CK", "bgGreen", "whiteBright");
console.log(secondCowMessage);
console.log();

// Greeting Messages
const greetMsg = chalk.bgRed.whiteBright(greet("CK"));
const yoMsg = chalk.bgGray.whiteBright(yo("CIO my friend!"));
const yooMsg = chalk.bgGreen.whiteBright(yoo("again, my friend!"));

[greetMsg, yoMsg, yooMsg].forEach(msg => console.log(msg));
console.log();

// Figlet Section
printWithChalk("bgGreenBright", "whiteBright", "============= Figlet with Chalk ================");
console.log();

const printFiglet = (message, bgColor, textColor) => {
    figlet(message, (err, data) => {
        if (err) {
            console.error("Something went wrong...", err);
            return;
        }
        printWithChalk(bgColor, textColor, data);
    });
};

printFiglet("Hello, developers", "bgBlue", "whiteBright");
printFiglet("Hello, Khanyie", "red", "whiteBright");
