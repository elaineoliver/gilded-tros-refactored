module.exports = {
  preset: 'ts-jest',
  testMatch: [
    "**/?(*.)+(spec).ts?(x)"
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};