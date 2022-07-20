function getValue(){
    let message = document.getElementById("message").value;
    let revMessage = reverse(message);
    displayReversed(revMessage, message);
}

function reverse(message)
{
let reversedMessage = "";
for (let index = message.length-1; index >= 0; index--) {
   
    reversedMessage += message[index];
    
}

return reversedMessage;
}


function displayReversed(revMessage, message){
let results = document.getElementById("results");
results.classList.add("revMessage");
let displayMessage = "";
revMessage = revMessage.replace(" ","");
message = message.replace(" ","");

if (revMessage.toLowerCase() == message.toLowerCase()) {
    displayMessage = "Good One!";
} else{
    displayMessage = "Ehhhh I don't think so";
}

results.innerHTML = displayMessage;
}