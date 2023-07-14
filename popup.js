function scrapGradesFromPage() {
  let gradeInputs = document.querySelectorAll(".u7S8tc .ksaOtd");
  let grades = [];

  for (let i = 0; i < gradeInputs.length; i++) {
    let grade = gradeInputs[i].innerHTML;
    grades.push(grade);
  }

  

  return grades;
}