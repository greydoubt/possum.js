# possum.js
possum.js


javascript.js for load .mov file and stream in Octave mode for playback, use Web Standard Controls

Here’s a simple web-standard JavaScript setup to load and play a .mov file using the browser’s native <video> element with built-in controls. This is the most reliable approach (no custom player needed).

✅ Basic HTML + JavaScript (with standard controls)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>.mov Player</title>
</head>
<body>

  <!-- Video element with native controls -->
  <video id="videoPlayer" controls width="640" height="360">
    Your browser does not support the video tag.
  </video>

  <script src="javascript.js"></script>
</body>
</html>


📜 javascript.js

```
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
```

```
// Optional: autoplay when ready
video.addEventListener("canplay", () => {
  console.log("Video ready to play");
});
```


Then more garbage:
```
// Basic playback events
video.addEventListener("play", () => console.log("Playing"));
video.addEventListener("pause", () => console.log("Paused"));
video.addEventListener("ended", () => console.log("Finished"));
🎯 Notes on .mov Playback
.mov support depends on browser + codec:
✅ Safari: best support
⚠️ Chrome/Edge: limited (depends on encoding)
For best compatibility, consider converting to:
.mp4 (H.264 video + AAC audio)
⚡ Streaming Option (MediaSource API)


```


If you meant streaming instead of static loading, here’s a simplified example:

```
if ('MediaSource' in window) {
  const mediaSource = new MediaSource();
  video.src = URL.createObjectURL(mediaSource);

  mediaSource.addEventListener('sourceopen', async () => {
    const sourceBuffer = mediaSource.addSourceBuffer(
      'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    );

    const response = await fetch("sample.mp4");
    const data = await response.arrayBuffer();

    sourceBuffer.appendBuffer(data);
  });
}
```


## 👉 Note: MediaSource does not reliably support .mov, so streaming usually requires MP4 segments.

# 🎚️ About “Octave mode”

If by Octave mode you meant:

Playback speed control (like pitch/tempo shift):
```
video.playbackRate = 1.25; // speed up
```
Audio pitch shifting (true octave change):
That requires Web Audio API, not standard video controls.



## 👍 Recommendation

If you want:

Smooth streaming ✅ → use MP4 + MediaSource

Maximum compatibility ✅ → convert .mov → .mp4

Simple playback ✅ → use <video controls>
