$(function() {
    $('#fullpage').fullpage({
        anchors: ['radio', 'podcasts'],
    });

    $('.radioSection').parallax({imageSrc: './src/img/galaxy.jpg'});
});