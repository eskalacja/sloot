module.exports = {
  branches: [
    'master',
    {
      name: 'rc',
      prerelease: true,
    },
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    ['@semantic-release/release-notes-generator', {
      preset: 'conventionalcommits',
    }],
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
    }],
    ['@semantic-release/npm'],
    [
      '@semantic-release/git', {
        assets: [
          'CHANGELOG.md',
          'package.json',
        ],
      },
    ],
  ],
};
