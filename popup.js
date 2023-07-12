let container = document.getElementById("containerScore");

scrapeEmails.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: scrapGradesFromPage,
    },
    (injectionResults) => {
      container.innerHTML = injectionResults[0].result;
    }
  );
});

function scrapGradesFromPage() {
  let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
  let score = gradeInputs[0].innerHTML;
  return score;
}