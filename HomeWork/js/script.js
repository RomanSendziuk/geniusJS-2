// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// const userNumber = prompt(`Please provide a number`);
// let message;
// if (userNumber > 0) {
//   message = true;
// } else {
//   message = false;
// }

// alert(message);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const userInput = prompt(`Please provide a "test" string`);
// let message;
// if (userInput === "test") {
//   message = true;
// } else {
//   message = false;
// }

// alert(message);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const userInput = prompt(`Please provide a number`);
// let message = userInput;
// if (userInput > 10) {
//   message = userInput - 5;
// } else if (userInput < 10) {
//   message = userInput + 5;
// }

// alert(message);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const userInput = prompt(`Please provide a number of month`);
// let message;

// if (userInput > 12 || userInput < 12) {
//   message = "error";
// } else {
//   message = new Date(null, userInput - 1).toLocaleString("en-GB", {
//     month: "long",
//   });
// }

// alert(message);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const userInput = prompt(`Please provide a 3-digit number`);
// let message;

// if (userInput?.length === 3) {
//   message = userInput.split("").reduce((val, accumulator) => {
//     const num = Number(val);
//     console.log(num);
//     return num + Number(accumulator);
//   }, 0);
// } else {
//   message = `error`;
// }

// alert(message);
