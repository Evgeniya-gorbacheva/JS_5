//CLASSWORK

/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа
передаются параметром.*/
function equation(a, b, c) {
    let eq = (a - b) / c;
    console.log(eq);
}

equation(25, 4, 7);


/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается
параметром.*/
function kubKvadrat(d) {
        kub = d**3;
        kvadrat = d**2;
    return [kub, kvadrat];
}
console.log(kubKvadrat(25));


/* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.*/
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let show = min(16, 25);
console.log(show);

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

show = max(32, 42);
console.log(show);


/* 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми
значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая
– выводить полученный массив.*/
let arr = [];

function number(arr) {

    let m = +prompt('Введите первое число диапaзона'),
        n = +prompt('Введите второе число диапaзона');

    for (i = m; i <= n; i++) {
        arr.push(i);
    
        if (m > n) m--;
        else m++;
    }
}

number(arr);

function showfunct(arr) {
    console.log(arr);
}
showfunct(arr);

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
если нечетное - false.*/
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false
    }
}

/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый
массив, где останутся лежать только четные из этих чисел. Для этого используйте
вспомогательную функцию isEven из предыдущей задачи.*/
let arr_6 = [5, 8, 6, 45, 87, 52, 14];

function even(e) {

    let newArr = [];

    for (let i = 0; i < e.length; i++) {
        if (isEven(e[i])) {
            newArr.push(e[i]);
        }
    }
    return newArr;
}

console.log(even(arr_6));

/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр,
непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то
пирамида должна быть нарисована этим символом, например:
*
**
***
****
*****
******
*******
********
*********
*/
function triangle_7(k, l) {

    let str_7 = [];

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= k; j++) {

            if (l == undefined) {
                if (j <= i) str_7.push(i);
            } else {
                if(j <= i) str_7.push(l);
            }
        }

        console.log(str_7.join(''));
        str_7 = [];
    }
 }

triangle_7(9);



