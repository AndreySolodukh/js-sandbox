/*
  Обычно функции сами преобразуют свои входные 
  данные, но это можно сделать явно с помощью 
  String()/Number()/Boolean(). Есть некоторые оговорки:
  > при Number() undefined становится NaN, null - 0, 
  true/false - 1/0, любая строка, состоящая не из цифр и
  пробелов - NaN.
  > при Boolean() только пустая строка (НЕ ПРОБЕЛЫ),
  null, undefined, NaN и 0 (ЧИСЛОВОЙ, НЕ СТРОКА) 
  становятся false. Всё остальное - true.
*/
let x = 1.0;
alert(`x is ${x}, type is ${typeof x}`);
x = String(x);
alert(`after String() x is ${x} and type is ${typeof x}`);
x = Number(x);
alert(`after Number() x is ${x} and type is ${typeof x}`);
x = Boolean(x);
alert(`after Boolean() x is ${x} and type is ${typeof x}`);
