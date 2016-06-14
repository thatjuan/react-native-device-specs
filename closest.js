'use strict';

export default function closest(options, goal) {
  return options.reduce((prev, curr) => {
    var val = Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
    return val > goal ? val : prev;
  });
}

