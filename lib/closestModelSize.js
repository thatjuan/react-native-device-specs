function closest(arr, goal) {
  return arr.reduce((prev, curr) => {
    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
  });
}

function closestModelSize (model, specs) {
  return closest(model.storageSizes, specs.diskSpace);
}

module.exports = closestModelSize;
