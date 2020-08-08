module.exports = {
  'env': {
    'browser': true,
  },
  'parserOptions': {
    'ecmaVersion': 11,
    'parser': 'babel-eslint',
    'parserOptions': {
      'sourceType': 'module',
      'allowImportExportEverywhere': true
    }
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};