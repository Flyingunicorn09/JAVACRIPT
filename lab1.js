<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body> 
  <script>
                 
function f1(x) {       //родительская функция
  
  function f2(y) {     //внутренняя функция f2
    return x + y;
  }

  return f2;           /* родительская функция возвращает 
                          в качестве результата внутреннюю функцию */
}
var c1 = f1(2);
var c2 = f1(5);

console.dir(c1);      //отобразим детальную информацию о функции c1
console.dir(c2);      //отобразим детальную информацию о функции c2

console.log(c1(5));   //7
console.log(c2(5));   //10

</script>


<script>
var wine = "Merlot";
    var bar = function() {
        var wine = "Cabernet";
  return function(){
   return wine;
}

    };
var winebar = bar();
console.log(wine);
console.log(winebar());

</script>

<script>
 window.onload = function() {
        var count = 0;
        var message = "Количество нажатий: ";
        var div = document.getElementById("message");
        var button = document.getElementById("my_btn");
        button.onclick = function() {
            count++;
            div.innerHTML = message + count;
        };
    };

</script>

<button id="my_btn">Нажми на клавишу!</button>
<div id="message"></div>

</body>
</html>