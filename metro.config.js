const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  resolver: {
    assetExts: ['ttf', 'otf', 'png', 'jpg', 'jpeg', 'svg', 'mp4', 'mp3'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
