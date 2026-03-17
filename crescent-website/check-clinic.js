const fs = require('fs');

const clinicHtml = fs.readFileSync('out/services/clinic.html', 'utf8');
const assets = clinicHtml.match(/\/Cresent-technosoft\/Assets/g);
const noPrefix = clinicHtml.match(/\/Assets\/(?!.*Cresent)/g);

console.log('Clinic page:');
console.log('- With prefix:', assets ? assets.length : 0);
console.log('- Without prefix:', noPrefix ? noPrefix.length : 0);

const sampleWithPrefix = clinicHtml.match(/src="\/Cresent-technosoft\/Assets[^"]*"/g);
const sampleNoPrefix = clinicHtml.match(/src="\/Assets[^"]*"/g);

if (sampleWithPrefix) {
  console.log('\nWith prefix sample:', sampleWithPrefix[0]);
}
if (sampleNoPrefix) {
  console.log('Without prefix sample:', sampleNoPrefix[0]);
}
