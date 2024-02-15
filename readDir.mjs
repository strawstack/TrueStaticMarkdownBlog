import fs from 'fs';

const files = fs.readdirSync('posts').filter(name => name !== 'posts.js');

fs.writeFileSync(
    'posts/posts.js',
    `const posts = [\n${files.map(name => `  '${name}',\n`).join("")}];`
);