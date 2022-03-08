const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        // screen caption api
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here
        console.log('error here: ', error);
    }
}


button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // Reste button
    button.disabled = false;
});

// on Load
selectMediaStream();