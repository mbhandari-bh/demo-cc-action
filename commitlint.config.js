// commitlint.config.js
module.exports = {
  ignores: [(message) => /^Merge\b/.test(message)],
  rules: {
    // ✅ enforce allowed types
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],

    // ✅ enforce case style (lowercase or sentence-case)
    'subject-case': [2, 'always', ['lower-case', 'sentence-case', 'start-case']],

    // ✅ ensure subject is not empty
    'subject-empty': [2, 'never'],

    // ✅ ensure type is not empty
    'type-empty': [2, 'never'],
  },
};