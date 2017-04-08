'use strict';

(function(document, window, domIsReady, undefined) {
  domIsReady(function() {

        let qNumber = document.getElementById('qNumber');
        let question = document.getElementById('question');
        let form = document.querySelector('form');
        let answerWrapper = document.querySelector('.answer-wrapper');

        //  what kind of event will be better? tried with blur, changed
        qNumber.addEventListener('blur', function(){ 
                createAnswerInput(this.value);
        });

        question.addEventListener('blur', function(e) {
                var question = this.value;
        });

        function createAnswerInput(number) {
                for (let i =0; i < number; i++) {
                        let label = document.createElement('label');
                        label.classList.add('answer');
                        let input = document.createElement('input');
                        input.type = 'text';
                        let radio = document.createElement('input');
                        radio.type = 'radio';
                        radio.name = 'answer';
                        radio.value = 'answer' + i;
                        label.appendChild(radio);
                        label.appendChild(input);
                        answerWrapper.appendChild(label);
                }
        }

        // function createButton() {
        //         let lastAnswer = document.querySelector('input[text]:last-of-type');
        //         lastAnswer.addEventListener('blur',  function() {
        //                 let button = document.createElement('button');
        //                 // button.type = 'submit' - submit will reload page?
        //                 button.innerHTML = 'create question';
        //                 form.appendChild(button);
        //         });
        // };
        // all oop-things will be after i can take all the data from page 


        function Test() {
                this.question = question.text;
                this.answers = {};
                this.answerRight = answerRight;
        }

  });
})(document, window, domIsReady);