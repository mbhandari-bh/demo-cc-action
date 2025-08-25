module.exports = {
  ignores: [(message) => /^Merge\b/.test(message)],
  rules: {
    'subject-case': [2, 'always', ['lower-case', 'sentence-case']],
  },
};
