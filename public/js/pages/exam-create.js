'use strict'

document.getElementById('add').onclick = createNewBlock;

function createNewBlock() {
    var block = document.querySelector('#blockSample');
    var newBlock = block.cloneNode(true);

    newBlock.classList.remove('d-none');

    //empty textarea and inputs
    newBlock.querySelector('textarea').value = '';
    newBlock.querySelectorAll('input[type=text]').forEach(function(input) {
        input.value = '';
    });
    newBlock.querySelectorAll('input[type=radio]').forEach(function(input, i) {
        input.id = 'sddsd' + i;
        input.setAttribute('name', 'sddsd');
    });

    newBlock.querySelectorAll('label').forEach(function(label, i) {
        label.setAttribute('for', 'sddsd' + i);

    });

    newBlock.querySelector('.remove').addEventListener('click', removeFunction);
    document.querySelector('#questions').appendChild(newBlock);
}

function removeFunction(event) {
    event.target.closest('.block').remove();
}