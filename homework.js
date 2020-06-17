//HOMEWORK

/* 1. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
выводящую введённые данные в следующем виде:
*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************
Размер рамки должен определятся автоматически по самой длинной строке. Рамку
вывести в консоль.*/

function frame(lenght){
    let frm = '';
    for (let i = 0; i < lenght; i++){
        frm += '*';
    }
    console.log(frm);
}

let str = [];

str.push("Домашняя работа \"Функции\"");

let group = prompt("Введите номер группы");
str.push("Выполнил студент гр." + group);

let surname = prompt("Введите фамилию"),
    name = prompt("Введите имя"),
    patronymic = prompt("Введите отчество"),
    fullname = surname + '' + name + '' + patronymic;
str.push(fullname);

let lenghtFr = 0;

for (let i = 0;i < str.length; i++){
    if (lenghtFr < str[i].length){
        lenghtFr = str[i].length;
    }
}

lenghtFr += 2;

frame(lenghtFr);
for (let i = 0;i < str.length; i++){
    let string = '*';
    for (let j = 0; j < lenghtFr; j++){
        if (str[i][j] == undefined){
            if (j == lenghtFr-2){
                string += '*';
            }
            else{
                string += ' ';
            }
        }
        else{
            string += str[i][j];
        }
    }
    console.log(string);
}
frame(lenghtFr);

/* 2. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:

*
***
*****
*******
*********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но
которая выведет перевернутый треугольник.*/
function triangle() {
    let str = [],
        n = Number(prompt("Введите количество рядов"));
    for(let i = 0; i <= n; i++){

        for(let j = 0; j < n + i; j++){
            if (j <= n - i) str.push('');
            else str.push('*');
        }
        console.log(str.join(''));
        str = [];
    }
}
triangle();

function Revtriangle() {
    let str = [],
        n = Number(prompt("Введите количество рядов"));

    for(let i = n; i >= 0; i--){

        for(let j = 0; j < n + i; j++){
            if (j <= n - i) str.push('');
            else str.push('*');
        }
        console.log(str.join(''));
        str = [];
    }
}
Revtriangle();

