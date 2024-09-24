//Loop through all numbers from 1 to 100.
for (let num= 1; num <= 100; num++) {
   
    console.log(num);
  }
  //If a number is divisible by 3, log “Fizz.”
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(num);
    }
}
// If a number is divisible by 5, log “Buzz.”
for (let num = 1; num <= 10; num++){ 
    if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
for (let num = 1; num <= 10; num++){ 
    if (num % 3 === 0 || num % 5 === 0) {
        console.log("Fizz Buzz");
    } else {
        console.log(num);
    }
}
// If a number is not divisible by either 3 or 5, log the number.
for (let num = 1; num <= 10; num++){ 
    if (num % 3  !== 0 && num % 5 !== 0) {
      
        console.log(num);
    }
}
// part 2 : Prime time

    
let n = 9; 
let number = n;

while (true) {
    let isPrime = true;
    if (number <= 1) isPrime = false;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
        break;
    }
    number++;
}

