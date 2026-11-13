import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const srcDir = path.resolve('halo-cinematic-studio/images');
const outDir = path.resolve('halo-cinematic-studio/public/images/gallery');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));

console.log(`Found ${files.length} images to process.`);

const processed = [];

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const srcPath = path.join(srcDir, file);
  const cleanBase = file
    .replace(/\.jpg\.jpeg$/i, '')
    .replace(/\.jpeg$/i, '')
    .replace(/\.jpg$/i, '')
    .replace(/[^a-zA-Z0-9-_]/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-');
  const outFile = `halo-${cleanBase}.jpg`;
  const outPath = path.join(outDir, outFile);

  console.log(`[${i + 1}/${files.length}] Converting ${file} -> ${outFile}...`);
  try {
    execSync(`sips -s format jpeg -s formatOptions 85 -Z 1600 "${srcPath}" --out "${outPath}"`, { stdio: 'pipe' });
    
    const info = execSync(`sips -g pixelWidth -g pixelHeight "${outPath}"`, { encoding: 'utf-8' });
    const widthMatch = info.match(/pixelWidth: (\d+)/);
    const heightMatch = info.match(/pixelHeight: (\d+)/);
    const width = widthMatch ? parseInt(widthMatch[1], 10) : 1600;
    const height = heightMatch ? parseInt(heightMatch[1], 10) : 1067;
    const isLandscape = width >= height;

    processed.push({
      file,
      outFile,
      src: `/images/gallery/${outFile}`,
      width,
      height,
      isLandscape,
    });
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

fs.writeFileSync(
  path.join(outDir, 'manifest.json'),
  JSON.stringify(processed, null, 2),
  'utf-8'
);

console.log(`Successfully processed ${processed.length} images.`);

