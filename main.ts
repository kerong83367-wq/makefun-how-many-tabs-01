// How many tabs do I have open? Written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = '87';

// The competition gate for this entry: digits only, 1 to 5 characters.
function checkEntry(line: string): void {
  if (!/^[0-9]{1,5}$/.test(line)) {
    console.error('entry must be a number of 1 to 5 digits');
    process.exit(1);
  }
}

checkEntry(LINE);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: the file is exactly the number, nothing more.
