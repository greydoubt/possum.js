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
