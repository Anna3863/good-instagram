// Toggle Mute for ALL videos at once (IG Style)
function toggleMute(button) {
    const allVideos = document.querySelectorAll('.post-video');
    const allIcons = document.querySelectorAll('.mute-icon');
    
    // Check if the first video is currently muted
    const currentlyMuted = allVideos[0].muted;

    allVideos.forEach(video => {
        video.muted = !currentlyMuted;
    });

    // Swap the image texture for every post on the page
    allIcons.forEach(icon => {
        // If it was muted, we are unmuting it, so show the 'unmute.png'
        icon.src = currentlyMuted ? "unmute.png" : "mute.png";
    });
}

// Auto-play, Auto-pause, and Restart on scroll
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll('.post-video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                // Restart the video from the beginning
                video.currentTime = 0; 
                video.play().catch(err => console.log("Autoplay blocked"));
            } else {
                // Pause it when it leaves the screen to save memory
                video.pause();
            }
        });
    }, { threshold: 0.6 }); // Triggers when 60% of the video is visible

    videos.forEach(v => observer.observe(v));
});