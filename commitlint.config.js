module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => /^Merge\b/.test(message)], // ignore merge commits
  rules: {
    // enforce valid conventional types
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

    // allow lowercase, sentence-case, and start-case for subject
    'subject-case': [2, 'always', ['lower-case', 'sentence-case', 'start-case']],

    // ensure subject is not empty
    'subject-empty': [2, 'never'],

    // ensure type is not empty
    'type-empty': [2, 'never'],
  },
};
