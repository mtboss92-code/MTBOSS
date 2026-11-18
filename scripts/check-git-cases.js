const { execSync } = require('child_process');
const fs = require('fs');

const tracked = execSync('git ls-files', { cwd: 'MT-Boss', encoding: 'utf8' }).split('\n').map(s => s.trim().replace(/\\/g, '/')).filter(Boolean);
const trackedSet = new Set(tracked);

let count = 0;
for (const file of tracked) {
  if (file.endsWith('page.jsx') || file.endsWith('page.js')) {
    const fullPath = 'MT-Boss/' + file;
    const content = fs.readFileSync(fullPath, 'utf8');
    const regex = /from\s+['"](\.\/[^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const rel = match[1];
      const dir = file.split('/').slice(0, -1).join('/');
      const targetBase = dir + '/' + rel.slice(2);
      const candidates = [
        targetBase + '.jsx',
        targetBase + '.js',
        targetBase
      ];
      const foundExact = candidates.some(c => trackedSet.has(c));
      if (!foundExact) {
        const foundCase = tracked.find(t => candidates.some(c => c.toLowerCase() === t.toLowerCase()));
        if (foundCase) {
          count++;
          console.log(`GIT CASE MISMATCH in ${file}:\n  imported: ${rel}\n  git has: ${foundCase}\n`);
        }
      }
    }
  }
}
console.log(`Total git import case mismatches found: ${count}`);

