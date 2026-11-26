// Makes light WebP versions of the photos in photos/ (480 and 960 px wide,
// plus the original width if smaller) into public/img/, and writes their
// sizes to src/data/images.json. Run: npm run images
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { join, parse } from 'node:path';

const SRC = 'photos', OUT = 'public/img', meta = {};
for (const folder of await readdir(SRC)) {
  await mkdir(join(OUT, folder), { recursive: true });
  for (const file of await readdir(join(SRC, folder))) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const name = `${folder}/${parse(file).name}`;
    const img = sharp(join(SRC, folder, file)).rotate();
    const { width, height } = await img.metadata();
    const widths = [...new Set([480, 960, 1600].filter((w) => w < width).concat(Math.min(width, 1600)))].sort((a, b) => a - b);
    for (const w of widths) await img.clone().resize({ width: w }).webp({ quality: 78 }).toFile(join(OUT, `${name}-${w}.webp`));
    meta[name] = { widths, ratio: +(width / height).toFixed(4) };
  }
}
await writeFile('src/data/images.json', JSON.stringify(meta, null, 2) + '\n');
console.log(`${Object.keys(meta).length} photos ready`);
