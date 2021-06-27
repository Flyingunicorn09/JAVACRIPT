<!DOCTYPE html>
<html>

<head>

    <style>
        .example {
            border: 1px solid black;
            margin: 5px;
        }

        div {
            border: 1px solid black;
            margin-bottom: 10px;
            margin-left: 5px;
        }
    </style>

</head>

<body>

    <p id="byID">ЗМІНИТИ КОЛІР ТЕКСТУ НАТИСКАННЯМ НА КНОПКУ</p>

    <button onclick="myFunction()">КНОПКА</button>

    <script>
        function myFunction() {
            var x = document.getElementById("byID");
            x.style.color = "red";
        }
    </script>


    <p></p>
    <p>ЗМІНИТИ КОЛІР ТЕКСТУ З class="example"НАТИСКАННЯМ НА КНОПКУ.</p>

    <p class="example">Це всі "p" елементи, які мають class="example".</p>

    <p> Елемент в середині тексту <span class="example">span</span> елемент, ский має class="example" всередині іншого
        "p" елементу.</p>

    <button class="example" onclick="myFunction2()">КНОПКА 2</button>

    <script>
        function myFunction2() {
            var x = document.getElementsByClassName("example");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "orange";
            }
        }
    </script>

    <p></p>
    <p>НАТИСНУТИ НА КНОПКУ І ВІДМІТИТИ ВСІ ЕЛЕМЕНТИ, ЩО МАЮТЬ ІМ'Я "animal".</p>

    Cats: <input name="animal" type="checkbox" value="Cats">
    Books: <input name="library" type="checkbox" value="Books">
    Dogs: <input name="animal" type="checkbox" value="Dogs">
    Pens: <input name="stationaries" type="checkbox" value="Pens">

    <button onclick="myFunction3()">КНОПКА 3</button>

    <script>
        function myFunction3() {
            var x = document.getElementsByName("animal");
            var i;
            for (i = 0; i < x.length; i++) {
                if (x[i].type == "checkbox") {
                    x[i].checked = true;
                }
            }
        }
    </script>

</body>

</html>