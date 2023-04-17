import { writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';
import cli from 'command-line-args';

const cli_structure = [
  { name: 'file', defaultOption: true },
  { name: 'title', alias: 'T' },
];

let options = cli(cli_structure);

let file_contents =
`import Head from 'next/head';

<title>${options.title}</title>

# ${options.title}
`;

writeFileSync(join(__dirname, options.file), file_contents, {flag: 'w'});

