import {Observable, Observer} from 'rxjs';

let output = document.getElementById('output');
let btn = document.getElementById('btn');

let source = Observable.fromEvent(btn, 'click');

source
.flatMap(e => load('moviess.json'))
.subscribe(
    renderMovies,
    e => console.log(`error is: ${e}`),
    () => console.log('complete')
);

function load(url: string) {
    return Observable.create((observer: Observer<any>) => {
        let xhr = new XMLHttpRequest();

            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                  let data = JSON.parse(xhr.responseText);
                  observer.next(data);
                  observer.complete();
                } else {
                  observer.error(xhr.statusText);
                }
            })

            xhr.open('GET', url);
            xhr.send();
    }).retryWhen(retryStrategy({attempts: 3, delay: 1500}));
}

function retryStrategy({attempts = 4, delay = 1000}) {
  return (errors) => {
    return errors
      .scan((acc, value) => {
        console.log(acc, value);
        return acc + 1;
      }, 0)
      .takeWhile(acc => acc < attempts)
      .delay(delay);
  }
}
function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement('div');
        div.innerText = m.title;
        output.appendChild(div);
    });
}






// function onNext(value) {
//     circle.style.left = value.x;
//     circle.style.top = value.y;
// }

// .map((e: MouseEvent) => {
//     return {
//         x: e.clientX,
//         y: e.clientY
//     }
// })
// .filter(value => value.x < 500)
// .delay(300);



// let numbers = [1,5,10];
// let source = Observable.create((observer) => {
//     let index = 0;
//     let produceValue = () => {
//         observer.next(numbers[index++]);
//         if(index < numbers.length) {
//             setTimeout(produceValue, 250)
//         } else {
//             observer.complete();
//         }
//     };
//     produceValue();
// })
//     .map(x => x*2)
//     .filter(x => {return x > 2});

// source.subscribe(
//     value => console.log(`value is ${value}`),
//     e => console.error(`error is ${e}`),
//     () => console.info('complete')
// );
