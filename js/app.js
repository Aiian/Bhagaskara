$(document).ready(function(){

    $('.activeMember').transition({scale:(1.4)});
    function barUpdate() {


        var animationSpeed = 1000;
        var currentSkills = $('.activeMember').data('skills');

        $('#webDesign').text(currentSkills[0]);
        $('#webDesignProgress').css({'width':'0'}).animate({'width':currentSkills[0]}, animationSpeed);
        $('#htmlCss').text(currentSkills[1]);
        $('#htmlCssProgress').css({'width':'0'}).animate({'width':currentSkills[1]}, animationSpeed);
        $('#graphicDesign').text(currentSkills[2]);
        $('#graphicDesignProgress').css({'width':'0'}).animate({'width':currentSkills[2]}, animationSpeed);
        $('#uxUi').text(currentSkills[3]);
        $('#uxUiProgress').css({'width':'0'}).animate({'width':currentSkills[3]}, animationSpeed);

    }
    barUpdate();

    function downgrade(element) {
        element.removeClass('activeMember').transition({scale:(1)})
    }
    function upgrade(element) {
        element.addClass('activeMember').transition({scale:(1.45)})
    }

    $('#chooserRight').on('click',
        function(){
            var firstMember = $('#memberCollection .member:nth-child(1)');
            var activeMember = $('.activeMember');
            var nextMember = activeMember.next();

          downgrade(activeMember);
            if (nextMember.length) {
                upgrade(nextMember);
            } else {
                upgrade(firstMember)
            }

            barUpdate()
    });

    $('#chooserLeft').on('click',
        function(){
            var lastMember = $('#memberCollection .member:last-child');
            var activeMember = $('.activeMember');
            var prevMember = activeMember.prev();

            downgrade(activeMember);
            if (prevMember.length) {
                upgrade(prevMember);
            } else {
                upgrade(lastMember)
            }
            barUpdate()
        });


    // ------------------------
    $('#scroller').on('click', function () {
        var position = $('nav').offset().top;
       $('body').animate({scrollTop:position},1500)
    });

    $('.swapper').on('mouseenter', function(){
        thisImg = $(this).css('backgroundImage');
        $(this).css('backgroundImage', "url('images/ps_files/colorer.svg')")


    });
    $('.swapper').on('mouseleave', function(){
        $(this).css('backgroundImage', thisImg)

    });


// gallery images js //

    $('.todoPhoto img').on('mouseenter', function() {
        var tempImg = $('.todoPhoto');
        var imgWidth = tempImg.children('img').css('width');
        var imgHeight = tempImg.children('img').css('height');
        var imgMarg = tempImg.children('img').css('margin');

        $(this).parent().append('<div class="hoverCross">');
        $('.hoverCross').css({
            'width': imgWidth,
            'height': imgHeight,
            'margin': imgMarg
        })
    });
    $('.todoPhoto').on('mouseleave', function() {
        $(this).children('div').remove()

    });

    // ------- //

    $('.todoPhoto').on('click', function() {
        $(this).children('p:nth-of-type(3)').slideToggle('slow').css({
            'display':'flex'})

        var position = $(this).offset().top;
        $('body').animate({scrollTop:position},500)

    });



































});