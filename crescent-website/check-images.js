const fs = require('fs');
const html = fs.readFileSync('out/index.html', 'utf8');

// Find image paths
const images = html.match(/src="[^"]*Assets[^"]*"/g) || [];

console.log('Image paths:');
images.slice(0, 5).forEach(img => console.log(img));
