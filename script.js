let currentDate = new Date();
let dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
let utcTime = currentDate.toISOString().split('T')[1].substring(0, 8);


document.getElementById('current-day').innerHTML = dayOfWeek;
document.getElementById('utc-time').innerHTML = utcTime;