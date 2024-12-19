import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

// Predefined percentage-based heights
export const IMAGE_HEIGHT = SCREEN_HEIGHT * 0.4;
export const CONTENT_HEIGHT = SCREEN_HEIGHT * 0.3;
export const GUEST_HEIGHT = SCREEN_HEIGHT * 0.3;
export const HEADER_HEIGHT = 48;
