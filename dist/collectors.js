import { addEntropy } from "./entropy.js";

export function initCollectors() {
  window.addEventListener("mousemove", e => {
    addEntropy(e.clientX ^ e.clientY ^ performance.now());
  });

  window.addEventListener("keydown", e => {
    addEntropy(e.keyCode ^ performance.now());
  });
}