import {Observable, Observer} from 'rxjs';
// import {load, loadWithFetch} from './loader';

let output = document.getElementById('output');
let btn = document.getElementById('btn');

let source = Observable.fromEvent(btn, 'click');

loadWithFetch('moviess.json').subscribe(
  renderMovies,
  e => console.log(`error: ${e}`),
  () => console.log('complete!')
);

source
.flatMap(e => loadWithFetch('movies.json'))
.subscribe(
  renderMovies,
  e => console.log(`error is: ${e}`),
  () => console.log('complete')
);

function renderMovies(movies) {
  movies.forEach(m => {
    let div = document.createElement('div');
    div.innerText = m.title;
    output.appendChild(div);
  });
}

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
    }).retryWhen(retryStrategy(3, 1500));
}

function loadWithFetch(url: string) {
  return Observable.defer(() => {
    return Observable.fromPromise(fetch(url).then(r => {
      if (r.status === 200) {
        return r.json();
      } else {
        return Promise.reject(r);
      }
    }));
  }).retryWhen(retryStrategy())
}

function retryStrategy(attempts = 4, delay = 1000) {
  return (errors) => {
    return errors
      .scan((acc, value) => {
        acc += 1;
        if (acc < attempts) {
          return acc;
        } else {
          throw new Error(value.json());
        }
      }, 0)
      .delay(delay);
  }
}

// let source = Observable.create((observer: Observer<any>) => {
//   observer.next(1);
//   observer.next(2);
//   observer.error('STOP!');
//   observer.next(3);
//   observer.complete();
// });
//
// source.subscribe(
//   (value) => {
//   console.log(`value is ${value}`)
//   },
//   (error) => console.log(`error is ${error}`),
//   () => console.log('complte')
// );


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
