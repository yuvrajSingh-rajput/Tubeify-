const ytdl = require('@distube/ytdl-core');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');

ffmpeg.setFfmpegPath(ffmpegPath);

const downloadVideo = async (req, res) => {
  try {
    const videoURL = req.body.url;
    const itag = req.body.itag;

    if (!ytdl.validateURL(videoURL)) {
      return res.status(400).json({ message: 'Invalid YouTube URL' });
    }

    // Fetch video info
    const videoInfo = await ytdl.getInfo(videoURL);
    const formats = videoInfo.formats;

    // Check if the selected itag exists
    const format = formats.find(f => f.itag === parseInt(itag));

    if (!format) {
      throw new Error(`No such format found: ${itag}`);
    }

    // Log the format being used
    console.log(`Selected format: ${format.qualityLabel}, itag: ${itag}`);

    const videoTitle = videoInfo.videoDetails.title.replace(/[<>:"\/\\|?*]+/g, ''); // sanitize the file name
    const tempDir = path.resolve(__dirname, '../temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const outputPath = path.join(tempDir, `${videoTitle}.mp4`);

    // Download the video using the selected itag
    const videoStream = ytdl(videoURL, { quality: itag });

    const writeStream = fs.createWriteStream(outputPath);
    videoStream.pipe(writeStream);

    videoStream.on('progress', (chunkLength, downloaded, total) => {
      const percent = (downloaded / total * 100).toFixed(2);
      console.log(`Downloading... ${percent}% done`);
    });

    writeStream.on('finish', () => {
      console.log('Download completed successfully:', outputPath);
      res.json({ message: 'Download complete', path: outputPath });
    });

    writeStream.on('error', (err) => {
      console.error('Error writing the file:', err);
      res.status(500).json({ message: 'Error writing the file', error: err.message });
    });

    videoStream.on('error', (err) => {
      console.error('Error in video download stream:', err);
      res.status(500).json({ message: 'Error downloading the video', error: err.message });
    });

  } catch (error) {
    console.error('Download Error: ', error);
    res.status(500).json({ message: 'Download error', error: error.message });
  }
};

module.exports = downloadVideo;
