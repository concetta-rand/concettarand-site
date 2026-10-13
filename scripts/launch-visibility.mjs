import {rm} from 'node:fs/promises';
import {site} from '../src/data/site.js';
// Remove optional public pages from the production build when switched off.
for (const section of ['notes','work','play','about','reading']) {
  if (!site.sections[section]) await rm(new URL(`../dist/${section}/`, import.meta.url), {recursive:true,force:true});
}
console.log('Launch visibility applied:',site.sections);
