var animal = {
    name: 'Fido',
    species: 'Dog',
    age: 5,
    speak: () => {
        console.log('Wof!');
    }
}

function calculateAge(birthYear) {
    return Date.now() - birthYear;
}

// unioin types (with pipe or OR operator)
// function totalLength(x: (string | any[]), y: (string | any[])): number {
//     let total: number = x.length + y.length;

//     x.slice(0);

//     //  type-guard syntax 
//     if (x instanceof Array) {
//         x.push('abc');
//     }

//     if (x instanceof String) {
//         x.substr(1);
//     }

//     return total;
// }

// overloaded functions 
function totalLength(x: string, y: string): number 
function totalLength(x: any[], y: any[]): number 
function totalLength(x: (string | any[]), y: (string | any[])): number {
    let total: number = x.length + y.length;

    x.slice(0);

    //  type-guard syntax 
    if (x instanceof Array) {
        x.push('abc');
    }

    if (x instanceof String) {
        x.substr(1);
    }

    return total;
}
