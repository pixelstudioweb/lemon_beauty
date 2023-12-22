$(document).ready(function () {
    $('.dropdown').on('click', function (e) {
        e.stopPropagation();

        $('.dropdown-content').toggleClass('show');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-content').removeClass('show');
        }
    });

    $('.catalog__dropdown').on('click', function (e) {
        e.stopPropagation();

        var dropdownContent = $(this).find('.catalog__dropdown-content');

        $('.catalog__dropdown-content').not(dropdownContent).removeClass('show');

        dropdownContent.toggleClass('show');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.catalog__dropdown').length) {
            $('.catalog__dropdown-content').removeClass('show');
        }
    });

    $('.language-link').on('click', function (e) {
        e.preventDefault();

        $('.language-link').removeClass('active');
        $(this).addClass('active');
        $('.language-link').not(this).css('background-color', 'transparent');
        $(this).css('background-color', '#f1f1f1');

        var lang = $(this).data('lang');
        var text = $(this).text();
        $('.dropbtn').text(text);
    });

    $('.catalog__btn__sort').on('click', function () {
        $('.sort__mobile_bottom').css('display', 'block');
    });

    $('.catalog__btn__filter').on('click', function () {
        $('.filter__all').css('display', 'block');
    });

    $('.popup-filter__btn__closse').on('click', function () {
        $('.filter__all').css('display', 'none');
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.sort__mobile__wrap').length && !$(event.target).hasClass('catalog__btn__sort')) {
            $('.sort__mobile_bottom').css('display', 'none');
        }
    });



    // PRODUCT NUMBER start
    $(document).ready(function () {
        $('body').on('click', '.number-minus, .number-plus', function () {
            var $row = $(this).closest('.number');
            var $input = $row.find('.number-text');
            var step = $row.data('step');
            var val = parseFloat($input.val());
            if ($(this).hasClass('number-minus')) {
                val -= step;
            } else {
                val += step;
            }
            $input.val(val);
            $input.change();
            return false;
        });

        $('body').on('change', '.number-text', function () {
            var $input = $(this);
            var $row = $input.closest('.number');
            var step = $row.data('step');
            var min = parseInt($row.data('min'));
            var max = parseInt($row.data('max'));
            var val = parseFloat($input.val());
            if (isNaN(val)) {
                val = step;
            } else if (min && val < min) {
                val = min;
            } else if (max && val > max) {
                val = max;
            }
            $input.val(val);
        });
    });
    // PRODUCT NUMBER end

    // PRODUCT GALLERY start

    $('.thubnails').on('click', function () {
        var imageUrl = $(this).attr('src');
        $('#mainImage').attr('src', imageUrl);
    });

    // PRODUCT GALLERY end

    // PRODUCT TABS start
    $(function () {
        var tab = $('#tabs .tabs-items > div');
        tab.hide().filter(':first').show();

        $('#tabs .tabs-nav a').click(function () {
            tab.hide();
            tab.filter(this.hash).show();
            $('#tabs .tabs-nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
        $('.tabs-target').click(function () {
            $('#tabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
        });

        if (window.location.hash) {
            $('#tabs-nav a[href=' + window.location.hash + ']').click();
            window.scrollTo(0, $("#".window.location.hash).offset().top);
        }
    });
    // PRODUCT TABS send



    $('.order-reg__more-btn__mobile a').click(function(event){
        event.preventDefault();

        $('#hiddenblockorder').slideToggle();

        $('#arrowiconorder').toggleClass('rotate');
    });


    $('input[name="order"]').change(function(){
        if($(this).attr("id") == "order1"){
            $("#creditcardwrap").show();
        } else {
            $("#creditcardwrap").hide();
        }
    });

    $('input[name="delivery"]').change(function(){
        if($(this).attr("id") == "delivery2"){
            $("#deliveryinpost").show();
            $(".delivery__inpost__pachkomat").show();
        } else {
            $("#deliveryinpost").hide();
            $(".delivery__inpost__pachkomat").hide();
        }
    });

    $('#invoice').change(function(){
        if($(this).is(":checked")) {
            $("#invoicetext").slideDown();
            $("#arrowicon").addClass("rotated");
        } else {
            $("#invoicetext").slideUp();
            $("#arrowicon").removeClass("rotated");
        }
    });

    $('#searchBtn').click(function() {
        $('#searchblock').toggle();
    });
});