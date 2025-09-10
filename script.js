let clock_div = document.getElementById("clock");

let clock = function () {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, 0);
  let mint = String(date.getMinutes()).padStart(2, 0);
  let sec = String(date.getSeconds()).padStart(2, 0);
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, 0);

  clock_div.textContent = `${hours} : ${mint} : ${sec} :${ampm}`;
};
clock();
setInterval(() => clock(), 1000);
