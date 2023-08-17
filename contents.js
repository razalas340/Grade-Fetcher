chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Do something with the received data (in 'message')

  // For example, to display the grade on a specific div:
  let div = document.getElementById("containerScore"); // Assuming you have a div with this ID on your website
  if (div) {
    div.innerText = "Your Grade: " + message.grade;
  }
});
