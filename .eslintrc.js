module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "eol-last": ["off", "always"],
    "semi": ["off", "never"],
    "import/prefer-default-export": "off",
    "linebreak-style": ["off", "windows"],
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    "react/jsx-filename-extension": ["off"],
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off"

  }
}