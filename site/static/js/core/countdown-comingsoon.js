var comingsoon = function() {
    // Init Countdown.js, for more examples you can check out https://github.com/hilios/jQuery.countdown
    var initCounter = function(){
        jQuery('.js-countdown').countdown('2018/09/01', function(event) {
            jQuery(this).html(event.strftime('<div class="row items-push text-center">'
                    + '<div class="col-xs-6 col-sm-3"><div class="font-s48 font-w700 text-white">%-D</div><div class="font-w600 text-gray">DAYS</div></div>'
                    + '<div class="col-xs-6 col-sm-3"><div class="font-s48 font-w700 text-white">%H</div><div class="font-w600 text-gray">HOURS</div></div>'
                    + '<div class="col-xs-6 col-sm-3"><div class="font-s48 font-w700 text-white">%M</div><div class="font-w600 text-gray">MINUTES</div></div>'
                    + '<div class="col-xs-6 col-sm-3"><div class="font-s48 font-w700 text-white">%S</div><div class="font-w600 text-gray">SECONDS</div></div>'
                    + '</div>'
            ));
        });
    };

    return {
        init: function () {
            // Init Countdown
            initCounter();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ comingsoon.init(); });