// exercici: cuenta las veces que aparece una letra en una lista de
// palabras.
// Lista de palabras: ['table', 'car', 'some', 'space', 'world']
// la letra que hay que buscar se guardara en una variable para poder
// ir cambiandola , finalmente, saca el resultado por pantalla

const paraules = ['table', 'car', 'some', 'space', 'world']

let lletra = 's'

let contador = 0

for (let i = 0; i < paraules.length; i++) {
    for (let j = 0; j < paraules[i].length; j++) {
        if(paraules[i][j] === lletra){ // son tres iguals, no dos
            contador = contador + 1
        }
    }
}

console.log('Aquesta lletra ' + lletra + ' ha sortit ' + contador + ' vegades.')

// hi ha un video que no he fet, que suposu que es el dels fors,
// pero es bastant irrellevant