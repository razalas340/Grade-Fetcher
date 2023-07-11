let scrapeEmails = document.getElementById("scrapeEmails");

scrapeEmails.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: displayGrades,
  });
});

function displayGrades() {
  const gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
  // Create an array to store the grade values
  const gradeValues = [];
  //iterate through the values and push them to the gradeValues array
  gradeInputs.forEach((gradeInput) => gradeValues.push(gradeInput.outerText));
}