// detallitos

// igualdad, y igualdad estricta, s ha de fer amb un o dos "="

// asignación de adición x += y(x = x + y)
// asignación de resta x -= y(x = x - y)
// asignación de multiplicación x _ = y(x = x _ y)
// asignación de división x /= y(x = x / y)
// asignación de resto x %= y(x = x % y)
// asignación de exponenciación x **= y(x = x ** y)

// typeof es per cambiar, el tipus de variables
const foo = 3;
const bar = "4";
const result = foo + bar;
console.log(result, typeof result); // 34 string

// una altra menra de fer ho seria aquesta

const foo1 = 3;
const bar1 = "4";
let result1 = foo1 + bar1;
console.log(result1, typeof result1); // 34 string
result1 = foo1 + Number(bar1);
console.log(result1, typeof result1); // 7 number
result1 = foo1 + +bar1;
console.log(result1, typeof result1); // 7 number

// false en boolena, diferents maneres de declarar

console.log(Boolean(false)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false

