let grade = document.getElementById(".u7S8tc .ksaOtd");

scrapeEmails.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: scrapEmailsFromPage,
  });
});

function scrapEmailsFromPage() {
  const emailRegEx = /[\w.=-]+@[\w.-]+.[\w]{2,3}/gim;

  let emails = document.body.innerHTML.match(emailRegEx);
}