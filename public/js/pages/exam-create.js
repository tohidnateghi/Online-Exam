'use strict'

document.getElementById('add').onclick = createNewBlock;
document.getElementById('title').addEventListener('input', removeErrorBlock);
document.getElementById('code').addEventListener('input', removeErrorBlock);
document.getElementById('time').addEventListener('input', removeErrorBlock);

var count = 0;
var number = 0;

function createNewBlock() {
    count++;
    number++;

    var block = document.querySelector('#blockSample');
    var newBlock = block.cloneNode(true);

    newBlock.classList.remove('d-none');
    newBlock.className += ' animated fadeIn';

    newBlock.querySelector('.q-number').innerHTML = number;
    newBlock.querySelector('textarea').id = 'question[' + count + '][text]';
    newBlock.querySelector('textarea').name = 'question[' + count + '][text]';
    newBlock.querySelectorAll('input[type=text]').forEach(function(input, i) {
        input.id = 'question[' + count + '][answer][' + (i + 1) + ']';
        input.name = 'question[' + count + '][answer][' + (i + 1) + ']';
    });
    newBlock.querySelectorAll('input[type=radio]').forEach(function(input, i) {
        input.id = 'question[' + count + '][option][' + (i + 1) + ']';
        input.name = 'question[' + count + '][option]';
    });

    newBlock.querySelectorAll('label').forEach(function(label, i) {
        label.setAttribute('for', 'question[' + count + '][option][' + (i + 1) + ']');

    });

    addEvents(newBlock);
    document.querySelector('#questions').appendChild(newBlock);
}

function removeFunction(event) {
    event.target.closest('.block').className += ' animated fadeOut';

    setTimeout(function() {
        event.target.closest('.block').remove();
        document.querySelectorAll('.q-number').forEach(function(el, i) {
            el.innerHTML = i;
        });
    }, 800);

    number--;
}

document.getElementById('create-exam-form').onsubmit = function(event) {
    event.preventDefault();

    var questions = document.querySelectorAll('#questions .block');

    var title = document.getElementById('title');
    if (title.value == '') {
        addErrorBlock(title);
    }

    var code = document.getElementById('code');
    if (code.value == '') {
        addErrorBlock(code);
    }

    var time = document.getElementById('time');
    if (time.value == '') {
        addErrorBlock(time);
    }

    questions.forEach(function(question) {
        var text = question.querySelector('textarea');
        if (text.value == '') {
            addErrorBlock(text);
        }

        var answers = question.querySelectorAll('input[type=text]');
        answers.forEach(function(answer) {
            if (answer.value == '') {
                addErrorBlock(answer);
            }
        });

        var options = question.querySelectorAll('input[type=radio]');
        var checked = false;
        options.forEach(function(option) {
            if (option.checked) {
                checked = true;
            }
        });

        if (!checked) {
            question.querySelector('.correct-answer').classList.add('text-danger');
        }



    });
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function addErrorBlock(element) {
    var errorBlock = document.createElement('div');
    errorBlock.className += 'invalid-feedback animated fadeInDown';
    errorBlock.innerHTML = 'این فیلد الزامی است';

    element.classList.add('is-invalid');
    if (!element.nextElementSibling) {
        insertAfter(errorBlock, element);
    }
}

function removeErrorBlock(event) {
    event.target.classList.remove('is-invalid');
    if (event.target.nextElementSibling) {
        event.target.nextElementSibling.remove();
    }
}

function addEvents(element) {
    element.querySelector('textarea').addEventListener('input', removeErrorBlock);

    element.querySelectorAll('input[type=text]').forEach(function(input) {
        input.addEventListener('input', removeErrorBlock);
    });

    element.querySelectorAll('input[type=radio]').forEach(function(input) {
        input.addEventListener('change', function() {
            element.querySelector('.correct-answer').classList.remove('text-danger');
        });
    });

    element.querySelector('.remove').addEventListener('click', removeFunction);

}