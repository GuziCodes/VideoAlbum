document.addEventListener("DOMContentLoaded", () => {
    let currentlyPlaying = null; // Stores the currently playing video

    document.querySelectorAll(".video-container").forEach(container => {
        const video = container.querySelector(".video");
        const playButton = container.querySelector(".play");
        const pauseButton = container.querySelector(".pause");
        const muteButton = container.querySelector(".mute");
        const speedButton = container.querySelector(".speed");

        let speeds = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6];
        let speedIndex = 1; 
        
        playButton.addEventListener("click", () => {
            if (currentlyPlaying && currentlyPlaying !== video) {
                currentlyPlaying.pause(); 
                currentlyPlaying.closest(".video-container").querySelector(".play").classList.remove("active"); 
            }
            video.play();
            currentlyPlaying = video; 
        });

        pauseButton.addEventListener("click", () => {
            video.pause();
            if (currentlyPlaying === video) {
                currentlyPlaying = null; 
            }
        });

        muteButton.addEventListener("click", () => {
            video.muted = !video.muted;
            muteButton.textContent = video.muted ? "Unmute" : "Mute";
        });

        speedButton.addEventListener("click", () => {
            speedIndex = (speedIndex + 1) % speeds.length;
            video.playbackRate = speeds[speedIndex];
            speedButton.textContent = `Speed: ${speeds[speedIndex]}x`;
        });
    });
});
