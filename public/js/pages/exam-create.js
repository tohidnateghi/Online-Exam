'use strict'

var removeButtons = document.querySelectorAll('.remove');

function removeFunction(event) {
    event.target.closest('.block').remove();
}

removeButtons.forEach(function(button) {
    button.addEventListener('click', removeFunction);
});

document.getElementById('add').onclick = function() {
    var block = document.querySelector('.container .block');
    var newBlock = block.cloneNode(true);

    //empty textarea and inputs
    newBlock.querySelector('textarea').value = '';
    newBlock.querySelectorAll('input[type=text]').forEach(function(input) {
        input.value = '';
    });
    newBlock.querySelectorAll('input[type=radio]').forEach(function(input, i) {
        input.id = 'sddsd' + i;
        input.setAttribute('name', 'sddsd');
        // input.removeAttribute('checked');

    });

    newBlock.querySelectorAll('label').forEach(function(label, i) {
        label.setAttribute('for', 'sddsd' + i);

    });

    newBlock.querySelector('.remove').addEventListener('click', removeFunction);
    document.querySelector('#questions').appendChild(newBlock);
}