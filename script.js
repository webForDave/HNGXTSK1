// let currentDate = new Date();
// let dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
// let utcTime = currentDate.toISOString().split('T')[1].substring(0, 8);


// document.getElementById('current-day').innerHTML = dayOfWeek;
// document.getElementById('utc-time').innerHTML = utcTime;

let dateInstance = new Date();
let currentDay = dateInstance.getDay();
let hours = dateInstance.getUTCHours();
let mins = dateInstance.getUTCMinutes();
let secs = dateInstance.getUTCSeconds();

document.getElementById('current-day').innerHTML = dateInstance.toLocaleString('default', {weekday: 'long'});
document.getElementById('utc-time').innerHTML = `${hours} : ${mins} : ${secs}`;