'use strict'

$('#add').click(createNewBlock);
$('#title').on('input', removeErrorBlock);
$('#time').on('input', removeErrorBlock);

var count = 0;
var number = 0;
var formError = false;

function createNewBlock() {
    count++;
    number++;

    document.getElementById('submit').classList.remove('d-none');
    var block = document.querySelector('#blockSample');
    var newBlock = block.cloneNode(true);

    newBlock.classList.remove('d-none');
    newBlock.className += ' animated fadeInLeft';

    newBlock.querySelector('.q-number').innerHTML = number;
    newBlock.querySelector('textarea').id = 'question[' + count + '][text]';
    newBlock.querySelector('textarea').name = 'question[' + count + '][text]';
    newBlock.querySelectorAll('input[type=text]').forEach(function (input, i) {
        input.id = 'question[' + count + '][option][' + (i + 1) + ']';
        input.name = 'question[' + count + '][option][' + (i + 1) + ']';
    });
    newBlock.querySelectorAll('input[type=radio]').forEach(function (input, i) {
        input.id = 'question[' + count + '][correct-option][' + (i + 1) + ']';
        input.name = 'question[' + count + '][correct-option]';
    });

    newBlock.querySelectorAll('label').forEach(function (label, i) {
        label.setAttribute('for', 'question[' + count + '][correct-option][' + (i + 1) + ']');

    });

    addEvents(newBlock);
    document.querySelector('#questions').appendChild(newBlock);
}

function removeFunction(event) {
    event.target.closest('.block').className += ' animated fadeOut';

    setTimeout(function () {
        event.target.closest('.block').remove();
        document.querySelectorAll('.q-number').forEach(function (el, i) {
            el.innerHTML = i;
        });
    }, 800);

    number--;
    if (number == 0) {
        document.getElementById('submit').classList.add('d-none');
    }
}

document.getElementById('create-exam-form').onsubmit = function (event) {
    event.preventDefault();
    formError = false;


    var title = document.getElementById('title');
    if (title.value == '') {
        addErrorBlock(title);
    }

    // var time = document.getElementById('time');
    if ($('#time').val() == '') {
        console.log(time);
        addErrorBlock(time);
    }

    var questions = document.querySelectorAll('#questions .block');

    if (questions.length == 0) {
        showMessage('لطفا سوال وارد کنید.', 'danger');
        formError = true;
    }

    questions.forEach(function (question) {
        var text = question.querySelector('textarea');
        if (text.value == '') {
            addErrorBlock(text);
        }

        var options = question.querySelectorAll('input[type=text]');
        options.forEach(function (option) {
            if (option.value == '') {
                addErrorBlock(option);
            }
        });

        var options = question.querySelectorAll('input[type=radio]');
        var checked = false;
        options.forEach(function (option) {
            if (option.checked) {
                checked = true;
            }
        });

        if (!checked) {
            question.querySelector('.correct-option').classList.add('text-danger');
            formError = true;
        }

    });

    if (!formError) {
        Codebase.loader('show');
        submitForm();
    }
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function addErrorBlock(element) {
    formError = true;
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

    element.querySelectorAll('input[type=text]').forEach(function (input) {
        input.addEventListener('input', removeErrorBlock);
    });

    element.querySelectorAll('input[type=radio]').forEach(function (input) {
        input.addEventListener('change', function () {
            element.querySelector('.correct-option').classList.remove('text-danger');
        });
    });

    element.querySelector('.remove').addEventListener('click', removeFunction);

}

function submitForm() {
    var data = {
        title: document.getElementById('title').value,
        time: document.getElementById('time').value,
        questions: {}
    };

    var questions = document.querySelectorAll('#questions .block');

    questions.forEach(function (question, i) {
        data.questions[i + 1] = {};
        data.questions[i + 1]['text'] = question.querySelector('textarea').value;

        question.querySelectorAll('input[type=text]').forEach(function (option, k) {
            data.questions[i + 1]['option' + (k + 1)] = option.value;
        });

        question.querySelectorAll('input[type=radio]').forEach(function (option, k) {
            if (option.checked) {
                data.questions[i + 1]['answer'] = k + 1;
                return;
            }
        });

    });

    var ajax = new XMLHttpRequest();
    var action = document.getElementById('create-exam-form').action;
    ajax.open('POST', action);
    var _token = document.querySelector('input[name=_token]').value;

    ajax.setRequestHeader('X-CSRF-TOKEN', _token);
    ajax.setRequestHeader('Content-type', "application/json; charset=UTF-8");

    ajax.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                window.location.replace(redirect_to);
            } else {
                alert('مشکلی رخ داده است.');
                Codebase.loader('hide');
            }
        }
    }

    ajax.send(JSON.stringify(data));

}