// 61. (*) BigInt

// const bigint = 53446567678467756878767537673567854624624626625662n;

const sameBigint = BigInt(53446567678467756878767537673567854624624626625662);

// console.log(typeof(bigint));

// console.log(5n / 2n);  // 2n огругляет

// let bigint = 1n;
// let number = 2;

console.log(bigint + BigInt(number));  // 3n
console.log(Number(bigint) + number);  // 3