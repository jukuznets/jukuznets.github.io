$(document).ready(function() {
    // place cursor
    $(':text:first').focus();

    $('.coffee li').click(function() {
        if (['Капучино', 'Латте', 'Глясе'].indexOf($(this).attr('value')) != -1) {
            $('#cream, #milk').prop('disabled', true).prop('checked', false).css('backgroundColor', '#CCC');
            $('.cream, .milk').css('color', '#BBB');
        } else {
            $('#cream, #milk').prop('disabled', false).css('backgroundColor', '');
            $('.cream, .milk').css('color', '');
        }

        var $liVal = $(this).attr('value');
        $('#coffee').attr('value', $liVal);
        $('#coffee').html($liVal);
        $('.popup').hide();
    });

    $('.desserts li').click(function() {
        var $liVal = $(this).attr('value');
        $('#dessert').attr('value', $liVal);
        $('#dessert').html($liVal);
        $('.popup').hide();
    });

    $('#coffee, #dessert').click(function(e) {
        var $parent = $(this).closest('.form-line');
        $('.popup').hide();
        $('.popup', $parent).show();
        e.stopPropagation();
    });

    $(document).click(function(e) {
        var $filter = $('.popup');
        if (!$filter.is(e.target) && $filter.has(e.target).length === 0) {
            $filter.hide();
        }
    });

    // total price calculation
    var $pricesCoffee = [],
        $pricesDessert = [],
        $pricesOther = [];

    function countSum() {
        var $totalPrice = $pricesCoffee.concat($pricesDessert, $pricesOther);
        var sum = 0;
        for (var i = 0; i < $totalPrice.length; i++) {
            sum += +$totalPrice[i];
        }
        $('#sum').html(' ' + sum + ' руб.');
    }

    $('.coffee li').click(function() {
        var $price = Number($(this).attr('data-price'));
        $pricesCoffee.pop($price);
        $pricesCoffee.push($price);
        countSum();
    });

    $('.desserts li').click(function() {
        var $price = Number($(this).attr('data-price'));
        $pricesDessert.pop($price);
        $pricesDessert.push($price);
        countSum();
    });

    $('input[type=checkbox]').change(function() {
        var $price = Number($(this).attr('data-price'));
        if(this.checked) {
            $pricesOther.push($price);
        } else {
            $pricesOther.pop($price);
        }
        countSum();
    });

    $('#reset').click(function() {
        $('#coffee').html('Американо');
        $('#dessert').html('Нет, спасибо');

        var $totalPrice = $pricesCoffee.concat($pricesDessert, $pricesOther);
        var sum = 0;
        for (var i = 0; i < $totalPrice.length; i++) {
            sum += +$totalPrice[i];
        }
        $('#sum').html(' ' + 0 + ' руб.');
    });

    // form validation
    $('#enquiry').validate({
        rules: {
            phone: {
                required: true
            },
            address: {
                required: true
            },
            coffee: {
                required: true
            }
        },
        messages: {
            phone: {
                required: 'Введите номер телефона',
                phone: 'Это неправильный номер телефона'
            },
            address: {
                required: 'Введите адрес'
            },
            coffee: {
                required: 'Выберите тип кофе'
            }
        },
        // error placement
        errorPlacement: function(error, element) {
            if (element.is(':radio') || element.is(':checkbox')) {
                error.appendTo(element.parent());
            } else {
                error.insertBefore(element);
            }
        }
    });

}); // end ready

$(function() {
  $('#phone').mask('8(999) 999-9999');
});
