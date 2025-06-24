const fs = require('fs');
const path = require('path');

const root = __dirname;
const distDir = path.join(root, 'dist');
const assetDirs = ['imgs', 'fonts'];
const filesToCopy = ['robots.txt', 'yandex_883883acb18ad896.html', 'sitemap.xml'];

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('Created dist/');
}

for (const dirName of assetDirs) {
  const src = path.join(root, dirName);
  const dest = path.join(distDir, dirName);

  if (!fs.existsSync(src)) {
    console.warn(`Source folder not found: ${src}`);
    continue;
  }

  fs.cpSync(src, dest, { recursive: true });
  console.log(`Copied ${dirName}/ to dist/${dirName}/`);
}

for (const fileName of filesToCopy) {
  const srcFile  = path.join(root, fileName);
  const destFile = path.join(distDir, fileName);

  if (!fs.existsSync(srcFile)) {
    console.warn(`Source file not found: ${srcFile}`);
    continue;
  }

  fs.copyFileSync(srcFile, destFile);
  console.log(`Copied ${fileName} to dist/${fileName}`);
}
