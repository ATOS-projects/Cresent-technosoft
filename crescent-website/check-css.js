const fs = require('fs');
const html = fs.readFileSync('out/index.html', 'utf8');

// Find _next CSS and JS
const cssLinks = html.match(/href="[^"]*\/_next[^"]*\.[^"]*"/g) || [];
const scripts = html.match(/src="[^"]*\/_next[^"]*\.js[^"]*"/g) || [];

console.log('CSS Links:');
cssLinks.slice(0, 2).forEach(link => console.log(link));

console.log('\nScript Links:');
scripts.slice(0, 2).forEach(script => console.log(script));
