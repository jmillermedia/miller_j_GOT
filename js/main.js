(() => {
    console.log('Fired!')

    let lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('span'),
        lbVideo = lightBox.querySelector('video'),
        sigils = document.querySelectorAll('.sigilContainer');

    function showHideLightbox() {
        lightBox.classList.toggle('show-lightbox');

        // try making the video autoplay when opened

        // check the playstate of the video
        // if it's pause or no playing, that means we just opened the lightbox
        // and we want the video to play.
        if (lbVideo.paused) {
            lbVideo.play();
        } else {
        // lightbox is open and we want the video to rewind and stop when we close it.
            lbVideo.currentTime = 0;
            lbVideo.pause();
        }
        

        //rewind the video and make it pause at currentTime of 0
        
        // lbVideo.pause();
    }

    // function hideLightbox() {
    //     lightBox.classList.remove('show-lightbox');
    // }

    sigils.forEach(sigil => sigil.addEventListener('click', showHideLightbox));
    lbClose.addEventListener('click', showHideLightbox)

    // add an 'ended. event handeler for the video -> close the lightbox
    lbVideo.addEventListener('ended', showHideLightbox);
})();