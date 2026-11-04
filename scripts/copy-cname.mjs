import { copyFileSync, readFileSync } from 'node:fs';

const source = new URL('../CNAME', import.meta.url);
const destination = new URL('../dist/CNAME', import.meta.url);
if (readFileSync(source, 'utf8').trim() !== 'spaceofdomi.com') {
  throw new Error('CNAME must contain spaceofdomi.com; review domain changes explicitly.');
}
copyFileSync(source, destination);
console.log('Preserved CNAME in dist/CNAME.');
