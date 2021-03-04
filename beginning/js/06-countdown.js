let yourAnswer = prompt("What number?");
let i;
for (i = yourAnswer; i >= 1; i -= 1) {
    yourAnswer = i - 1;
    window.document.write(yourAnswer + "<br>");
}