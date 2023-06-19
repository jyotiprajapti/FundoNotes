import {verticalScale, horizontalScale} from './ScaleComponent';

const palette = {
  purple: '#3d1a4a',
  black: '#0B0B0B',
  white: '#F0F2F3',
  lightPurple: '#bb8bcc',
  pink: '#e0a2b8',
  green: '#b0cca3',
  red: 'red',
  font: 'rgba(0,0,0,0.8)',
  grey: 'grey',
  blue:'1e20ff'
};

export default theme = {
  colors: {
    background: palette.purple,
    foreground: palette.lightPurple,
    text1: palette.font,
    text2: palette.white,
    box1: palette.pink,
    box2: palette.green,
    placeHolder: palette.grey,
    link: palette.blue

  },
  spacing: {
    xs:2,
    s: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontSize: 46,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      fontSizeBig: 25,
      fontSizeM: 20
    },
  },
  height: {
    primary: verticalScale(30),
    radius: 30,
  },
  width: {
    width: horizontalScale(250),
    widthButton: horizontalScale(180)
  },
};