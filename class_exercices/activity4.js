function calculateAverage(arr) {

  const sum = arr.reduce((acc, current) => acc + current, 0);
  return sum / arr.length;
}

function checkStudentStatus(grades) {
  const average = calculateAverage(grades);

  if (isNaN(average) || average < 0 || average > 10) {
    return "Invalid input"; 
  } else if (average <= 4) {
    return "Failed";
  } else if (average < 7) {

    try {
      const recoveryGrade = Number.parseFloat(prompt("Enter the recovery grade:"));

      if (isNaN(recoveryGrade) || recoveryGrade < 0 || recoveryGrade > 10) {
        return "Invalid input"; // Nota de recuperação inválida
      }

      const recoveryAverage = (average + recoveryGrade) / 2;

      if (recoveryAverage >= 5) {
        return "Passed";
      } else {
        return "Failed";
      }
    } catch (error) {
      return "Invalid input"; 
    }
  } else {
    return "Passed";
  }
}

const grades = [];
for (let i = 0; i < 3; i++) {
  try {
    const grade = Number.parseFloat(prompt(`Enter grade ${i + 1}:`));

    if (isNaN(grade) || grade < 0 || grade > 10) {
      console.log("Invalid input"); 
      i--; 
    } else {
      grades.push(grade);
    }
  } catch (error) {
    console.log("Invalid input"); 
    i--; 
  }
}

const result = checkStudentStatus(grades);
console.log(`The student is ${result}`);
