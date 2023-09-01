// function that runs when the button is clicked
function chat() {
    alert("Hello i'm Lovely the Chatbot!");

    const myName = prompt("What is your name?");
    alert("Hello, "+ myName + "!");

    const subject = prompt("Are you single?");
    if (subject == "Yes"){
        alert("Being single is awesome!");
    }
    else if (subject == "No") {
        alert("Sweet!");
    }
    else {
        alert("that's very cool!!");
    }
    const food = prompt("What is your favorite food?");
    alert("I like "+ food + " too!");

    const ageYear = prompt("Do you like strawberries?");
    if (subject == "Yes"){
        alert("Same i like strawberries too!");
    }
    else if (ageYear == "No") {
        alert("awww!");
    }
    else {
        alert("that's awesome!");
    }
}
// end bracket to close the function



