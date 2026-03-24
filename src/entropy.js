/*
saar-IL - saarors (github.com/saarors)
*/
let pool = [];

export function addEntropy(value) {
  pool.push(value ^ Date.now());
  if (pool.length > 1000) pool.shift();
}

export function getEntropy() {
  return pool.reduce((a, b) => a ^ b, 0);
}