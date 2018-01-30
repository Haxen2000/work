(function ($) {
$(document).ready(function() {
    $(document).on('click', '.banner-image, .play-icon', function() {
        $('.play-icon').hide();
        var videoID = $('.youtube-container').data('video-id');
        var videoiframe = '<article class="video-placeholder">'+
            '<iframe src="https://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe></article>';
        $('.banner-image').replaceWith(videoiframe);
    });
}); //end doc ready
}(jQuery));