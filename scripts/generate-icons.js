const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 96, 192, 512];
const inputSvg = path.join(__dirname, '../public/icon.svg');
const outputDir = path.join(__dirname, '../public');

async function generateIcons() {
   try {
      // Read the SVG file
      const svgBuffer = fs.readFileSync(inputSvg);

      // Generate each size
      for (const size of sizes) {
         const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);
         if (size >= 192) {
            // For larger sizes, use web-app-manifest prefix
            const manifestFile = path.join(outputDir, `web-app-manifest-${size}x${size}.png`);
            await sharp(svgBuffer)
               .resize(size, size)
               .png()
               .toFile(manifestFile);
         }
         await sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toFile(outputFile);
      }

      // Generate favicon.ico (16x16)
      await sharp(svgBuffer)
         .resize(16, 16)
         .toFile(path.join(outputDir, 'favicon.ico'));

      // Generate apple icon
      await sharp(svgBuffer)
         .resize(180, 180)
         .png()
         .toFile(path.join(outputDir, 'icons/apple/apple-icon.png'));

      // Copy the original SVG for safari pinned tab
      fs.copyFileSync(inputSvg, path.join(outputDir, 'safari-pinned-tab.svg'));

      console.log('All icons generated successfully!');
   } catch (error) {
      console.error('Error generating icons:', error);
   }
}

generateIcons(); 