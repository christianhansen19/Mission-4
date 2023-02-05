$("#calc").click(function () {
    // Get form input values and assign them to variables
    var assignments = parseInt($("#valueAssignments").val());
    var groupProject = parseInt($("#valueGroupProject").val());
    var quizzes = parseInt($("#valueQuizzes").val());
    var midterm = parseInt($("#valueMidterm").val());
    var finalExam = parseInt($("#valueFinal").val());
    var intex = parseInt($("#valueINTEX").val());

    // Calculate based on the above variables
    var finalPercentage = 0.0
    finalPercentage = (assignments * 0.5) + (groupProject * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (finalExam * 0.1) + (intex * 0.1);

    // Calculate letter grade based on the final percentage
    var letterGrade;
    if (finalPercentage >= 94) {
        letterGrade = "A";
    } else if (finalPercentage >= 90) {
        letterGrade = "A-";
    } else if (finalPercentage >= 87) {
        letterGrade = "B+";
    } else if (finalPercentage >= 84) {
        letterGrade = "B";
    } else if (finalPercentage >= 80) {
        letterGrade = "B-";
    } else if (finalPercentage >= 77) {
        letterGrade = "C+";
    } else if (finalPercentage >= 74) {
        letterGrade = "C";
    } else if (finalPercentage >= 80) {
        letterGrade = "C-";
    } else if (finalPercentage >= 67) {
        letterGrade = "D+";
    } else if (finalPercentage >= 64) {
        letterGrade = "D";
    } else if (finalPercentage >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    // Display result in the form tag
    $("#result").html("Final Percentage: " + finalPercentage.toFixed(2).toString() + "%" + '\n' + letterGrade)

    // Display result in an alert
    alert("test")
})