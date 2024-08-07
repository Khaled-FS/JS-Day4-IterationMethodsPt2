function task(number) {
  console.log(`-----task ${number}------`);
}

const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

//Task 1) Create a new array containing temperatures greater than or equal to 25 degrees Celsius.
//Output 1) [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 28, 29, 27, 26]
const task1 = temperatures.filter((temp) => {
  return temp >= 25;
});
task(1);
console.log(task1);

//Create a new array containing temperatures less than 20 degrees Celsius.
//      Output 2) [19, 18, 19, 19]

const task2 = temperatures.filter((temp) => {
  return temp < 20;
});

task(2);
console.log(task2);

//Convert the entire list of temperatures to Fahrenheit. Use the formula (Celsius * 9/5) + 32.
//      Output 3) [
//      71.6, 77, 66.2, 75.2,
//      82.4, 86, 69.8, 68,
//      80.6, 84.2, 73.4, 78.8,
//      75.2, 71.6, 64.4, 66.2,
//      69.8, 82.4, 86, 80.6,
//      78.8, 77, 71.6, 73.4,
//      66.2, 68, 82.4, 84.2,
//      80.6, 78.8
//]

const conv = temperatures.map((temp) => {
  return (temp * 9) / 5 + 32;
});
task(3);
console.log(conv);

const labels = temperatures.map((temp) => {
  if (temp >= 25) {
    return "warm";
  } else if (temp >= 20 && temp <= 24) {
    return "mild";
  } else {
    return "cool";
  }
});
task(4);
console.log(labels);

//Calculate and return the highest temperature of the month.

let highest = 0;
const calc1 = temperatures.forEach((temp) => {
  if (temp > highest) {
    highest = temp;
  }
});
task(5);
console.log(highest);

//Calculate and return the lowest temperature of the month.

let lowest = temperatures[0];
const calc2 = temperatures.forEach((temp) => {
  if (temp < lowest) {
    lowest = temp;
  }
});
task(6);
console.log(lowest);
