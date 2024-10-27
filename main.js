// // 1nchi

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const tahrir = new Set(arr);

// console.log([...tahrir]);

// // 2nchi

// const arr = ["apple", "banana", "apple", "orange", "banana", "banana"];

// let map = new Map();

// arr.forEach((value) => {
//   if (map.has(value)) {
//     let javob = map.get(value);
//     map.set(value, javob + 1);
//   } else {
//     map.set(value, 1);
//   }
// });

// console.log(map);

// // 5nchi

// let array = [1, 2, 3, 4, 5];

// map = new Map();

// array.forEach((item) => {
//   map.set(item, item ** 2);
// });

// console.log(map);

// // 6nchi

// const array = [1, 2, 3, 2, 4, 1];
// const set = new Set();
// const set2 = new Set();

// array.forEach((item) => {
//   if (set.has(item)) {
//     set2.add(item);
//   } else {
//     set.add(item);
//   }
// });

// console.log(set2);

// // 7nchi

// let array = [10, 15, 20, 25, 30];
// let tekshir = 20;
// let set = new Set();

// array.forEach((item) => {
//   if (item > tekshir) {
//     set.add(item);
//   }
// });

// console.log(set);

// // 8nchi

// let arr = ["a", "b", "a", "c", "b", "c", "c"];

// let map = new Map();

// arr.forEach((item) => {
//   if (map.has(item)) {
//     qosh = map.get(item);
//     map.set(item, 1 + qosh);
//   } else {
//     map.set(item, 1);
//   }
// });

// console.log(map);

// // 9nchi

// let arr = [1, 1, 2, 3, 3, 4, 5, 5];
// set = new Set(arr);

// console.log(Array.from(set));

// // 10nchi

// let keys = ["name", "age", "city"];
// let value = ["John", 30, "New York"];
// map = new Map();
// for (let i = 0; i < keys.length; i++) {
//   map.set(keys[i], value[i]);
// }
// console.log(map);

////////////////////////////////////////qoshimchalar

// // 1. har bir harf necha marta uchrashganini hisoblash
// // Map(7) { "h" => 1, "e" => 1, "l" => 3, "o" => 2, "w" => 1, "r" => 1, "d" => 1 }

// const str = "hello world";

// let arr = str.split("");
// let map = new Map();

// arr.forEach((item) => {
//   if (map.has(item)) {
//     hisob = map.get(item);
//     map.set(item, 1 + hisob);
//   } else {
//     map.set(item, 1);
//   }
// });
// console.log(map);

// // 2.Har bir talabaga baho qoyish, eng oxirgisini

// const grades = [
//   ["Alice", 85],
//   ["Bob", 90],
//   ["Alice", 92],
//   ["Charlie", 88],
//   ["Bob", 95],
// ];

// const map = new Map();

// grades.forEach(([item, baho]) => {
//   map.set(item, baho);
// });

// console.log(map);

// // 3. Unikal string so'zlarni topish

// let str = "apple banana apple kiwi cherry banana kiwi";
// let arr = str.split(" ");
// let set = new Set();

// arr.forEach((item) => {
//   if (arr.indexOf(item) === arr.lastIndexOf(item)) {
//     set.add(item);
//   }
// });

// console.log(set);

// // 4. 1 dan 10 gacha bo'lgan sonlardan faqat toq sonlarni ajratish

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let set = new Set();

// num.forEach((item) => {
//   if (item % 2 !== 0) {
//     set.add(item);
//   }
// });

// console.log(set);

// // 5. Har bir so'zning birinchi harfini ajratish

// let arr = ["apple", "banana", "kiwi", "apricot", "cherry"];
// let set = new Set();

// arr.forEach((item) => {
//   set.add(item[0]);
// });

// console.log(set);
