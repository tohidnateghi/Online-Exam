'use strict'

var deleteButtons = document.querySelectorAll('.btn-delete');
var id = null;

deleteButtons.forEach(function(element) {

    element.addEventListener('click', function(event) {
        id = event.target.closest('.exam-detail').id;
        jQuery('#modal-fadein').modal('show');
    });

});

document.querySelector('#submit').addEventListener('click', function() {
    document.querySelectorAll('#modal-fadein .modal-footer button').forEach(function(element) {
        element.setAttribute('disabled', 'disabled');
    });
    document.querySelector('#modal-fadein .block').classList.add('block-mode-loading');
    
    document.getElementById(id).className += ' animated fadeOut';
    setTimeout(function() {
        jQuery('#modal-fadein').modal('hide');
        document.querySelectorAll('#modal-fadein .modal-footer button').forEach(function(element) {
            element.removeAttribute('disabled');
        });
        document.querySelector('#modal-fadein .block').classList.remove('block-mode-loading');

        showMessage('با موفقیت حذف شد.', 'success');
        document.getElementById(id).remove();
    }, 1000);

    
});