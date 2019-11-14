'use strict'

document.getElementById('title').addEventListener('input', removeErrorBlock);
document.getElementById('time').addEventListener('input', removeErrorBlock);

var formError = false;

document.getElementById('edit-exam-form').onsubmit = function (event) {
    event.preventDefault();
    formError = false;


    var title = document.getElementById('title');
    if (title.value == '') {
        addErrorBlock(title);
    }

    var time = document.getElementById('time');
    if (time.value == '') {
        addErrorBlock(time);
    }

    var questions = document.querySelectorAll('.questions');

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
