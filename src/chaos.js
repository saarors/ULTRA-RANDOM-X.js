/*
saar-IL - saarors (github.com/saarors)
*/
import { ultraRandom } from "./engine.js";

export function chaosRandom(iterations = 10) {
  let val = 0;

  for (let i = 0; i < iterations; i++) {
    val ^= ultraRandom() * Date.now() * Math.random();
  }

  return (val >>> 0) / 2 ** 32;
}