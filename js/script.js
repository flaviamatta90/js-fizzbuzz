// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

// 1 Scrivi un programma che stampi i numeri da 1 a 100

var numeri = [];

for (var i = 1; i <= 100; i++) {
  numeri.push(i);

// 2 Per i multipli di 3 stampi “Fizz” al posto del numero;
  if (i % 3 === 0) {
    numeri.splice(-1, 1, 'Fizz');
  }

  // 3 Per i multipli di 5 stampi “Fizz” al posto del numero;
  if (i % 5 === 0) {
    numeri.splice(-1, 1, 'Buzz');
  }

  // 4 Per i multipli di 3 e 5 stampi “Fizz” al posto del numero;
  if (i % 15 === 0) {
    numeri.splice(-1, 1, 'FizzBuzz');
  }

}
console.log(numeri);
