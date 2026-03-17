#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
let filesFixed = 0;
const timestamp = Date.now(); // Cache buster

function fixPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalLength = content.length;
    
    // Fix image and asset paths
    content = content.replace(/src="\/Assets/g, 'src="/Cresent-technosoft/Assets');
    content = content.replace(/href="\/Assets/g, 'href="/Cresent-technosoft/Assets');
    
    // Fix _next paths with cache-busting query parameter
    content = content.replace(/href="\/_next\/([^"]*)/g, `href="/Cresent-technosoft/_next/$1?v=${timestamp}`);
    content = content.replace(/src="\/_next\/([^"]*)/g, `src="/Cresent-technosoft/_next/$1?v=${timestamp}`);
    
    // Remove old meta tags if present (they don't work anyway)
    content = content.replace(/<meta http-equiv="Cache-Control"[^>]*>/g, '');
    content = content.replace(/<meta http-equiv="Pragma"[^>]*>/g, '');
    content = content.replace(/<meta http-equiv="Expires"[^>]*>/g, '');
    
    // Only write if content changed
    if (content.length !== originalLength) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesFixed++;
      console.log(`✓ Fixed: ${path.relative(outDir, filePath)}`);
    }
  } catch (err) {
    console.error(`✗ Error processing ${filePath}:`, err.message);
    process.exit(1);
  }
}

function walkDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.endsWith('.html')) {
          fixPaths(filePath);
        }
      } catch (err) {
        console.error(`Error reading ${filePath}:`, err.message);
      }
    });
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err.message);
    process.exit(1);
  }
}

console.log(`Starting path fixing with cache buster (v=${timestamp})...`);

if (fs.existsSync(outDir)) {
  walkDir(outDir);
  console.log(`\n✓ SUCCESS: Fixed paths in ${filesFixed} HTML files with cache-busting!`);
  process.exit(0);
} else {
  console.error(`✗ FAILED: out directory not found at ${outDir}`);
  process.exit(1);
}

console.log(`Starting path fixing... (out dir: ${outDir})`);

if (fs.existsSync(outDir)) {
  walkDir(outDir);
  console.log(`\n✓ SUCCESS: Fixed paths in ${filesFixed} HTML files!`);
  process.exit(0);
} else {
  console.error(`✗ FAILED: out directory not found at ${outDir}`);
  process.exit(1);
}
