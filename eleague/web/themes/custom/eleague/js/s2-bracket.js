jQuery("#ul-menu-list li").click(function () {
    jQuery('.box').hide().eq(jQuery(this).index()).show();
    jQuery('.char-bio').hide().eq(jQuery(this).index()).show();
});
