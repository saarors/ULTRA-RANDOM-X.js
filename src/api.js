/*
saar-IL - saarors (github.com/saarors)
*/

import { ultraRandom } from "./engine.js";

export function randomFloat() {
  return ultraRandom();
}

export function randomInt(min, max) {
  return Math.floor(ultraRandom() * (max - min + 1)) + min;
}

export function randomBool() {
  return ultraRandom() > 0.5;
}

export function randomBytes(length) {
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return arr;
}

export function randomUUID() {
  return crypto.randomUUID();
}