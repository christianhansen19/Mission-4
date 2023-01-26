$("#calc").click(function () {
    alert("TEST")
    // Get form input values
    var assignments = $("#valueAssignments").val();
    var groupProjects = $("#valueGroupProjects").val();
    var quizzes = $("#valueQuizzes").val();
    var midterm = $("#valueMidterm").val();
    var finalExam = $("#valueFinal").val();
    var intex = $("#valueINTEX").val();

    // Calculate final percentage
    var finalPercentage = (assignments * 0.5) + (groupProjects * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (finalExam * 0.1) + (intex * 0.1);

    // Calculate letter grade
    var letterGrade;
    if (finalPercentage >= 94) {
        letterGrade = "A";
    } else if (finalPercentage >= 90) {
        letterGrade = "B";
    } else if (finalPercentage >= 87) {
        letterGrade = "C";
    } else if (finalPercentage >= 84) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    // Display result
    $("#result").innerHTML = "Final Percentage: " + finalPercentage + "%" + '\n' + letterGrade
})