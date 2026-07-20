const fs = require('fs');
const path = require('path');

const dir = 'content/posts';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace pros={[...]}
  content = content.replace(/pros={\[([\s\S]*?)\]}/g, (match, inner) => {
    const items = [...inner.matchAll(/"(.*?)"/g)].map(m => m[1]);
    if (items.length > 0) {
      return `pros="${items.join(' | ')}"`;
    }
    return match;
  });

  // Replace cons={[...]}
  content = content.replace(/cons={\[([\s\S]*?)\]}/g, (match, inner) => {
    const items = [...inner.matchAll(/"(.*?)"/g)].map(m => m[1]);
    if (items.length > 0) {
      return `cons="${items.join(' | ')}"`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
console.log("All done!");
