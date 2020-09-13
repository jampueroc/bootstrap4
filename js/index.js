$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $('.carousel').carousel({
        interval: 5000
    });
    var contactButtons = $('#modalForm');
    contactButtons.on('show.bs.modal', function (e) {
        console.log('El modal se está mostrando');
        var button = e.relatedTarget;
        $(button).removeClass('btn-primary');
        $(button).addClass('btn-secondary');
        $(button).prop('disabled', true);
    })
    contactButtons.on('shown.bs.modal', function (e) {
        console.log('El modal se mostró');
    })
    contactButtons.on('hide.bs.modal', function (e) {
        console.log('El modal se oculta');
        var button = $('.btn-secondary');
        button.removeClass('btn-secondary');
        button.addClass('btn-primary');
        button.prop('disabled', false);
    })
    contactButtons.on('hidden.bs.modal', function (e) {
        console.log('El modal se ocultó');
    })
})
