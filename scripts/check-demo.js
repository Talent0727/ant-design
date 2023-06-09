const path = require('path');
const yfm = require('yaml-front-matter');
const { globSync } = require('glob');
const fs = require('fs');

const demoFiles = globSync(path.join(process.cwd(), 'components/**/demo/*.md'));
// eslint-disable-next-line no-restricted-syntax
for (const url of demoFiles) {
  const demoContent = fs.readFileSync(url);
  const meta = yfm.loadFront(demoContent);
  if (meta.only) {
    throw Error(`there is a 'only': ${url}`);
  }
}
