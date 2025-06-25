function calculateGrades() {
  var scoreInputs = document.querySelectorAll(".scoreInput");
  var tableScoreElem = document.getElementById("tableScore");
  var averageScoreElem = document.getElementById("averageScore");
  var imageElem = document.getElementById("image");

  var totalScore = 0;
  var count = 0;

  for (var i = 0; i < scoreInputs.length; i++) {
    var score = parseFloat(scoreInputs[i].value);

    if (!isNaN(score) && score >= 0 && score <= 100) {
      totalScore += score;
      count++;
    }
  }

  if (count != scoreInputs.length) {
    alert("Fill all fields");
    tableScoreElem.textContent = "Table Score is: ";
    averageScoreElem.textContent = "Average Score: ";
  
  } else {
    tableScoreElem.textContent = "Table Score is: " + (count > 0 ? totalScore : "0");
    averageScoreElem.textContent = "Average Score: " + (count > 0 ? (totalScore / count).toFixed(2) : "0");
  }

  var averageScore = totalScore / count;

  if (averageScore >= 80) {
    imageElem.src = "happy.webp";
    imageElem.alt = "Happy Face";
  } else if (averageScore >= 65) {
    imageElem.src = "soClose.webp";
    imageElem.alt = "So Close";
  } else if (averageScore >= 50) {
    imageElem.src = "ahh!!.webp";
    imageElem.alt = "Ahh!!";
  } else {
    imageElem.src = "notSoHappy.webp";
    imageElem.alt = "Not So Happy";
  }
  
  imageElem.width = 120;

}



window.onload = function () {
  var table = document.querySelector("table tbody");
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    var scoreInput = rows[i].cells[1].querySelector("input");
    var gradeInput = rows[i].cells[2].querySelector("input");

    (function (input, gradeCell) {
      input.addEventListener("input", function () {
        var score = parseFloat(input.value);
        var grade = "";

        if (!isNaN(score)) {
          if (score < 0 || score > 100) grade = "Invalid Score";
          else if (score >= 70) grade = "A";
          else if (score >= 60) grade = "B";
          else if (score >= 50) grade = "C";
          else if (score >= 45) grade = "D";
          else if (score >= 40) grade = "E";
          else grade = "F";
        }
        gradeCell.value = grade;
      });
    })(scoreInput, gradeInput);
  }
};
