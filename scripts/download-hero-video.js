const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  const videoDir = path.join(process.cwd(), 'public', 'videos');
  const imageDir = path.join(process.cwd(), 'public', 'images', 'hero');

  fs.mkdirSync(videoDir, { recursive: true });
  fs.mkdirSync(imageDir, { recursive: true });

  const urls = [
    { url: 'https://cdn.pixabay.com/video/2022/11/04/137648-767098485_large.mp4', page: 'https://pixabay.com/videos/id-137648/' },
    { url: 'https://cdn.pixabay.com/video/2020/05/25/40158-425268482_large.mp4', page: 'https://pixabay.com/videos/id-40158/' },
    { url: 'https://cdn.pixabay.com/video/2021/08/04/83897-584752834_large.mp4', page: 'https://pixabay.com/videos/id-83897/' },
    { url: 'https://cdn.pixabay.com/video/2016/09/21/5361-183626156_large.mp4', page: 'https://pixabay.com/videos/id-5361/' }
  ];

  let downloaded = false;
  for (const item of urls) {
    try {
      console.log('Downloading from Pixabay CDN:', item.url);
      const buf = await fetchBuffer(item.url);
      if (buf.length > 100000) {
        const dest = path.join(videoDir, 'hero-bakery.mp4');
        fs.writeFileSync(dest, buf);
        console.log(`🎉 SUCCESS! Downloaded Pixabay MP4 Video. Size: ${(buf.length / 1048576).toFixed(2)} MB`);

        const meta = {
          source: 'Pixabay Stock Videos (Royalty-Free Commercial License)',
          pageUrl: item.page,
          videoUrl: item.url,
          fileSizeMb: (buf.length / 1048576).toFixed(2),
          downloadedAt: new Date().toISOString()
        };
        fs.writeFileSync(path.join(videoDir, 'source.json'), JSON.stringify(meta, null, 2));
        downloaded = true;
        break;
      }
    } catch (err) {
      console.log('Download failed:', err.message);
    }
  }

  // Fallback poster image
  const posterPath = path.join(imageDir, 'hero-fallback.jpg');
  if (!fs.existsSync(posterPath) || fs.statSync(posterPath).size < 10000) {
    console.log('Downloading fallback poster image...');
    const imgBuf = await fetchBuffer('https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1920&auto=format&fit=crop');
    fs.writeFileSync(posterPath, imgBuf);
    console.log(`🎉 POSTER IMAGE READY! Size: ${(imgBuf.length / 1024).toFixed(2)} KB`);
  }
}

main().catch(err => {
  console.error('Script Error:', err);
});
