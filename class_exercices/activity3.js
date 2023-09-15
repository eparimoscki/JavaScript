let tallest_height = 0;
let shortest_height = Infinity;
let sum_male_height = 0;
let female_count = 0;

for (let i = 0; i < 15; i++) {
    let height = parseFloat(prompt(`Enter the height in meters for person ${i + 1}:`));
    let gender = prompt(`Enter the gender for person ${i + 1} (M/F):`).toUpperCase();

    if (isNaN(height) || height <= 0) {
        console.log("Invalid input for height. Please enter a valid number greater than 0.");
        i--;
        continue;
    }

    if (gender === 'M') {
        sum_male_height += height;
    } else if (gender === 'F') {
        female_count++;
    } else {
        console.log("Invalid gender input. Please enter 'M' or 'F'.");
        i--;
        continue;
    }

    if (height > tallest_height) {
        tallest_height = height;
    }
    if (height < shortest_height) {
        shortest_height = height;
    }
}

if (female_count === 15) {
    console.log("No males were entered, so there is no average male height.");
} else {
    let average_male_height = sum_male_height / (15 - female_count);
    console.log(`Tallest height reported: ${tallest_height.toFixed(2)} meters`);
    console.log(`Shortest height reported: ${shortest_height.toFixed(2)} meters`);
    console.log(`Average height of males: ${average_male_height.toFixed(2)} meters`);
}
console.log(`Number of females: ${female_count}`);

var grades = [];

for (let i = 0; i < 4; i++) {
    var grade = parseFloat(prompt(`Enter grade ${i + 1}:`));
    if (isNaN(grade) || grade < 0 || grade > 10) {
        console.log("Invalid input for grade. Please enter a valid number between 0 and 10.");
        i--;
        continue;
    }
    grades.push(grade);
}

var average = calculateAverage(grades);

var status = checkStatus(average);
console.log(status);

if (status === "Student in recovery") {
    var recoveryGrade = parseFloat(prompt("Enter the recovery grade: "));
    if (isNaN(recoveryGrade) || recoveryGrade < 0 || recoveryGrade > 10) {
        console.log("Invalid input for recovery grade. Please enter a valid number between 0 and 10.");
    } else {
        var finalAverage = calculateAverage([average, recoveryGrade]);
        var recoveryStatus = checkStatus(finalAverage);
        console.log(recoveryStatus);
    }
}
