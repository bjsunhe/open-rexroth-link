import fs from 'fs';
import open from 'open';
const rexrothData=JSON.parse(fs.readFileSync('open-rexroth-link/rexroth_high_precision_ball_runner_blocks_BSHP.json'))
console.log(rexrothData.length)


let index = 0;

const intervalId = setInterval(async () => {
  if (index < rexrothData.length) {
    await open(rexrothData[index].productLink);
    index++;
  } else {
    clearInterval(intervalId);
  }
}, 10000);