"use strict";

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let new_arr = [1, 2, 100, 6, 7];
// arr = new_arr;
// console.log(new_arr);

const arr = [1, 2, 3, 4, 5, 6, 7];
const idx = arr.indexOf(3);
if (idx !== -1) arr[idx] = 100;
arr.splice(3, 2);
console.log(arr);
