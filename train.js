//======NODE JS EVENT LOOP VA CALLBACK FUNCTIONLAR

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talab boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// CALL BACK
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

//MIT ALGORITHM TASK 1

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

//======ASYNCHRONOUS FUNCTIONLARNI QO'LLASH

console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talab boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

//ASYNC function
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    // return list[5];
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });
    //   setTimeout(() => {
    //     resolve(list[5]);
    //   }, 5000);
    // });
    // setTimeout(function () {
    //   callback(null, list[5]);
    // }, 5000);
  }
}

//PIRAMIDA USULI

// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     maslahatBering(30)
//     .then((data)) => {
//       maslahatBering(40)
//       .then ((data) => {
//         console.log("javob:",data);
//       })
//       .catch((err) => {
//         console.log("ERROR", err);
//       });
//       console.log("passed here 1");
//       console.log("javob:",data);
//     })
//     catch((err) .catch((err) => {
//     console.log("ERROR:", err);
//   });
//     console.log("javob:", data);
//     console.log("passed here 1");
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// call via then/catch

//console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

//async/await
async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
