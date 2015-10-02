module.exports = function (models, specs) {
  return {
    standard: models[specs.platform],
    formal: models[specs.platform]
  };
}
