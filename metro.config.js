const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration for React Native
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: ['ttf', 'otf', 'png', 'jpg', 'jpeg', 'svg', 'mp4', 'mp3'], // Ensure 'ttf' and 'otf' are included
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
