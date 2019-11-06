/* Online Exam Main js file added by tohid nateghi */

function showMessage(message, type, url = "") {

    var icon = 'fa fa-times';

    switch (type) {
        case 'info':
            icon = 'fa fa-info-circle';
            break;
        case 'success':
            icon = 'fa fa-check';
            break;
        case 'warning':
            icon = 'fa fa-warning';
    }

    $.notify({
        icon: icon,
        message: message,
        url: url
    }, {
        element: "body",
        type: type,
        allow_dismiss: !0,
        newest_on_top: !0,
        showProgressbar: !1,
        placement: {
            from: "bottom",
            align: "left"
        },
        offset: 20,
        spacing: 10,
        z_index: 1033,
        delay: 5e3,
        timer: 1e3,
        template: '<div data-notify="container" class="col-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
        animate: {
            enter: "animated fadeIn",
            exit: "animated fadeOutDown"
        }
    });

}