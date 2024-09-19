/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to get the month name from a particular date.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start getMonthNameFromDate --------------------------------------------------------");
function getMonthNameFromDate(date) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    ];
    if(Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
        return monthNames[date.getMonth()];
    } else {
        return "Invalid Date";
    }
}
console.log(getMonthNameFromDate(new Date("2023-09-19"))); // "September"
console.log(getMonthNameFromDate(new Date("2022-1-1"))); // "January"
console.log(getMonthNameFromDate(new Date("2023-12-25"))); // "December"
console.log(getMonthNameFromDate(new Date("invalid date"))); // "Invalid Date"
console.log(getMonthNameFromDate(new Date())); // Current month name
console.log("-------------------------------------------------------- End getMonthNameFromDate --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to test whether a date is a weekend.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- End isDateAWeekendDay --------------------------------------------------------");
function isDateAWeekendDay(date) {
    if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date)) {
        return "Invalid Date";
    }
    const day = date.getDay();
    return day === 0 || day === 6;
}
console.log(isDateAWeekendDay(new Date("2023-09-17"))); // true (Sunday)
console.log(isDateAWeekendDay(new Date("2023-09-18"))); // false (Monday)
console.log(isDateAWeekendDay(new Date("2023-09-16"))); // true (Saturday)
console.log(isDateAWeekendDay(new Date("2023-09-19"))); // false (Tuesday)
console.log(isDateAWeekendDay(new Date("invalid date"))); // "Invalid Date"
console.log(isDateAWeekendDay(new Date())); // Check current date
console.log("-------------------------------------------------------- End isDateAWeekendDay --------------------------------------------------------");