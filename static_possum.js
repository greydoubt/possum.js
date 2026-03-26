// static load possum.js
const video = document.getElementById("videoPlayer");

// Path to your .mov file
const videoSrc = "sample.mov";

// Check if browser can play MOV (QuickTime)
function canPlayMOV() {
  return video.canPlayType('video/quicktime') !== "";
}

// Load video
if (canPlayMOV()) {
  video.src = videoSrc;
} else {
  console.warn("MOV format may not be supported in this browser.");
  // Optional fallback
  video.src = "sample.mp4";
}

// Optional: autoplay when ready
video.addEventListener("canplay", () => {
  console.log("Video ready to play");
});

// Basic playback events
video.addEventListener("play", () => console.log("Playing"));
video.addEventListener("pause", () => console.log("Paused"));
video.addEventListener("ended", () => console.log("Finished"));
