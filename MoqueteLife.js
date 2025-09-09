const Name = "Eron Moquete";
const course = "Bachelor of Science in Information Technology";
const yearLevel = "2nd year";

console.log("Name:", Name);
console.log("Course:", course);
console.log("Year Level:", yearLevel);

const hoursSleep = 6;
const hoursStudy = 5;
const totalDailyHours = hoursSleep + hoursStudy;

console.log("Hours of Sleep:", hoursSleep);
console.log("Hours of Study:", hoursStudy);
console.log("Total Daily Routine Hours:", totalDailyHours);

if (hoursStudy >= 5) {
  console.log("Great! You studied enough today.");
} else {
  console.log("You need to study more.");
}


const subjects = [
 "Event Driven",
 "OOP",
 "Web system",
];

console.log("My Subjects This Semester:");
for (let i = 0; i < subjects.length; i++) {
  console.log(`- ${subjects[i]}`);
}

function studentSummary(){
  console.log("My name is " + Name + ", a " + yearLevel + " from " + course);
  return studentSummary;


}

console.log(studentSummary());