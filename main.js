let countDownDate = new Date('Dec 31, 2024 23:59:59').getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); 

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
  }


}, 1000);