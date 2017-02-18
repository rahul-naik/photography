$(function () {
    $(document).on('click', '#banner1Img', function (e) {
        e.preventDefault();
        $('#banner1').trigger('click');
    });

    $(document).on('click', '#banner2Img', function (e) {
        e.preventDefault();
        $('#banner2').trigger('click');
    });

    $(document).on('click', '#banner3Img', function (e) {
        e.preventDefault();
        $('#banner3').trigger('click');
    });

    $(document).on('click', '#about-img', function (e) {
        e.preventDefault();
        $('#about').trigger('click');
    });
    $(document).on('click', '#contact-img', function (e) {
        e.preventDefault();
        $('#contact').trigger('click');
    });

    $('#banner1').change(function () {
        readURL(this, '#banner1-photo');
    });
    $('#banner2').change(function () {
        readURL(this, '#banner2-photo');
    });
    $('#banner3').change(function () {
        readURL(this, '#banner3-photo');
    });
    $('#about').change(function () {
        readURL(this, '#about-photo');
    });
    $('#contact').change(function () {
        readURL(this, '#contact-photo');
    });


});

function readURL(input, img) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(img).attr('src', e.target.result);
            $(img).parent().find('.infoSpan').hide();
        }

        reader.readAsDataURL(input.files[0]);
    }
}
