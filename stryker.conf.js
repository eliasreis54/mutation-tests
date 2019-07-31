module.exports = function(config) {
  config.set({
    mutate: [
      './index.js'
    ],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off"
  });
};