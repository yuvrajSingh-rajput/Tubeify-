const ytdl = require('ytdl-core');

function formatDuration(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? hrs + ':' : ''}${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

const videoInformation = async (req, res) => {
  try {
    const { videoUrl } = req.body;
    
    if (!videoUrl) {
      return res.status(400).json({ error: 'Video URL is required' });
    }

    const info = await ytdl.getInfo(videoUrl);

    const durationInSeconds = parseInt(info.videoDetails.lengthSeconds, 10);
    const formattedDuration = formatDuration(durationInSeconds);

    const videoInfo = {
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails[0].url,
      duration: formattedDuration,
      formats: info.formats.map(format => ({
        itag: format.itag,
        mimeType: format.mimeType,
        quality: format.qualityLabel,
        container: format.container,
        isAudioOnly: !format.qualityLabel,
        codecs: format.codecs,
        bitrate: format.bitrate,
        size: format.contentLength ? `${(parseInt(format.contentLength) / (1024 * 1024)).toFixed(2)} MB` : 'unknown'
      }))
    };

    return res.json(videoInfo);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'An error occurred while fetching video information' });
  }
};

module.exports = videoInformation;