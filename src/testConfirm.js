/*
  confirm - выводит сообщение и кнопки ОК и отмена.
  > при нажатии ОК возвращается true
  > при нажатии отмена возвращается false
  Почему-то при использовании 'confirm()' без 'window.'
  появляется ошибка.
*/
let answer = window.confirm("1 + 1 = 3 ?");
if (answer) alert("Тупой");
else alert("Всё равно тупой");
