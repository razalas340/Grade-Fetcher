let container = document.getElementById("containerScore");
let scrapeGrades = document.getElementById("scrapeGrades");

scrapeGrades.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: scrapeGradesFromPage,
    },
    (injectionResults) => {
      //This is all the data returned from the scrapEmailsFromPage function
      const studentName = injectionResults[0].result[1];
      const gradesArray = injectionResults[0].result[0];
      const classNamesArray = injectionResults[0].result[2];

      container.innerHTML = `Student Name: ${studentName}`;
      container.innerHTML += `<br>Grades: ${gradesArray.join(", ")}`;
      container.innerHTML += `<br>Class Names: ${classNamesArray.join(", ")}`;
      console.log("Extracted studentName:", studentName);
      console.log("Extracted gradesArray:", gradesArray);
      console.log("Extracted classNamesArray:", classNamesArray);
      if (gradesArray.length !== classNamesArray.length) {
        console.error(
          "Mismatch in array lengths:",
          gradesArray,
          classNamesArray
        );
        return;
      }
      // let resultValue = injectionResults[0].result;

      // resultValue = [[1,2,3],[1,2,3]]

      // let scores = resultValue[0];
      // let names = resultValue[1];

      // grades and classnames will use the index - the [i] thing
      // don't use the index for the student name since it's just a single string
      for (let i = 0; i < gradesArray.length; i++) {
        // make sure to add class names here
        sendDataToSheetDB(gradesArray[i], studentName, classNamesArray[i]);
      }
    }
  );
});

function scrapeGradesFromPage() {
  const gradeInputs = document.querySelectorAll("span.ksaOtd");
  const allClasses = document.querySelectorAll(
    "span.YVvGBb:not(.A6dC2c):not(.dDKhVc):not(.u7S8tc):not(.udxSmc)"
  );
  const studentName = document.querySelectorAll(".qp1Eye .B7SYid");

  let gradeArray = [];
  let classArray = [];

  gradeInputs.forEach((grade) => {
    gradeArray.push(grade.innerHTML);
  });

  // parse through array and only grab every other element since every element is duplicated
  allClasses.forEach(function (className, index) {
    if (index % 2 === 1) {
      classArray.push(className.textContent);
    }
  });

  return [gradeArray, studentName[0].textContent, classArray];
}

// update the props to include class names
function sendDataToSheetDB(score, name, Assignment) {
  const payload = {
    data: [
      {
        score: score,
        name: name,
        Assignment: Assignment,
      },
    ],
  };

  console.log("Sending payload:", payload);
  fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // update the data structure to include class names
      data: [
        {
          Grade: score,
          StudentName: name,
          Assignment: Assignment,
        },
      ],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          throw new Error(
            `Error Code: ${response.status}. Message: ${err.error}`
          );
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error sending data to SheetDB:", error);
    });
}
document.getElementById("scrapeGrades").addEventListener("click", function () {
  chrome.tabs.create({ url: "http://localhost:3000" });
  let data = { grade: "A+" };

  // Send the data to the content script of the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
});
