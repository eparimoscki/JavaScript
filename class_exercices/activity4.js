function calculateAverage(arr) {
    const sum = arr.reduce((acc, current) => acc + current, 0);
    return sum / arr.length;
  }
  
  function checkStudentStatus(grades) {
    const average = calculateAverage(grades);
  
    if (average <= 4) {
      return "Failed";
    } else if (average < 7) {
      const recoveryGrade = parseFloat(prompt("Enter the recovery grade:"));
      const recoveryAverage = (average + recoveryGrade) / 2;
  
      if (recoveryAverage >= 5) {
        return "Passed";
      } else {
        return "Failed";
      }
    } else {
      return "Passed";
    }
  }
  
  const grades = [];
  for (let i = 0; i < 3; i++) {
    const grade = parseFloat(prompt(`Enter grade ${i + 1}:`));
    grades.push(grade);
  }
  
  const result = checkStudentStatus(grades);
  console.log(`The student is ${result}`);