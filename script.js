const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
    let userMessage = userInput.value;
    if (userMessage.trim() === "") return;
    
    displayMessage("You: " + userMessage);
    userInput.value = "";
    
    getBotResponse(userMessage);
}

function displayMessage(message) {
    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
    let botReply = "I am just a simple bot. Try asking something else!";
    
    if (input.toLowerCase().includes("hello")) {
        botReply = "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("how are you")) {
        botReply = "I'm just a bot, but I'm doing great!";
    }
    
    setTimeout(() => displayMessage("Bot: " + botReply), 1000);
}
