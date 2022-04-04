// for (let i = 2; i <= 10; i += 2) {
//   alert(i);
// }

// let j = 0;
// while (j <= 3) {
//   alert(`number ${j}!`);
//   j++;
// }

// while (true) {
//   let number = +prompt("Скажи 300:");
//   if (number == 300 || number == null) break;
// }
// alert("АТСАСИ У ТРАКТАРИСТА ХЫХЫХЫХЫХЫХЫХЫХХЫХЫХЫХЫХЫХЫ");

// let number = +prompt("Введи число:");
// outer: for (let i = 2; i <= number; i++) {
//   let divider = Math.round(i / 2);
//   while (divider > 1) {
//     if (i % divider == 0) continue outer;
//     divider--;
//   }
//   alert(i);
// }

let number = prompt("Введите число между 0 и 3");
number = number === "" || number === null ? NaN : +number;
switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2 или 3");
    break;
}
