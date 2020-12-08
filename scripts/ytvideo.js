document.addEventListener("DOMContentLoaded", function () {

    var key = 'AIzaSyArpdeGfjTl9obTX-75MeEtxTXvSBm-0SY';
    var videoId = 'YKcUAL-jMSs';
    var URL = 'https://www.googleapis.com/youtube/v3/videos';

    var options = {
        part: 'snippet',
        key: key,
        id: videoId,
    };

    loadVideo();

    function loadVideo() {
        $.getJSON(URL, options, (data) => {
            console.log(data.items[0].snippet.thumbnails);
            loadThumbImage(data.items[0].snippet.thumbnails.maxres.url);
        });
    };

    function loadThumbImage(url) {
        let heroThumbImg = document.getElementById('heroThumbImg');
        heroThumbImg.setAttribute('src', `${url}`)
    }

});