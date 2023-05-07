const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  const total = +number.innerText;
  const i = Math.floor(total / 10);
  let start = 0;

  const timer = setInterval(() => {
    start = start + i;
    number.innerText = start;

    if(start > total) {
      number.innerText = total;
      clearInterval(timer);
    }
  }, 50 * Math.random());
})