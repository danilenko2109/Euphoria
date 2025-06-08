
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },

   extends: ["react-app", "react-app/jest"],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off', 
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
