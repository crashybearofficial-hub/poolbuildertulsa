const fs = require('fs');
const files = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/services/gunite-engineering/page.tsx',
  'src/app/services/vanishing-edge-hydraulics/page.tsx',
  'src/app/services/subterranean-equipment-bunkers/page.tsx',
  'src/app/suburbs/jenks-luxury/page.tsx',
  'src/app/suburbs/owasso-limestone/page.tsx',
  'src/app/suburbs/glenpool-alluvial/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const words = content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w.length > 0);
    console.log(`${file}: ${words.length} words`);
  }
});
