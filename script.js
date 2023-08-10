//1
function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  //2
  function calcArrProduct(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return Promise.reject("Error! Incorrect array!");
      }
      result *= arr[i];
    }
    return Promise.resolve(result);
  }
  //3
  new Promise(function (resolve, reject) {
    var userInput;
    
    // Запитуємо у користувача number за допомогою prompt()
    userInput = prompt("Введіть число: ");
    
    // Якщо користувач ввів не число - викликаємо reject()
    if (!Number.isInteger(userInput)) {
    reject("Ви ввели не число!");
    } else {
    resolve(userInput);
    }
    }).catch(function (error) {
    // Запитуємо у користувача number, до тих пір, поки він його не введе
    var validInput = false;
    while (!validInput) {
    userInput = prompt("Ви ввели не число! Спробуйте знову: ");
    if (Number.isInteger(userInput)) {
    validInput = true;
    resolve(userInput);
    }
    }
    }).then(function (result) {
    // Вивід number у консоль
    console.log("Ви ввели число: " + result);
    });