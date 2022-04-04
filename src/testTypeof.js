/*
  " ... " - просто скобки, дают строку
  ' ... ' - ничем не отличаются от " ... "
  ` ... ` - дают возможность вставлять ${...}
*/
let x = 1;
alert(`x = 1 is ${typeof x}`);
x = 999999999999999999999999999999999999999999999999999999999;
alert(`x = 9999999999999... is ${typeof x}`);
x = "stroka";
alert(`x = "stroka" is ${typeof x}`);
x = true;
alert(`x = true is ${typeof x}`);

// для null выдаёт object
x = null;
alert(`x = null is ${typeof x}`);

x = undefined;
alert(`x = undefined is ${typeof x}`);
