import {Observable} from 'rxjs';

let numbers = [1,5,10];
let source = Observable.create((observer) => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);
        if(index < numbers.length) {
            setTimeout(produceValue, 250)
        } else {
            observer.complete();
        }
    };
    produceValue();
})
    .map(x => x*2)
    .filter(x => {return x > 2});

source.subscribe(
    value => console.log(`value is ${value}`),
    e => console.error(`error is ${e}`),
    () => console.info('complete')
);