(function ($) {
    //desktop
    $('.main-menu-containter .eleague-menu li.menu-top-level')
        .mouseover(
            function() {
                $('.main-menu-containter .eleague-menu li.menu-top-level').removeClass('dropdown-open');
                $(this).addClass('dropdown-open');

                 $('.main-menu-containter .eleague-menu li.menu-item--active-trail').removeClass('menu-item--active-trail');
            }
        );

    $('.main-menu-containter .eleague-menu li.menu-top-level')
        .mouseout(
            function() {
                $('.main-menu-containter .eleague-menu li.menu-top-level-active').addClass('menu-item--active-trail');
                $('.main-menu-containter .eleague-menu li.menu-top-level').removeClass('dropdown-open');
            }
        );

    //mobile
    $('.mobile-menu-content').hide();

    $(".mobile-img-wrapper .icon-menu-button").click(function(){
        $('.mobile-menu-content').toggle();
    });

    $('.navbar-nav .sub-menu').hide();
    $('.navbar-nav .menu-item .home-toggle').parent().hide();

    $(".navbar-nav .dropdown-toggle").click(function(){
        // If we clicked an item thats submenu is already displayed
        if ($(this).next().children('.sub-menu').css('display') == 'block') {
            // hide that submenu
            $(this).next().children('.sub-menu').hide();
            $(this).next().hide();
        } else {
            // Otherwise, hide all and show the new clicked elem submenu
            $('.sub-menu').hide();
            $('.menu-item .home-toggle').parent().hide();
            $(this).next().children('.sub-menu').toggle();
            $(this).next().toggle();
        }
    });

    var opt = 'ALL';
    var buildMenu = function() {
        //create customized menu
        var env = '';
        if (window.location.hostname.indexOf('.dev.') != -1) {
            env = 'dev';
        }
        else if (window.location.hostname.indexOf('.prod-admin.') != -1 || window.location.hostname.indexOf('eleague.com') != -1) {
            env = 'prod';
        }

        $('div.view-list-articles label').append(
            '<div class="btn-group">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                    '<span class="text">' + opt + '</span>' +
                    '<span class="caret"></span>' +
                '</button>' +
                '<ul class="dropdown-menu" role="menu">' +
                    '<li data-value="All">ALL</li>' +
                    '<li data-value="' + (env == 'dev' ? 61 : 59) + '">CS:GO</li>' +
                    '<li data-value="' + (env == 'dev' ? 63 : 67) + '">Injustice 2</li>' +
                    '<li data-value="' + (env == 'dev' ? 62 : 68) + '">Rocket League</li>' +
                '</ul>' +
            '</div>');

        $('div.view-list-articles form.views-exposed-form select').bind('change', function () {
            $('div.view-list-articles input[type="submit"]').click();
        });
        $('div.view-list-articles ul.dropdown-menu li').click(function (e) {
            opt = e.target.innerHTML;
            $('div.view-list-articles button.dropdown-toggle span').eq(0).html(opt);
            $('div.view-list-articles select.form-select').val($(this).data('value'));
            $('div.view-list-articles input[type="submit"]').click();
        });
    };

    //autosubmit news dropdown
    if ($('div.view-list-articles').length == 1) {
        buildMenu();
        $(document).ajaxComplete(function(e, xhr, settings) {
            if (settings.extraData && settings.extraData.view_name == 'articles_list') {
                buildMenu();
            }
        });
    }

}(jQuery));
