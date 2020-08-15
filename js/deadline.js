/* Giveaway */
const giveaway = document.querySelector('.giveaway');

/* Individually getting the values */
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date}, ${month}, ${year} ${hours}:${minutes}`;