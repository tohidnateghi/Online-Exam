'use strict'
document.getElementById('exam-form').addEventListener('submit', submitForm);

var endTime = new Date().getTime() + (examTime * 60 * 1000);
var firstDistance = endTime - new Date().getTime();

var remaining = setInterval(() => {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = endTime - now;

    if (distance < 0) {
        document.getElementById('progressbar').style.width = '0%';
        clearInterval(remaining);
        submitForm();
        return;
    }

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="coming"
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    var remainingPercent = (100 * distance ) / firstDistance;

    var progressbar = document.getElementById('progressbar');
    if(remainingPercent < 30 && remainingPercent > 10) {
        document.getElementById('progressbar').classList.remove('bg-success');
        document.getElementById('progressbar').classList.add('bg-warning');
    }

    if(remainingPercent < 10) {
        document.getElementById('progressbar').classList.remove('bg-warning');
        document.getElementById('progressbar').classList.add('bg-danger');
    }

    progressbar.style.width = remainingPercent + '%';
}, 300);

//send ajax request and get answers
function submitForm(event) {

    if(event) {
        event.preventDefault();
    }

    document.getElementById('exam-block').classList.add('block-mode-loading');
    document.getElementById('show_result').setAttribute('disabled', 'disabled');

    var questions = document.querySelectorAll('.question');
    var data = {};

    for (var i = 0; i < questions.length; i++) {
        var inputs = questions[i].querySelectorAll('input');

        for (var k = 0; k < inputs.length; k++) {
            if (inputs[k].checked) {
                var id = (questions[i].id).replace('q-', '');
                data[id] = k + 1;
            }
        }
    }

    var action = document.getElementById('exam-form').action;
    var _token = document.querySelector('input[name=_token]').value;

    var ajax = new XMLHttpRequest();
    ajax.open('POST', action);

    ajax.setRequestHeader('X-CSRF-TOKEN', _token);
    ajax.setRequestHeader('Content-type', "application/json; charset=UTF-8");

    ajax.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                show_result(this.responseText);
            } else {
                alert('مشکلی در برقراری ارتباط رخ داده است');
                document.getElementById('show_result').removeAttribute('disabled');
                document.querySelector('#exam-block').classList.remove('block-mode-loading');
            }
        }
    }

    ajax.send(JSON.stringify(data));
}

//show correct and wrong answers
function show_result(answer) {
    clearInterval(remaining);
    answer = JSON.parse(answer);

    var correct = 0,
        wrong = 0,
        empty = 0;

    var questions = document.querySelectorAll('.question');

    answer.forEach(function(value, i) {

        var inputs = questions[i].querySelectorAll('input');
        var div = questions[i].querySelectorAll('.custom-control-label');

        var checked = false;

        inputs.forEach(function(input, k) {
            if (input.checked && (value['answer'] - 1) != k) {
                div[k].classList.add("text-danger");
                wrong++;
            } else if (input.checked && (value['answer'] - 1) == k) {
                div[k].classList.add("text-success");
                correct++;
            } else if ((value['answer'] - 1) == k) {
                div[k].classList.add("text-success");
            }
            if (input.checked) {
                checked = true;
            }
            input.disabled = true;
        });

        if (!checked) {
            empty++;
        }

    });

    document.getElementById('correct').innerHTML = correct;
    document.getElementById('wrong').innerHTML = wrong;
    document.getElementById('empty').innerHTML = empty;

    document.getElementById('show_result').remove();
    document.getElementById('result').classList.remove('d-none');
    document.querySelector('#exam-block').classList.remove('block-mode-loading');

}