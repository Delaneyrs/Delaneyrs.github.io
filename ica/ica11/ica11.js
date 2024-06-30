
const displayBtn = document.getElementById("displayBtn");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeBtn = document.getElementById("closeBtn");


function displayMessage(msgText, msgType) {
  messageText.textContent = msgText;
  messageBox.style.display = "block";

  
  if (msgType === "warning") {
    messageText.style.backgroundImage = "url(icons/warning.png)";
    messageBox.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    messageText.style.backgroundImage = "url(icons/chat.png)";
    messageBox.style.backgroundColor = "aqua";
  } else {
    messageText.style.backgroundImage = "none";
    messageBox.style.backgroundColor = "#eee";
  }
}

displayBtn.addEventListener("click", function() {
  displayMessage("Your inbox is almost full — delete some mails", "warning");
}
);
closeBtn.addEventListener("click", function() {
  messageBox.style.display = "none";
}
);

