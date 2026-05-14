//MIT ALGORITHM TASK 2

// function countLetter(letter, word) {
//   let count = 0;
//   for (let char of word) {
//     if (char.toLowerCase() === letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// //EXAMPLES
// console.log(countLetter("M", "Mashaqat"));
// console.log(countLetter("S", "Success"));
// console.log(countLetter("P", "Happiness"));

//MIT ALGORITHM TASK B
// function countDigits(str) {
//   return Array.from(str).filter((ch) => ch >= "0" && ch <= "9").length;
// }
// run();
// console.log(countDigits("545hjhljlkjlkhgf45454h45"));

// MIT ALGORITHM TASK C

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const sorted1 = str1.split("").sort().join("");
//   const sorted2 = str2.split("").sort().join("");
//   return sorted1 === sorted2;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("hello", "lloeeh"));

// MIT ALGORITHM TASK D

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // Helper: current time
//   vaqt() {
//     const now = new Date();
//     const soat = now.getHours().toString().padStart(2, "0");
//     const daqiqa = now.getMinutes().toString().padStart(2, "0");
//     return `${soat}:${daqiqa}`;
//   }

//   // Show remaining stock
//   qoldiq() {
//     console.log(
//       `Hozir ${this.vaqt()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${
//         this.cola
//       }ta cola mavjud!`
//     );
//   }

//   // Sell products
//   sotish(mahsulot, miqdor) {
//     if (this[mahsulot] === undefined) {
//       console.log(`❌ ${mahsulot} mavjud emas!`);
//       return;
//     }
//     if (this[mahsulot] < miqdor) {
//       console.log(
//         `❌ Yetarli ${mahsulot} yo'q! Faqat ${this[mahsulot]}ta bor.`
//       );
//       return;
//     }
//     this[mahsulot] -= miqdor;
//     console.log(`✅ ${this.vaqt()}da ${miqdor}ta ${mahsulot} sotildi!`);
//   }

//   // Receive products
//   qabul(mahsulot, miqdor) {
//     if (this[mahsulot] === undefined) {
//       console.log(`❌ ${mahsulot} mavjud emas!`);
//       return;
//     }
//     this[mahsulot] += miqdor;
//     console.log(`✅ ${this.vaqt()}da ${miqdor}ta ${mahsulot} qabul qilindi!`);
//   }
// }

// // ─── TEST ─────────────────────────────────────────────────
// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// // Hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!

// shop.sotish("non", 3);
// // ✅ 20:45da 3ta non sotildi!

// shop.qabul("cola", 4);
// // ✅ 20:45da 4ta cola qabul qilindi!

// shop.qoldiq();
// // Hozir 20:45da 1ta non, 5ta lagmon va 6ta cola mavjud!

// shop.sotish("lagmon", 10); // not enough stock
// // ❌ Yetarli lagmon yo'q! Faqat 5ta bor.

// shop.sotish("sut", 2); // doesn't exist
// // ❌ sut mavjud emas!

// MIT ALGORITHM TASK E

// function getReverse(str) {
//   return str.split('').reverse().join('');
// }

// // Test
// console.log(getReverse("hello")); // "olleh"
// console.log(getReverse("world")); // "dlrow"

// MIT ALGORITHM TASK F 

// function findDoublers(str) {
//   const seen = new Set();
//   for (const ch of str) {
//     if (seen.has(ch)) return true;
//     seen.add(ch);
//   }
//   return false;
// }

// // misol
// console.log(findDoublers("hello")); // true
// console.log(findDoublers("world")); // false

// MIT ALGORITHM TASK G  

// function getHighestIndex(arr) {
//   const max = Math.max(...arr);
//   return arr.indexOf(max);
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));

// MIT ALGORITHM TASK H-TASK

// function getPositive(arr) {
//   return arr.filter(num => num > 0).join('');
// }

// // Test
// console.log(getPositive([1, -4, 2]));      // "12"

// MIT ALGORITHM TASK I-TASK

function majorityElement(arr) {
  let count = {};
  let maxCount = 0;
  let result;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      result = num;
    }
  }

  return result;
}

// Test
console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 4
