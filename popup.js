let container = document.getElementById("containerScore");
let scrapeGrades = document.getElementById("scrapeGrades");

scrapeGrades.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: scrapEmailsFromPage,
    },
    (injectionResults) => {
      container.innerHTML = injectionResults[0].result;
      sendDataToSheetDB(injectionResults[0].result);
    }
  );
});

function scrapEmailsFromPage() {
  let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
  let grades = [];
  for (let i = 0; i < gradeInputs.length; i++) {
    let grade = gradeInputs[i].innerHTML;
    grades.push(grade);
  }
  return grades;
}

function sendDataToSheetDB(data) {
  console.log("data", data);
  fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          Grade: data,
          StudentName: "Mark",
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}