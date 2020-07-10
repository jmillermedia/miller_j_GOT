(() => {
    console.log('Fired!')

    let lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('span'),
        lbVideo = lightBox.querySelector('video'),
        sigils = document.querySelectorAll('.sigilContainer');

    function showHideLightbox() {
        lightBox.classList.toggle('show-lightbox');

        // try making the video autoplay when opened
        if (lbVideo.paused) {
            lbVideo.play();
        } else {
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