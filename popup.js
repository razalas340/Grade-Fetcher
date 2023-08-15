// let container = document.getElementById("containerScore");
// let scrapeGrades = document.getElementById("scrapeGrades");

// scrapeGrades.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: scrapEmailsFromPage,
//     },
//     // (injectionResults) => {
//     //   container.innerHTML = injectionResults[0].result;
//     //   sendDataToSheetDB(injectionResults[0].result);
//     // }
//     (injectionResults) => {
//       // console.log('this is injectionResults', injectionResults);
//       // console.log('this is injectionResults[0]', injectionResults[0].result);
//       container.innerHTML = injectionResults[0].result;
//       sendDataToSheetDB(injectionResults[0].result);
//       }
//   );
// });

// function scrapEmailsFromPage() {
//   // console.log(`hit`)
//   // let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   // let studentName = document.querySelectorAll(".qp1Eye .B7SYid");
//   // console.log(`gradeInputs`, gradeInputs);
//   // let name = studentName[0].innerHTML;
//   // let score = gradeInputs[0].innerHTML;

//   // return [score, name];
//   let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   let studentName = document.querySelectorAll(".qp1Eye .B7SYid");
//   // console.log(`gradeInputs`, gradeInputs);
//   // let name = studentName[0].innerHTML;
//   // let score = gradeInputs[0].innerHTML;
//   // return [gradeInputs[0], studentName[0]];

//   let grades = [];
//   let names = [];
//   for (let i = 0; i < gradeInputs.length; i++) {
//   grades.push(gradeInputs[i].innerHTML);
//   names.push(studentName[i].innerHTML);
//   }

//   return [grades, names]

// }

