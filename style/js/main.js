//$('#title').fitText(1.1, { minFontSize: 24, maxFontSize: '90' });

$(document).ready(function(){

    $('.widthLimit').addClass('clearfix');

    //Waypoints to trigger animation class
    var animationClass = function() {
        var $target = $('section, #wireframes');
        $target.waypoint({handler: function(event, direction){
            $(this).addClass('animation', direction=='down');
            },
            offset: '45%'
            });
    };

    $(window).resize(function() {
        if($(window).width() <= 650) {
            $('section').removeClass('animation').addClass('no-animation');

            $('#graphDescription').appendTo('#resultsGraph');

        } else {
            animationClass();
        }
    }).resize();
});
