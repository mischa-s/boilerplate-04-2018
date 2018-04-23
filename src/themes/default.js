const orange = require('material-ui/colors/orange').default
const green = require('material-ui/colors/green').default
const grey = require('material-ui/colors/grey').default

module.exports = {
  direction: 'ltr',
  breakpoints: {
    mobile: '30em', // 480px,
    mobileWide: '37.5em', // 600px,
    tablet: '48em', // 768px,
    tabletWide: '56.25em', // 900px,
    desktop: '64em', // 1024px,
    desktopWide: '90em', // 1440px,
    desktopXL: '120em' // 1920px
  },
  typography: {
    display4: {
      fontSize: '8.00000em',
      fontWeight: 300,
      fontFamily: 'Roboto, sans-serif',
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.54)'
    },
    display3: {
      fontSize: '4.00000em',
      fontWeight: 400,
      fontFamily: 'Roboto, sans-serif',
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: '#000'
    },
    display2: {
      fontSize: '2.00000em',
      fontWeight: 400,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '40px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    display1: {
      fontSize: '2.00000em',
      fontWeight: 400,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '40px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    headline: {
      fontSize: '1.51572em',
      fontWeight: 500,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '32px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    title: {
      fontSize: '1.51572em',
      fontWeight: 300,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.87)'
    },
    subheading: {
      fontSize: '1.00000em',
      fontWeight: 300,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body2: {
      fontSize: '1.00000em',
      fontWeight: 500,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body1: {
      fontSize: '1.00000em',
      fontWeight: 300,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    label: {
      fontSize: '1.00000em',
      fontWeight: 400,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: '20px',
      color: 'rgb(170, 170, 170)'
    },
    caption: {
      fontSize: '0.75785em',
      fontWeight: 400,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.87)'
    },
    button: {
      fontSize: '0.87055em',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: 'Roboto, sans-serif'
    }
  },
  space: [
    // http://tachyons.io/docs/layout/spacing/
    '0rem', // [0] SR: to override default allofthespace with noneofthespace
    '0.25rem', // [1]
    '0.5rem', // [2]
    '1rem', // [3]
    '2rem', // [4]
    '4rem', // [5]
    '8rem', // [6]
    '16rem', // [7]
    '32rem' // [8]
  ],
  fontSizes: {
    // typographic scale because
    // http://spencermortensen.com/articles/typographic-scale/
    // and
    // https://blog.madewithenvy.com/responsive-typographic-scales-in-css-b9f60431d1c4
    //
    // px and pt values are based on a 1 em parent element with 16px (12pt) root size.
    // http://pxtoem.com/
    '-5': '0.50000em', // 8px, 6pt
    '-4': '0.57435em',
    '-3': '0.65975em',
    '-2': '0.75785em',
    '-1': '0.87055em',
    0: '1.00000em', // 16px, 12pt
    1: '1.14869em',
    2: '1.31951em',
    3: '1.51572em', // 24px, 18pt
    4: '1.74110em',
    5: '2.00000em', // 32px, 24pt
    6: '2.29740em',
    7: '2.63902em',
    8: '3.03143em', // 48px, 36pt
    9: '3.48220em',
    10: '4.00000em', // 64px, 48pt
    11: '4.59479em',
    12: '5.27803em',
    13: '6.06287em', // 96px, 52pt
    14: '6.96440em',
    15: '8.00000em', // 128px, 96pt
    16: '9.18959em',
    17: '10.55606em',
    18: '12.12573em',
    19: '13.92881em',
    20: '16.00000em' // 256px, 192pt
    // continue with formula:
    //   multiplier ^ (step / interval)
    //   2 ^ (step / 5)
  },
  fonts: {
    primary: 'Roboto, sans-serif',
    logo: ''
  },
  colors: {
    primary: {
      light: orange[400],
      main: orange[700],
      dark: orange[900],
      contrastText: grey[50]
    },
    secondary: {
      light: green[300],
      main: green[600],
      dark: green[900],
      contrastText: grey[50]
    },
    greys: [
      grey[50], // [0]
      grey[100], // [1]
      grey[200], // [2]
      grey[300], // [3]
      grey[400], // [4]
      grey[500], // [5]
      grey[600], // [6]
      grey[700], // [7]
      grey[800], // [8]
      grey[900] // [9]
    ],
    text: grey[900],
    alternateText: grey[50],
    canvas: grey[50],
    border: grey[300],
    shadow: grey[900]
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
  },
  em: '1em',
  rem: '1rem',
  borderRadius: '2px',
  zIndexMax: 1000
}