// // function sendDataToSheetDB(data) {
// //   console.log("data", data);
// //   fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
// //     method: "POST",
// //     headers: {
// //       Accept: "application/json",
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({
// //       data: [
// //         {
// //           Grade: data[1],
// //           StudentName: data[0],
// //         },
// //       ],
// //     }),
// //   })
// //     .then((response) => response.json())
// //     .then((data) => console.log(data));
// // }

// function sendDataToSheetDB(data) {
//   for (let i = 0; i < data[0].length; i++) {
//   fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       data: [
//         {
//           Grade: data[0][i],
//           StudentName: data[1][i],
//         },
//       ],
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   }
// }

// // scrapeGrades.addEventListener("click", async () => {
// //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// //   chrome.scripting.executeScript(
// //     {
// //       target: { tabId: tab.id },
// //       func: scrapEmailsFromPage,
// //     },
// //     (injectionResults) => {
// //       if (injectionResults && injectionResults[0]) {
// //         console.log('this is injectionResults', injectionResults);
// //         console.log('this is injectionResults[0]', injectionResults[0].result);
// //         container.innerHTML = injectionResults[0].result;
// //         sendDataToSheetDB(injectionResults[0].result);
// //       } else {
// //         console.error('Error occurred while executing the script.');
// //         // Handle the error here, display an error message, etc.
// //       }
// //     }
// //   );
// // });

// function scrapEmailsFromPage() {
//   let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   let studentName = document.querySelectorAll(".qp1Eye .B7SYid");
//   let grades = [];
//   let names = [];
//   for (let i = 0; i < gradeInputs.length; i++) {
//     grades.push(gradeInputs[i].innerHTML);
//     names.push(studentName[i].innerHTML);
//   }

//   return [grades, names];
// }

// // function sendDataToSheetDB(data) {
// //   if (data && data[0] && data[1] && data[0].length === data[1].length) {
// //     for (let i = 0; i < data[0].length; i++) {
// //       fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
// //         method: "POST",
// //         headers: {
// //           Accept: "application/json",
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           data: [
// //             {
// //               Grade: data[0][i],
// //               StudentName: data[1][i],
// //             },
// //           ],
// //         }),
// //       })
// //         .then((response) => response.json())
// //         .then((data) => console.log(data));
// //     }
// //   } else {
// //     console.error('Invalid data format received.');
// //     // Handle the error here, display an error message, etc.
// //   }
// // }

// // function sendDataToSheetDB(data) {
// //   if (
// //     Array.isArray(data) &&
// //     data.length === 2 &&
// //     Array.isArray(data[0]) &&
// //     Array.isArray(data[1]) &&
// //     data[0].length === data[1].length
// //   ) {
// //     for (let i = 0; i < data[0].length; i++) {
// //       fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
// //         method: "POST",
// //         headers: {
// //           Accept: "application/json",
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           data: [
// //             {
// //               Grade: data[0][i],
// //               StudentName: data[1][i],
// //             },
// //           ],
// //         }),
// //       })
// //         .then((response) => response.json())
// //         .then((data) => console.log(data));
// //     }
// //   } else {
// //     console.error('Invalid data format received.');
// //     // Handle the error here, display an error message, etc.
// //   }
// // }

////EVERYTHING BELOW THIS LINE IS OG/////

// let container = document.getElementById("containerScore");
// let scrapeGrades = document.getElementById("scrapeGrades");

// scrapeGrades.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: scrapEmailsFromPage,
//     },
//     (injectionResults) => {
//       container.innerHTML = injectionResults[0].result;
//       sendDataToSheetDB(injectionResults[0].result);
//     }
//   );
// });

// function scrapEmailsFromPage() {
//   let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   let studentName = document.querySelectorAll(".qp1Eye .B7SYid");

//   let name = studentName[0].innerHTML;
//   let score = gradeInputs[0].innerHTML;

//   return [name, score];
// }

// function sendDataToSheetDB(data) {
//   console.log("data", data);
//   fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       data: [
//         {
//           Grade: data[1],
//           StudentName: data[0] ,
//         },
//       ],
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

//END OF OG/////

// let container = document.getElementById("containerScore");
// let scrapeGrades = document.getElementById("scrapeGrades");

// scrapeGrades.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: scrapEmailsFromPage,
//     },
//     (injectionResults) => {
//       container.innerHTML = injectionResults[0].result;
//       sendDataToSheetDB(injectionResults[0].result);
//     }
//   );
// });

// function scrapEmailsFromPage() {
//   let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   let studentName = document.querySelectorAll(".qp1Eye .B7SYid");
//   let assignmentS = document.querySelectorAll(".XREa9d .YVvGBb")
//   let grades = [];
//   for (let i = 0; i < gradeInputs.length; i++) {
//     grades.push(gradeInputs[i].innerHTML);
//   }

//   let firstName = studentName[0].innerHTML;

//   return [grades, firstName];
// }

//GRABS ALL GRADES AND NAME
// function sendDataToSheetDB([grades, firstName]) {
//   for (let i = 0; i < grades.length; i++) {
//     fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             Grade: grades[i],
//             StudentName: firstName,
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
// }

// duplicates assignments//
// let container = document.getElementById("containerScore");
// let scrapeGrades = document.getElementById("scrapeGrades");

// scrapeGrades.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: scrapEmailsFromPage,
//     },
//     (injectionResults) => {
//       container.innerHTML = injectionResults[0].result;
//       sendDataToSheetDB(injectionResults[0].result);
//     }
//   );
// });

// function scrapEmailsFromPage() {
//   let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   let studentName = document.querySelectorAll(".qp1Eye .B7SYid");

//   let grades = [];
//   for (let i = 0; i < gradeInputs.length; i++) {
//     grades.push(gradeInputs[i].innerHTML);
//   }

//   let firstName = studentName[0].innerHTML;

//   let assignments = [];
//   let assignmentS = document.querySelectorAll(".HG7HUc .QRiHXd .YVvGBb");
//   for (let i = 0; i < assignmentS.length; i++) {
//     assignments.push(assignmentS[i].innerHTML);
//   }

//   return [grades, firstName, assignments];
// }

// function sendDataToSheetDB([grades, firstName, assignments]) {
//   for (let i = 0; i < grades.length; i++) {
//     fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             Grade: grades[i],
//             StudentName: firstName,
//             Assignment: assignments[i],
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
// }

//doesnt duplicate assignments

// let container = document.getElementById("containerScore");
// let scrapeGrades = document.getElementById("scrapeGrades");

// scrapeGrades.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: scrapEmailsFromPage,
//     },
//     (injectionResults) => {
//       container.innerHTML = injectionResults[0].result;
//       sendDataToSheetDB(injectionResults[0].result);
//     });
// });

// function scrapEmailsFromPage() {
//   let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   let studentName = document.querySelectorAll(".qp1Eye .B7SYid");
//   let assignmentS = document.querySelectorAll(".HG7HUc .QRiHXd .YVvGBb");

//   let grades = [];
//   for (let i = 0; i < gradeInputs.length; i++) {
//     grades.push(gradeInputs[i].innerHTML);
//   }

//   let firstName = studentName[0].innerHTML;

//   let assignments = [];
//   let uniqueAssignments = []; // Array to track unique assignments

//   for (let i = 0; i < assignmentS.length; i++) {
//     let assignment = assignmentS[i].innerHTML;

//     if (!uniqueAssignments.includes(assignment)) {
//       uniqueAssignments.push(assignment);
//       assignments.push(assignment);
//     }
//   }

//   return [grades, firstName, assignments];
// }

// function sendDataToSheetDB([grades, firstName, assignments]) {
//   for (let i = 0; i < grades.length; i++) {
//     fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             Grade: grades[i],
//             StudentName: firstName,
//             Assignment: assignments[i],
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
// }

//this new version debugs to see what is being sent to DB API

// let container = document.getElementById("containerScore");
// let scrapeGrades = document.getElementById("scrapeGrades");

// scrapeGrades.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: scrapEmailsFromPage,
//     },
//     (injectionResults) => {
//       let resultVal = injectionResults[0].result;
//       let scores = resultVal[0];
//       let names = resultVal[1];
//       let lessons = resultVal[2];
//       for(let i = 0; i < scores.length;i++) {
//         sendDataToSheetDB(scores[i],names[0],lessons[i]);
//       }

//     }
// (injectionResults) => {
//   container.innerHTML = injectionResults[0].result;
//   sendDataToSheetDB(injectionResults[0].result);
// }
//   );
// });

// function scrapEmailsFromPage() {
//   let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
//   let studentName = document.querySelectorAll(".qp1Eye .B7SYid");
//   let assignmentS = document.querySelectorAll(".HG7HUc .QRiHXd .YVvGBb");

//   let grades = [];
//   for (let i = 0; i < gradeInputs.length; i++) {
//     grades.push(gradeInputs[i].innerHTML);
//   }

//   let firstName = studentName[0].innerHTML;

//   let assignments = [];
//   let uniqueAssignments = []; // Array to track unique assignments

//   for (let i = 0; i < assignmentS.length; i++) {
//     let assignment = assignmentS[i].innerHTML;

//     if (!uniqueAssignments.includes(assignment)) {
//       uniqueAssignments.push(assignment);
//       assignments.push(assignment);
//     }
//   }
// console.log(grades, firstName, assignments);
//   return [grades, [firstName], assignments];
// }

// function sendDataToSheetDB(grades, firstName, assignments) {
//   console.log(`grades`, grades);
//     fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             Grade: grades,
//             StudentName: firstName,
//             Assignment: assignments,
//           },
//         ],
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not OK');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(`this is the data sent to DB`, data); // Log the response data
//       })
//       .catch((error) => {
//         console.error(error); // Log any errors
//       });
// }

// function sendDataToSheetDB([grades, firstName, assignments]) {
//   console.log(`grades`, grades);
//   for (let i = 0; i < grades.length; i++) {
//     fetch("https://sheetdb.io/api/v1/p8ejp7owsd37x", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             Grade: grades[i],
//             StudentName: firstName,
//             Assignment: assignments[i],
//           },
//         ],
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not OK');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(`this is the data sent to DB`, data); // Log the response data
//       })
//       .catch((error) => {
//         console.error(error); // Log any errors
//       });
//   }
// }

//WORKING VERSION WITHOUT COLLECTING LESSONS

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

      container.innerHTML = studentName;
      container.innerHTML += gradesArray;
      container.innerHTML += classNamesArray;

      // let resultValue = injectionResults[0].result;

      // resultValue = [[1,2,3],[1,2,3]]

      // let scores = resultValue[0];
      // let names = resultValue[1];

      // grades and classnames will use the index - the [i] thing
      // don't use the index for the student name since it's just a single string
      for (let i = 0; i < scores.length; i++) {
        // make sure to add class names here
        sendDataToSheetDB(gradesArray[i], scores[i], names[i]);
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
function sendDataToSheetDB(score, name, assignmentname) {
  fetch("https://sheetdb.io/api/v1/2tdy9xhxss4ss", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // update the data structure to include class names
      data: [
        {
          score: score,
          name: name,
          assignmentname: assignmentname,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
