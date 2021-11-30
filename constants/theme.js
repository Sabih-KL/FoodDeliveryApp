import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Colors = {
  primary: '#fc603f',
  secondary: '#cdcdd2',
  black: '#000',
  white: '#fff',
};

export const Sizes = {
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  largeTitke: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height,
};

const appTheme = {Colors, Sizes};

export default appTheme;
