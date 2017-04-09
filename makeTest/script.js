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
        let text;
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

        // try to create class name Test
        function Test(question, answers, answerRight, key) {
                this.question = question; 
                this.answers = answers;
                this.answerRight = answerRight;
                this.key = key;
        };

        // try to add some methods to class 
        Test.prototype.print = function() {
               console.log(this);
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

                const myTest = new Test(text, answers, answerRight, 'firstQuestion');

                //  next 2 lines is for inheritance, but didn't wotj as i want 
                myTest.prototype = Object.create(Test.prototype);
                myTest.prototype.constructor = Test;
                // this is for saving to localStorage with inner method of class 
                myTest.save();
        };

        var forPrint = document.getElementById('forPrint');
                forPrint.addEventListener('click', function() {

                        // search for my question 
                        let printQ = JSON.parse(localStorage.getItem('firstQuestion'));
                        
                        printQ.print();

                        // didn't see this - beacuse of scopes? 
                        myTest.print();

                        localStorage.clear();
                });
        
  });
})(document, window, domIsReady);