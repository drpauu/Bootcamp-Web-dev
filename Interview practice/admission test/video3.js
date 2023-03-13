const name = 'pau'

let age = '20'

let flag = true

let id = Symbol() // simbols

// bigint 
// operacions aritmetiques o nombres molt grans

let maxNumber = BigInt(30)
let maxNumber2 = 5947263587235n;

//undefined o null
let foo // aixo es undefined 
let bar = null // aixo es null

// no primitius
//objectes


// son com structs
const car = {
    color: 'blue', // vigila al posar les cometes
    size: 420
}
// cambiar el color, ja que es un let i s epot modificar
car.color = 'vermell'
// per imprimir per pantalla 
console.log(car.color) // obviament