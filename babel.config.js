module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Keep this as it's required for Reanimated
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env', // Path to your .env file
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
