// let sum = prompt("Mabilag'ingizni kiriting:");

// let umumiyRasxod = 9732000;

// if (sum >= umumiyRasxod) {
//   console.log("oq yo'l, safaringiz behatar bo'lsin");
// } else {
//   console.log(
//     "Biroz sabir qiling. Sizda yetarli mablag' mavjud emas.",
//     umumiyRasxod - sum,
//     "so'm mablag' kam."
//   );
// }

// 1-masala

// let number = Number(prompt("sonni kiriting:"));

// if (number > 0) {
//   alert(number + 1);
// } else {
//   alert(number);
// }

// 2-masala

// let number = Number(prompt("sonni kiriting:"));

// if (number > 0) {
//   alert(number + 1);
// } else {

//   alert(number-2);
// }

// 3-masala

// let number = Number(prompt("sonni kiriting:"));

// if (number > 0) {
//   alert(number + 1);
// } else if (number == 0) {
//   alert((number = 10));
// } else {
//   alert(number - 2);
// }

// 4-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));
// let sum = 0;
// if (num1 > 0) {
//   sum++;
// }
// if (num2 > 0) {
//   sum++;
// }
// if (num3 > 0) {
//   sum++;
// }
// alert(`Musbat sonlar ${sum} ta.`);

// 5-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));
// let sum = 0;
// let sumNegat = 0
// if (num1 > 0) {
//   sum++;
// }else {
//   sumNegat++
// }
// if (num2 > 0) {
//   sum++;
// }else {
//   sumNegat++
// }
// if (num3 > 0) {
//   sum++;
// }else {
//   sumNegat++
// }
// alert(`Musbat sonlar ${sum} ta. Manfiy sonlar ${sumNegat} ta.`);

// 6-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// if (num1 > num2) {
//   alert(num1 + " , " + num2 + " dan katta.");
// } else {
//   alert(`${num2}, ${num1} dan katta.`);
// }

// 7-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// if (num1 < num2) {
//   alert("1-son kichik");
// } else {
//   alert("2-son kichik");
// }

// 8-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// if (num1 > num2) {
//   alert(`${num1}, ${num2}`);
// } else {
//   alert(`${num2}, ${num1}`);
// }

// 9-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// if (num1 > num2) {
//   alert(`${num2}, ${num1}`);
// } else {
//   alert(`${num1}, ${num2}`);
// }

// 10-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// if (num1 == num2) {
//   alert(`${(num1 = 0)}, ${(num2 = 0)}`);
// } else {
//   alert(`${num1 + num2}, ${num1 + num2}`);
// }

// 11-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// if (num1 > num2) {
//   alert(`${(num1 = num1)}, ${(num2 = num1)}`);
// } else if (num2 > num1) {
//   alert(`${(num1 = num2)}, ${(num2 = num2)}`);
// } else {
//   alert(`${(num1 = 0)}, ${(num2 = 0)}`);
// }

// 12-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));

// if (num1 <= num2 && num1 <= num3) {
//   alert(`${num1} eng kichigi.`);
// } else if (num2 <= num1 && num2 <= num3) {
//   alert(`${num2} eng kichigi.`);
// } else if (num3 <= num2 && num3 <= num1) {
//   alert(`${num3} eng kichigi.`);
// }

// 13-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));

// if ((num3 <= num1 && num1 <= num2) || (num2 <= num1 && num1 <= num3)) {
//   alert(`${num1} O'rtachasi.`);
// } else if ((num3 <= num2 && num2 <= num1) || (num1 <= num2 && num2 <= num3)) {
//   alert(`${num2} O'rtachasi.`);
// } else if ((num1 <= num3 && num3 <= num2) || (num2 <= num3 && num3 <= num1)) {
//   alert(`${num3} O'rtachasi.`);
// }

// 14-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));

// if (num3 <= num1 && num1 <= num2) {
//   alert(` ${num3} kichigi, ${num2} kattasi.`);
// } else if (num2 <= num1 && num1 <= num3) {
//   alert(`${num2} kichigi, ${num3} kattasi.`);
// } else if (num3 <= num2 && num2 <= num1) {
//   alert(`${num3} kichigi, ${num1} kattasi`);
// } else if (num1 <= num2 && num2 <= num3) {
//   alert(`${num1} kichigi, ${num3} kattasi.`);
// } else if (num1 <= num3 && num3 <= num2) {
//   alert(`${num1} kichigi, ${num2} kattasi. `);
// } else if (num2 <= num3 && num3 <= num1) {
//   alert(`${num2} kichigi, ${num1} kattasi.`);
// }
// 15-masala

// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));

// if (num3 <= num1 && num1 <= num2) {
//   alert(${num1 + num2}, ${num3 + num2});
// } else if (num2 <= num1 && num1 <= num3) {
//   alert(${num2 + num3}, ${num3 + num1});
// } else if (num3 <= num2 && num2 <= num1) {
//   alert(${num3 + num1}, ${num1 + num2});
// } else if (num1 <= num2 && num2 <= num3) {
//   alert(${num1 + num3}, ${num3 + num2});
// } else if (num1 <= num3 && num3 <= num2) {
//   alert(${num1 + num2}, ${num2 + num3} );
// } else if (num2 <= num3 && num3 <= num1) {
//   alert(${num2 + num1}, ${num1 + num3});
// }


// BOOLEAN EXR.

// 1-masala

// let num = prompt("Musbat sonni kiriting:");

// if (num > 0) {
//   alert("true");
// } else {
//   alert("false");
// }

// 2-masala

// let num = prompt("Toq sonni kiriting:");

// if (num % 2 == 1) {
//   alert("true.");
// } else {
//   alert("false.");
// }

// 3-masala

// let num = prompt("Juft sonni kiriting:");

// if (num % 2 == 0) {
//   alert("true.");
// } else {
//   alert("false.");
// }

// 4-masala

// let num1 = prompt("A sonini kiriting (A>2):");
// let num2 = prompt("B sonini kiriting (B<=3):");

// if (num1 > 2 && num2 <= 3) {
//   alert("true");
// } else {
//   alert("false");
// }

// 5-masala

// let num1 = prompt("A sonini kiriting (A>=0):");
// let num2 = prompt("B sonini kiriting (B<-2):");

// if (num1 >= 0 || num2 < -2) {
//   alert("true");
// } else {
//   alert("false");
// }

// 6-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Siz kiritgan sonlar A<=B<=C bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (num1 <= num2 && num2 <= num3) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 7-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda 'B' o'rtacha qiymatta bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if ((num1 <= num2 && num2 <= num3) || (num1 >= num2 && num2 >= num3)) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 8-masala

// let num1 = prompt("A sonini kiriting (A=toq):");
// let num2 = prompt("B sonini kiriting (B=toq):");

// if (num1 % 2 == 1 && num2 % 2 == 1) {
//   alert("true");
// } else {
//   alert("false");
// }

// 9-masala

// let num1 = prompt("A sonini kiriting (A=toq):");
// let num2 = prompt("B sonini kiriting (B=toq):");

// if (num1 % 2 == 1 || num2 % 2 == 1) {
//   alert("true");
// } else {
//   alert("false");
// }

// 10-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda hech bo'lmaganda bittasi toq bo'lsin."
// );
// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");

// if ((num1 % 2 == 1 && num2 % 2 == 0) || (num1 % 2 == 0 && num2 % 2 == 1)) {
//   alert("true");
// } else {
//   alert("false");
// }

// 11-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda ikkala kiritilgan sonlar yoki juft yoki toq bolsin."
// );
// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");

// if ((num1 % 2 == 1 && num2 % 2 == 1) || (num1 % 2 == 0 && num2 % 2 == 0)) {
//   alert("true");
// } else {
//   alert("false");
// }

// 12-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda barcha kiritilgan sonlar musbat bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (num1 >0 && num2>0 && num3>0) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 13-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda hech bo'lmaganda 1 tasi musbat bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (num1 > 0 || num2 > 0 || num3 > 0) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 14-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda faqatgina 1 tasi musbat bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (
//   (num1 > 0 && num2 < 0 && num3 < 0) ||
//   (num1 < 0 && num2 > 0 && num3 < 0) ||
//   (num1 < 0 && num2 < 0 && num3 > 0)
// ) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 15-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda 2 tasi musbat bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (
//   (num1 > 0 && num2 > 0 && num3 < 0) ||
//   (num1 < 0 && num2 > 0 && num3 > 0) ||
//   (num1 > 0 && num2 < 0 && num3 > 0)
// ) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 16-masala

