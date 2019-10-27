'use strict'

//send ajax request and get answers
document.getElementById('exam').onsubmit = function (event) {
    event.preventDefault();
    document.getElementById('show_result').setAttribute('disabled', 'disabled');

    var inputs = document.querySelectorAll('input[for="exam"]');
    var data = {};

    var k = 1;
    for (let i = 0; i < inputs.length; i++) {

        if (k == 5) {
            k = 1;
        }

        if (inputs[i].checked) {
            data[inputs[i].parentNode.parentNode.id] = k;
        }
        k++;
    }

    var token = document.querySelector('form input[name="_token"]').value;
    var action = document.querySelector('#exam').action;

    var ajax = new XMLHttpRequest();
    ajax.open('POST', action);

    ajax.setRequestHeader('X-CSRF-TOKEN', token);
    ajax.setRequestHeader('Content-type', "application/json; charset=UTF-8");

    ajax.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                show_result(this.responseText);
            }
            else {
                alert('مشکلی در برقراری ارتباط رخ داده است');
                document.getElementById('show_result').removeAttribute('disabled');
            }
        }
    }

    ajax.send(JSON.stringify(data));
}

//show correct and wrong answers
function show_result(answer) {
    answer = JSON.parse(answer);

    var inputs, div, correct = 0, wrong = 0, empty = 0;

    answer.forEach(function (value) {
        inputs = document.querySelectorAll('#q' + value['id'] + ' .form-check input');
        div = document.querySelectorAll('#q' + value['id'] + ' .form-check');
        var checked = false;

        inputs.forEach(function (input, i) {
            input.setAttribute('disabled', 'disabled');
            if (input.checked && (value['answer'] - 1) != i) {
                div[i].classList.add("bg-danger");
                wrong++;
            }
            else if (input.checked && (value['answer'] - 1) == i) {
                div[i].classList.add("bg-success");
                correct++;
            } else if ((value['answer'] - 1) == i) {
                div[i].classList.add("bg-success-2");
            }
            if (input.checked) {
                checked = true;
            }
        });

        if (!checked) {
            empty++;
        }
    });

    document.getElementById('correct').innerHTML = correct;
    document.getElementById('wrong').innerHTML = wrong;
    document.getElementById('empty').innerHTML = empty;
}