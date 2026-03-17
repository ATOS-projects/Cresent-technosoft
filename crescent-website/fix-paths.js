#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

function fixPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix image and asset paths
  content = content.replace(/src="\/Assets/g, 'src="/Cresent-technosoft/Assets');
  content = content.replace(/href="\/Assets/g, 'href="/Cresent-technosoft/Assets');
  
  // Fix _next paths
  content = content.replace(/href="\/_next/g, 'href="/Cresent-technosoft/_next');
  content = content.replace(/src="\/_next/g, 'src="/Cresent-technosoft/_next');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      fixPaths(filePath);
    }
  });
}

if (fs.existsSync(outDir)) {
  walkDir(outDir);
  console.log('✓ All paths fixed!');
} else {
  console.log('out directory not found');
  process.exit(1);
}
