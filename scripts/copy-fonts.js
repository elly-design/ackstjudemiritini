import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = resolve(__dirname, '../node_modules/slick-carousel/slick/fonts');
const targetDir = resolve(__dirname, '../public/fonts/slick');

// Create target directory if it doesn't exist
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

// Copy font files
try {
  const files = readdirSync(sourceDir);
  files.forEach(file => {
    if (file.endsWith('.woff') || file.endsWith('.eot') || 
        file.endsWith('.ttf') || file.endsWith('.svg')) {
      const sourcePath = join(sourceDir, file);
      const targetPath = join(targetDir, file);
      
      // Only copy if source exists and target doesn't exist or is different
      if (existsSync(sourcePath) && 
          (!existsSync(targetPath) || 
           statSync(sourcePath).mtime > statSync(targetPath).mtime)) {
        copyFileSync(sourcePath, targetPath);
        console.log(`Copied ${file} to public/fonts/slick/`);
      }
    }
  });
  console.log('Slick Carousel fonts copied successfully!');
} catch (error) {
  console.error('Error copying Slick Carousel fonts:', error);
}
