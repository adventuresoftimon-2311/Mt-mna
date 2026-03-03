const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');

const files = [
    { in: 'united-creatives.gif', out: 'united-creatives.mp4' },
    { in: 'united-law.gif', out: 'united-law.mp4' },
    { in: 'otc-tech.gif', out: 'otc-tech.mp4' }
];

for (const f of files) {
    const inPath = path.join(__dirname, 'public', f.in);
    const outPath = path.join(__dirname, 'public', f.out);
    console.log(`Converting ${f.in} to ${f.out}...`);

    try {
        execSync(`"${ffmpeg}" -y -i "${inPath}" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "${outPath}"`, { stdio: 'inherit' });
    } catch (e) {
        console.error('Failed converting', f.in);
    }
}
