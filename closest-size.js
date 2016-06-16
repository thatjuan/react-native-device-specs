'use strict';

const storageOptions = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1028];

export default function closestSize(actualSize) {
  return storageOptions.find( val => {
    return val > actualSize ? val : false;
  });
}

