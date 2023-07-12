function scrapGradesFromPage() {
  let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
  let grades = [];

  for (let i = 0; i < gradeInputs.length; i++) {
    let grade = gradeInputs[i].innerHTML;
    grades.push(grade);
  }

  // Send the data to SheetDB
  sendDataToSheetDB(grades);

  return grades;
}

function sendDataToSheetDB(data) {
  const endpoint = "https://sheetdb.io/api/v1/https://sheetdb.io/api/v1/p8ejp7owsd37x";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  fetch(endpoint, options)
    .then(response => response.json())
    .then(result => {
      // Handle the response from SheetDB
      console.log(result);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}