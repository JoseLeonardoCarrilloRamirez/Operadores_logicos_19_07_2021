// let vasoPlastico = true;
// let cafeSinAzucar = false;
// console.log(vasoPlastico && cafeSinAzucar);




// let resultado = 5>3;
// let resultado2 = 5>=5;
// console.log(`Valor de la variable resultado:`,resultado,` y valor de la variable resultado2:`,resultado2);
// console.log(resultado,` && `,resultado2,` = `,(resultado && resultado2));

let A = true;
let B = false;

const myCssHead = `
    background: #ddeeff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: 2px solid #aaa;
`;
let myCssBoby = `

    background: #dfd;
    font-family:Arial, Helvetica, Verdana, Geneva, Tahoma, sans-serif, cursive;
    border: 2px solid #aaa;
    font-weight: bold
`;
console.log(`%c         OPERADORES LOGICOS                `,' border-bottom: .10em solid #aaa; padding:.1em; font-size: 2em;');
console.log(`%cOperadores AND`,myCssHead);
console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssBoby);
console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${A && B}`,myCssBoby);
console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${!A && !B}`,myCssBoby);
console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B = ${!A && B}`,myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssBoby);
console.log(`%c                                                     `,' border-bottom: .10em solid #aaa; padding:.1em; font-size: 2em;');
console.log(`%cOperadores OR`,myCssHead);
console.log(`%c1. A: ${!(!A)} (OPERADOR OR) B: ${!B} A || B = ${!(!A) || !B}`,myCssBoby);
console.log(`%c2. A: ${A} (OPERADOR OR) B: ${B} A || B = ${A || B}`,myCssBoby);
console.log(`%c3. A: ${!A} (OPERADOR OR) B: ${!B} A || B = ${!A || !B}`,myCssBoby);
console.log(`%c4. A: ${!A} (OPERADOR OR) B: ${B} A || B = ${!A || B}`,myCssBoby);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,myCssBoby);
console.log(`%c                                                     `,' border-bottom: .10em solid #aaa; padding:.1em; font-size: 2em;');
console.log(`%cOperadores NOT`,myCssHead);
console.log(`%c 1. A: ${A} (OPERADOR NOT) !A ${!A}`,myCssBoby);
console.log(`%c 2. B: ${B} (OPERADOR NOT) !B ${!B}`,myCssBoby);


// Operador AND (&&)
let tablaAND = document.querySelector("#myTablaAND");
tablaAND.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) && !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
    <tr>
        <td>${  !A}</td>
        <td>${!B}</td>
        <td>${!A && !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A && B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) || !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A || B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${!B}</td>
        <td>${!A || !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A || B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador NOT (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
`;








// let vasoPlastico = true;
// let cafeSinAzucar = false;
// console.log(vasoPlastico && cafeSinAzucar);




// let resultado = 5>3;
// let resultado2 = 5>=5;
// console.log(`Valor de la variable resultado:`,resultado,` y valor de la variable resultado2:`,resultado2);
// console.log(resultado,` && `,resultado2,` = `,(resultado && resultado2));