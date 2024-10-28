
/*
Relative Date Internationalization In JavaScript


Internationalization can be a challenging part of web development, especially when handling strings, numbers, and dates. Fortunately, JavaScript's built-in internationalization features, specifically the Intl.RelativeTimeFormat class, simplify relative date formatting.

Using Relative Date Formats

To format relative time (like "yesterday" or "2 days ago"), you can use the Intl.RelativeTimeFormat class. It allows you to automatically handle internationalization with minimal code.
*/
const english = new Intl.RelativeTimeFormat("en-us");
const spanish = new Intl.RelativeTimeFormat("es-es");

english.format(-2, "days"); // 2 days ago
spanish.format(10, "hours"); // dentro de 10 horas

/*The first argument specifies the time difference, while the second defines the time unit (e.g., "days" or "hours"). Negative numbers represent past times, and positive numbers represent future times.

Configuration Options

1. Style Option: Determines the length of the output (long, short, narrow).
*/
const long = new Intl.RelativeTimeFormat("en-us", { style: "long" });
const short = new Intl.RelativeTimeFormat("en-us", { style: "short" });

long.format(10, "hours");  // in 10 hours
short.format(10, "hours"); // in 10 hr.

/*
2. Numeric Option: Controls whether the output should always be numeric or can use strings like "yesterday." */

const always = new Intl.RelativeTimeFormat("en-us", { numeric: "always" });
const auto = new Intl.RelativeTimeFormat("en-us", { numeric: "auto" });

always.format(0, "hours"); // in 0 hours
auto.format(0, "hours");   // this hour


/*
Building a YouTube-Like Time Formatter

Here's how to create a function that formats a relative date like YouTube's video timestamps (e.g., "1 hour ago", "yesterday").

Step 1: Setup the Formatter
*/
const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});

//Step 2: Map Time Divisions

//Create a map of time divisions to handle different units like seconds, minutes, days, etc.

const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

//Step 3: Format the Date

//Write a function that calculates the duration between the input date and the current time, then formats it accordingly.

function formatTimeAgo(date) {
  let duration = (new Date() - date) / 1000; // convert to seconds

  for (let division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

//Step 4: Example Usage

const currentDate = new Date();

console.log(formatTimeAgo(new Date().setMonth(currentDate.getMonth() - 2))); // 2 months ago
console.log(formatTimeAgo(new Date().setDate(currentDate.getDate() - 1)));   // yesterday
console.log(formatTimeAgo(new Date().setDate(currentDate.getDate() - 9)));   // last week

//Conclusion

//Handling internationalization in JavaScript is made easier with the Intl.RelativeTimeFormat class. You can effortlessly format dates with the correct locale and configuration, allowing for more flexible and readable code.


