booky.directive('totalItems', function () {
    return {
            template: `
            <p>total tablets: {{ctrl.tablets.length}}</p>
            <p>total phones: {{ctrl.phones.length}}</p>
            `
    };
});


// function (scope, element, attrs) {
//     var phones = self.phones;
//     var tablets = self.tablets;
//
//     // if (ctrl.setFile() == 'tabletsList.html') {
//     //     console.log(tablets.length);
//     // } esle {
//     //     console.log(phones.length);
//     // }
// }
