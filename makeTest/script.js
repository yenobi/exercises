'use strict';

(function(document, window, domIsReady, undefined) {
  domIsReady(function() {

        let qNumber = document.getElementById('qNumber');
        let question = document.getElementById('question');
        let form = document.querySelector('form');
        let answerWrapper = document.querySelector('.answer-wrapper');
        let button = document.querySelector('button');

        //  what kind of event will be better? tried with blur, changed
        qNumber.addEventListener('blur', function(){ 
                createAnswerInput(this.value);
        });

         // can do without external var? 
        var text;
        question.addEventListener('blur', function(e) {
                text = this.value;
        });

        function createAnswerInput(number) {
                for (let i =0; i < number; i++) {
                        let label = document.createElement('label');
                        let input = document.createElement('input');
                        input.type = 'text';
                        input.id = 'answer' + i;
                        input.classList.add('answer');
                        let radio = document.createElement('input');
                        radio.type = 'radio';
                        radio.name = 'answer';
                        radio.value = 'answer' + i;
                        radio.classList.add('answerRadio');
                        label.appendChild(radio);
                        label.appendChild(input);
                        answerWrapper.appendChild(label);
                }
        }

        function Test(question, answers, answerRight, key) {
                this.question = question; 
                this.answers = answers;
                this.answerRight = answerRight;
                this.key = key;
        };

        Test.prototype.print = function() {
               console.log(JSON.parse(localStorage.getItem(this.key)));
        };

        Test.prototype.save = function() {
                var json_test = JSON.stringify(this);
                localStorage.setItem(this.key, json_test);
        };

        button.addEventListener('click', saveQuestion);

        function saveQuestion() {
                var answers = Array.prototype.slice.call(document.querySelectorAll('.answer'));
                var answersRadio = Array.prototype.slice.call(document.querySelectorAll('.answerRadio')); 

                // can do without external var?  x2
                var answerRight;
                answersRadio.forEach(function(e) {
                        if (e.checked == true) {
                                console.log(answersRadio.indexOf(e));
                                return answerRight = answersRadio.indexOf(e); 
                        }
                }, this);

                var myTest = new Test(text, answers, answerRight, 'firstQuestion');
                myTest.save();
        };

//  the pre-last step1 - make a button that do console.log of question from localStorage
        var forPrint = document.getElementById('forPrint');
        forPrint.addEventListener('click', function() {

        });

        // the pre-last-step 2 - clean all the inputs 

        // the last step - make a button to clean localStorage 

  });
})(document, window, domIsReady);