// let num = prompt("2 xonali juft son kiriting:")

// if (100>num && num>9 && num%2==0) {
//   alert(true)
// }else {
//   alert(false)
// }

// 17-masala

// let num = prompt("3 xonali toq son kiriting:")

// if (1000>num && num>99 && num%2==1) {
//   alert(true)
// }else {
//   alert(false)
// }

// 18-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda hech bo'lmaganda 2 tasi bir biriga teng bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (num1 == num2 || num2 == num3 || num1 == num3) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 19-masala

// alert(
//   "3 ta A,B,C sonlarini kiriting. Bu yerda hech bo'lmaganda 2 tasi bir biriga qarama qarshi  bo'lishi kerak."
// );

// let num1 = prompt("A sonini kiriting:");
// let num2 = prompt("B sonini kiriting:");
// let num3 = prompt("C sonini kiriting:");

// if (num1 == -num2 || num2 == -num3 || num1 == -num3) {
//   alert("true");
// } else {
//   alert("flase");
// }

// 20-masala

// alert("3 xonali son kiriting, kiritgan sonning raqamlari o'zaro farq qilsin");

// let num = prompt("Sonni kiriting:");

// if (
//   (num - (num % 100)) / 100 != ((num % 100) - (num % 10)) / 10 &&
//   ((num % 100) - (num % 10)) / 10 != num % 10 &&
//   (num - (num % 100)) / 100 != num % 10
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// 21-masala

// alert("3 xonali son kiriting kiritgan, soningiz ketma ket o'suvchi bo'lsin.");

// let num = prompt("Sonni kiriting:");

// if (
//   (num - (num % 100)) / 100 < ((num % 100) - (num % 10)) / 10 &&
//   ((num % 100) - (num % 10)) / 10 < num % 10
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// 22-masala

// alert("3 xonali son kiriting, kiritgan soningiz ketma ket o'suvchi yoki ketma ket kamayuvchi son  bo'lsin.");

// let num = prompt("Sonni kiriting:");

// if (
//   ((num - (num % 100)) / 100 < ((num % 100) - (num % 10)) / 10 &&
//     ((num % 100) - (num % 10)) / 10 < num % 10) ||
//   ((num - (num % 100)) / 100 > ((num % 100) - (num % 10)) / 10 &&
//     ((num % 100) - (num % 10)) / 10 > num % 10)
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// 23-masala

// alert(
//   "3 xonali son kiriting, kiritgan soningiz o'ngdan o'qilganda ham chapdan o'qilganda ham bir xil  bo'lsin."
// );

// let num = prompt("Sonni kiriting:");

// if (num < 1000 && num > 99 && (num - (num % 100)) / 100 == num % 10) {
//   alert(true);
// } else {
//   alert(false);
// }

// FORLI MASALALAR
// 1-masala

// let num = prompt("Sonni kiriting:");

// for (i = 1; i <= num; i++) console.log(i);

// 2-masala

// let num = prompt("Sonni kiriting:");

// for (i = num; i >= 1; i--) console.log(i);

// 3-masala

// let num = prompt("Sonni kiriting:");
// let sum = 0;
// for (i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);

// 4-masala

// let num = prompt("Sonni kiriting:");
// let sum = 0;
// for (i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(sum);

// 5-masala

// let num = prompt("Sonni kiriting:");
// let sum = 0;
// for (i = 1; i <= num; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(sum);

// 6-masala

// let num = prompt("Sonni kiriting:");

// for (i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

// 7-masala

// let num = prompt("Sonni kiriting:");
// let sum = 0;
// let count = 0;
// for (i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     count++;
//     sum += i;
//   }
// }
// console.log(
//   `${num} ning bo'luvchilarining yeg'indisi ${sum}, ${num} ning bo'luvchilar soni ${count} ta.`
// );

// 8-masala

// let num = prompt("Tub sonni kiriting:");
// let count = 0;
// for (i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     count++;
//   }
// }
// if (count == 2) {
//   console.log("tub son");
// } else if (count == 1) {
//   console.log("1 raqami tubga ham, tub emasga ham kirmaydi!");
// } else {
//   console.log("tub son emas");
// }