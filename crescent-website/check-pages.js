const fs = require('fs');

// Check about.html
const aboutHtml = fs.readFileSync('out/about.html', 'utf8');
const aboutImgs = aboutHtml.match(/src="[^"]*Assets[^"]*"/g) || [];

console.log('About page image src attributes:');
aboutImgs.slice(0, 3).forEach(img => console.log(img));

// Check services page
const servicesHtml = fs.readFileSync('out/services/index.html', 'utf8');
const servicesImgs = servicesHtml.match(/src="[^"]*Assets[^"]*"/g) || [];

console.log('\nServices page image src attributes:');
servicesImgs.slice(0, 3).forEach(img => console.log(img));
