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

    var data = {
        _method: 'delete'
    };
    
    var ajax = new XMLHttpRequest();
    ajax.open('POST', action + id);
    ajax.setRequestHeader('X-CSRF-TOKEN', _token);
    ajax.setRequestHeader('Content-type', "application/json; charset=UTF-8");

    ajax.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            jQuery('#modal-fadein').modal('hide');
            document.querySelectorAll('#modal-fadein .modal-footer button').forEach(function(element) {
                element.removeAttribute('disabled');
            });
            document.querySelector('#modal-fadein .block').classList.remove('block-mode-loading');

            if (this.status == 200) {
                document.getElementById(id).className += ' table-danger animated fadeOut';
                setTimeout(() => {
                    document.getElementById(id).remove();
                    document.querySelectorAll('.exam-detail .number').forEach(function(element, i) {
                        element.innerHTML = i + 1;
                    });
                    showMessage('با موفقیت حذف شد.', 'success');
                }, 1000);
                
            } else {
                console.log(this.status)
                showMessage('خطایی رخ داده است.', 'danger');
            }
        }
    }

    ajax.send(JSON.stringify(data));    
});