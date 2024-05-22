// Extract all words with lowercase according digits length.

const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('./SkullSecurityComp');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let line_cnt = 0;
let prev_out = '';
let temp_out = '';

rl.on('line', (line) => {
  line_cnt++;
  if (line_cnt % 100000 == 0) {
    fs.appendFile('./SkullSecurityComp6.out', temp_out, (err) => {
      if (err) throw err;
    });
    temp_out = '';
    console.log(line_cnt);
  }

  // Process each line here
  out = line.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // check output
  if (out.length < 6)
    return;
  if (out == prev_out)
    return;

  // handle output
  prev_out = out;
  temp_out = temp_out + out + '\n';
});

rl.on('close', () => {
  // Executed when all lines have been read
  console.log('\n\n\nFinished!')
});