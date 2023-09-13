"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Задаем массив
function randomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.ceil(Math.random() * 9));
  }
  return arr;
}
let length = 5;
const myArr = randomArray(length);
console.log(`Generated array: [${myArr}]`);

// Сумма элементов массива
function sum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}
console.log(`The sum of items is ${sum(myArr)}`);

// Минимальное значение в массиве
function min(arr) {
  const min = Math.min(...arr);
  return min;
}
console.log(`The minimum value is ${min(myArr)}`);

// 3. Найти есть ли в этом массиве число 3

function presence(number) {
  if (number > 0) {
    return `В массиве присутствует цифра 3 в количистве - ${number} шт.`;
  } else {
    return `В массиве нет цифр 3`;
  }
}

function findThree(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      let result = arr.findIndex((arr) => arr.includes(3));
      return result;
    } else {
      console.log("[]");
    }
  }
}

console.log(findThree(myArr));
