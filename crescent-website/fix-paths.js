#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
let filesFixed = 0;

const noCacheMetaTag = '<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0"><meta http-equiv="Pragma" content="no-cache"><meta http-equiv="Expires" content="0">';

function fixPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalLength = content.length;
    
    // Fix image and asset paths
    content = content.replace(/src="\/Assets/g, 'src="/Cresent-technosoft/Assets');
    content = content.replace(/href="\/Assets/g, 'href="/Cresent-technosoft/Assets');
    
    // Fix _next paths
    content = content.replace(/href="\/_next/g, 'href="/Cresent-technosoft/_next');
    content = content.replace(/src="\/_next/g, 'src="/Cresent-technosoft/_next');
    
    // Inject cache-control meta tags if not already present
    if (!content.includes('http-equiv="Cache-Control"')) {
      content = content.replace(/<head[^>]*>/, `$&\n${noCacheMetaTag}`);
    }
    
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

console.log(`Starting path fixing... (out dir: ${outDir})`);

if (fs.existsSync(outDir)) {
  walkDir(outDir);
  console.log(`\n✓ SUCCESS: Fixed paths in ${filesFixed} HTML files!`);
  process.exit(0);
} else {
  console.error(`✗ FAILED: out directory not found at ${outDir}`);
  process.exit(1);
}
