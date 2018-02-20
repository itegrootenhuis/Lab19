$(document).ready(function(){
    var products = [];

    function init(){
        $('body').on('click', '.add-to-cart', function(){
            $(this).addClass("rubberBand animated");
            $('#shop-cart i, #cart-count').removeClass("bounceIn animated");
        });

        $('body').on('click', '.modal-default-button', function(){
            $('.add-to-cart').removeClass("rubberBand animated");
            $('#shop-cart i, #cart-count').addClass("bounceIn animated");
        });

        $('.product').addClass("zoomIn animated");
        
    }

    

    init();
});