// commitlint.config.js
module.exports = {
  ignores: [(message) => message.startsWith('Merge')],
  rules: {
    'subject-case': [2, 'always', 'lower-case'],
  },
};
