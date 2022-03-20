// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const data = fs.readFileSync('src/markdown/resume.md', 'utf-8');

// Replace header
let re = /---[\s\S]*?---/;
const newData = data.replace(re, `
---
\\pagenumbering{gobble}
---
# Luke Dunscombe
Des Moines, IA · dunscombe1@gmail.com · 515-890-7803 · Downloaded from [ludu.io/resume](https://ludu.io/resume)
`);
fs.writeFileSync('tmp.md', newData);
execSync('pandoc -V colorlinks=true -V urlcolor=TealBlue -V toccolor=gray -V geometry:margin=5mm -V mainfont="Georgia" -s -o public/resume.pdf  tmp.md --pdf-engine=xelatex --css pandoc.css');

// Remove temp
fs.unlinkSync('tmp.md');
