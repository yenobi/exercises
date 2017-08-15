var animal = {
    name: 'Fido',
    species: 'Dog',
    age: 5,
    speak: function () {
        console.log('Wof!');
    }
};
function calculateAge(birthYear) {
    return Date.now() - birthYear;
}
function totalLength(x, y) {
    var total = x.length + y.length;
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
