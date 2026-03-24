
import { getEntropy } from "./entropy.js";

function cryptoBase() {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return arr[0];
}

export function ultraRandom() {
  const base = cryptoBase();
  const entropy = getEntropy();
  const time = performance.now() * 1000;

  
  let mixed = base ^ entropy ^ time;

  mixed ^= mixed << 13;
  mixed ^= mixed >> 17;
  mixed ^= mixed << 5;

  return (mixed >>> 0) / 2 ** 32;
}