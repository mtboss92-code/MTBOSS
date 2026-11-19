const fs = require('fs');
const file = 'MT-Boss/src/app/(bareilly_keywords)/civil-work-contractor-bareilly/page.jsx';
let str = fs.readFileSync(file, 'utf8');
str = str.replace("import Content from './Content';", "import Content from './content';");
fs.writeFileSync(file, str, 'utf8');
console.log('Replaced successfully');

