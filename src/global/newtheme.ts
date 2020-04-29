import { normalize } from 'path';

// Primary Colors
const purple = '#6340B2';
const purpleDark = '#3C266E';
const purpleDarker = '#26154A';
const purpleDarkest = '#1E103A';
const purpleLightText = '#A48ED4';
const purpleDarkText = '#7764A1';

const magenta = '#DA0064';

const yellow = '#FFD52D';
const yellowDark = '#DDC255';
const yellowDarkText = '#564810';

const green = '#46B918';

// Secondary Colors
const teal = '#77CCC5';
const tealDark = '#5CA29D';
const tealText = '#203735';

const orange = '#FE8E4D';
const orangeDark = '#DF7A3E';
const orangeText = '#5E351C';
const orangeLightText = '#AB5D30';

const aqua = '#4ECC8F';
const aquaDark = '#3EA271';
const aquaText = '#1E4F37';

const violet = '#AB96C7';
const violetDark = '#866CA9';
const violetText = '#412C5E';

const olive = '#9ACC64';
const oliveDark = '#78A746';
const oliveText = '#39521F';

// Greyscale
const white = '#FFFFFF';
const black = '#000000';
const lightGrey = '#EEEEEE';
const middleGrey = '#AAAAAA';
const darkGrey = '#333333';

//Typography
const mainFont = 'Galano Grotesque';
const t12rem = '.75rem';
const t13rem = '.8125rem';
const t14rem = '.875rem';
const t15rem = '.9375rem';
const t16rem = '1rem';
const t19rem = '1.1875rem';
const t20rem = '1.25rem';
const t22rem = '1.375rem';
const t24rem = '1.5rem';
const t26rem = '1.625rem';
const t30rem = '1.875rem';

const t12 = {
  fontFamily: mainFont,
  fontSize: t12rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t14rem,
};
const t13 = {
  fontFamily: mainFont,
  fontSize: t13rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t16rem,
};
const t14 = {
  fontFamily: mainFont,
  fontSize: t14rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t20rem,
};
const t15 = {
  fontFamily: mainFont,
  fontSize: t15rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t20rem,
};
const t16 = {
  fontFamily: mainFont,
  fontSize: t16rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t20rem,
};
const t19 = {
  fontFamily: mainFont,
  fontSize: t19rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t26rem,
};
const t20 = {
  fontFamily: mainFont,
  fontSize: t20rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t26rem,
};
const t22 = {
  fontFamily: mainFont,
  fontSize: t22rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t26rem,
};
const t24 = {
  fontFamily: mainFont,
  fontSize: t24rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t26rem,
};
const t26 = {
  fontFamily: mainFont,
  fontSize: t26rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t26rem,
};
const t30 = {
  fontFamily: mainFont,
  fontSize: t30rem,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: t30rem,
};

export default {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // direction: 'ltr',
  // mixins: {
  //   toolbar: {
  //     minHeight: 56,
  //     '@media (min-width:0px) and (orientation: landscape)': {
  //       minHeight: 48,
  //     },
  //     '@media (min-width:600px)': {
  //       minHeight: 64,
  //     },
  //   },
  // },
  overrides: {},
  palette: {
    white: white,
    black: black,
    grey: {
      lightestGrey: '#f3f3f3',
      lightGrey: lightGrey,
      middleGrey: middleGrey,
      darkGrey: darkGrey,
    },
    main: {
      //purple theme
      background: {
        primary: purpleDarkest,
        secondary: purpleDarker,
        gradient: {
          //primary gradient is brighter
          primary: {
            light: '#301D58',
            dark: purpleDarker,
            // lightBorder: '#3C266E',
            // darkBorder: '#2D1A57'
          },
          //secondary gradient is more subtle
          secondary: {
            light: purpleDarker,
            dark: '#221242',
            // lightBorder: '#26154A',
            // darkBorder: '#26154A'
          },
        },
      },
      foreground: {
        //primary is darker
        primary: purpleDark,
        //secondary is brighter
        secondary: purple,
      },
      text: {
        primary: white,
        secondary: purpleLightText,
        selected: white,
        disabled: purpleDarkText,
      },
      action: {
        selected: magenta,
      },
    },

    news: {
      primary: orange,
      secondary: orangeDark,
      icon: white,
      text: {
        primary: orangeText,
        secondary: white,
        primaryLight: orangeLightText,
      },
    },

    quote: {
      primary: teal,
      secondary: tealDark,
      icon: white,
      text: {
        primary: tealText,
        secondary: white,
      },
    },

    history: {
      primary: aqua,
      secondary: aquaDark,
      icon: white,
      text: {
        primary: aquaText,
        secondary: white,
      },
    },

    finances: {
      primary: olive,
      secondary: oliveDark,
      icon: white,
      text: {
        primary: oliveText,
        secondary: white,
      },
    },

    event: {
      primary: violet,
      secondary: violetDark,
      icon: white,
      text: {
        primary: violetText,
        secondary: white,
        primaryLight: white,
      },
    },

    legis: {
      primary: white,
      secondary: lightGrey,
      icon: middleGrey,
      text: {
        primary: black,
        secondary: darkGrey,
      },
    },
  },
  // palette: {
  //   common: {
  //     black: '#000',
  //     white: '#fff',
  //   },
  //   type: 'dark',
  //   primary: {
  //     main: '#90caf9',
  //     light: 'rgb(166, 212, 250)',
  //     dark: 'rgb(100, 141, 174)',
  //     contrastText: 'rgba(0, 0, 0, 0.87)',
  //   },
  //   secondary: {
  //     main: '#f48fb1',
  //     light: 'rgb(246, 165, 192)',
  //     dark: 'rgb(170, 100, 123)',
  //     contrastText: 'rgba(0, 0, 0, 0.87)',
  //   },
  //   error: {
  //     light: '#e57373',
  //     main: '#f44336',
  //     dark: '#d32f2f',
  //     contrastText: '#fff',
  //   },
  //   warning: {
  //     light: '#ffb74d',
  //     main: '#ff9800',
  //     dark: '#f57c00',
  //     contrastText: 'rgba(0, 0, 0, 0.87)',
  //   },
  //   info: {
  //     light: '#64b5f6',
  //     main: '#2196f3',
  //     dark: '#1976d2',
  //     contrastText: '#fff',
  //   },
  //   success: {
  //     light: '#81c784',
  //     main: '#4caf50',
  //     dark: '#388e3c',
  //     contrastText: 'rgba(0, 0, 0, 0.87)',
  //   },
  //   grey: {
  //     '50': '#fafafa',
  //     '100': '#f5f5f5',
  //     '200': '#eeeeee',
  //     '300': '#e0e0e0',
  //     '400': '#bdbdbd',
  //     '500': '#9e9e9e',
  //     '600': '#757575',
  //     '700': '#616161',
  //     '800': '#424242',
  //     '900': '#212121',
  //     A100: '#d5d5d5',
  //     A200: '#aaaaaa',
  //     A400: '#303030',
  //     A700: '#616161',
  //   },
  //   contrastThreshold: 3,
  //   tonalOffset: 0.2,
  //   text: {
  //     primary: '#fff',
  //     secondary: 'rgba(255, 255, 255, 0.7)',
  //     disabled: 'rgba(255, 255, 255, 0.5)',
  //     hint: 'rgba(255, 255, 255, 0.5)',
  //     icon: 'rgba(255, 255, 255, 0.5)',
  //   },
  //   divider: 'rgba(255, 255, 255, 0.12)',
  //   background: {
  //     paper: '#424242',
  //     default: '#121212',
  //     level2: '#333',
  //     level1: '#212121',
  //   },
  //   action: {
  //     active: '#fff',
  //     hover: 'rgba(255, 255, 255, 0.08)',
  //     hoverOpacity: 0.08,
  //     selected: 'rgba(255, 255, 255, 0.16)',
  //     selectedOpacity: 0.16,
  //     disabled: 'rgba(255, 255, 255, 0.3)',
  //     disabledBackground: 'rgba(255, 255, 255, 0.12)',
  //     disabledOpacity: 0.38,
  //     focus: 'rgba(255, 255, 255, 0.12)',
  //     focusOpacity: 0.12,
  //     activatedOpacity: 0.24,
  //   },
  // },
  // props: {},
  // shadows: [
  //   'none',
  //   '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  //   '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  //   '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  //   '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  //   '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  //   '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  //   '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  //   '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  //   '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  //   '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  //   '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  //   '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  //   '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  //   '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  //   '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  //   '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  //   '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  //   '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  //   '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  //   '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  //   '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  //   '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  //   '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  //   '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  // ],
  typography: {
    htmlFontSize: 16,

    mainHeader: {
      //22px bold
      ...t22,
      fontWeight: 600,
    },
    h1: {
      //30px medium
      ...t30,
      fontWeight: 500,
    },
    h2: {
      //26px bold
      ...t26,
      fontWeight: 600,
    },
    h3: {
      //22px bold
      ...t22,
      fontWeight: 600,
    },
    h4: {
      //20px medium, section header
      ...t20,
      fontWeight: 500,
    },
    h5: {
      //19px medium, body header
      ...t19,
      fontWeight: 500,
    },
    body1: {
      //15px regular
      ...t15,
    },
    body2: {
      //14px regular
      ...t14,
    },
    body3: {
      //13px regular
      ...t13,
    },
    button: {
      //15px regular
      ...t15,
    },
    nav: {
      //16px medium
      ...t16,
      fontWeight: 500,
    },
    nameSm: {
      //12px medium
      ...t12,
      fontWeight: 500,
    },
    nameMed: {
      //15px medium
      ...t15,
      fontWeight: 500,
    },
    counts: {
      //14px bold
      ...t14,
      fontWeight: 600,
    },
    tag: {
      //13px medium
      ...t13,
      fontWeight: 500,
    },
    legis: {
      header: {
        //16px bold
        ...t16,
        fontWeight: 600,
      },
      name: {
        //26px medium
        ...t26,
        fontWeight: 500,
      },
    },

    //cards

    card: {
      date: {
        //13px regular
        ...t13,
      },
      subject: {
        //15px medium
        ...t15,
        fontWeight: 500,
      },
      body: {
        //15px regular
        ...t15,
      },
      emphasis: {
        //15px medium
        ...t15,
        fontWeight: 500,
      },
      quote: {
        //15px medium
        ...t15,
        fontWeight: 500,
        fontStyle: 'italic',
      },
      event: {
        date: {
          //14px medium
          ...t14,
          fontWeight: 500,
        },
        title: {
          //15px medium
          ...t15,
          fontWeight: 500,
        },
        location: {
          //14px medium
          ...t14,
          fontWeight: 500,
        },
      },
      legis: {
        name: {
          //20px bold
          ...t20,
          fontWeight: 600,
        },
        status: {
          //16px medium
          ...t16,
          fontWeight: 500,
        },
      },
      news: {
        source: {
          //14px bold
          ...t14,
          fontWeight: 600,
        },
        headline: {
          //20px medium
          ...t20,
          fontWeight: 500,
        },
      },
      newsSm: {
        source: {
          //14px bold
          ...t14,
          fontWeight: 600,
        },
        headline: {
          //16px medium
          ...t16,
          fontWeight: 500,
        },
      },
    },
  },
  spacing: {
    sm: 10,
    med: 15,
    l: 20,
    xl: 25,
    xxl: 30,
    xxxl: 40,
  },
  // typography: {
  //   htmlFontSize: 16,
  //   fontFamily: 'Galano Grotesque',
  //   fontSize: 14,
  //   fontWeightLight: 300,
  //   fontWeightRegular: 400,
  //   fontWeightMedium: 500,
  //   fontWeightBold: 700,
  //   h1: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 300,
  //     fontSize: '6rem',
  //     lineHeight: 1.167,
  //     letterSpacing: '-0.01562em',
  //   },
  //   h2: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 300,
  //     fontSize: '3.75rem',
  //     lineHeight: 1.2,
  //     letterSpacing: '-0.00833em',
  //   },
  //   h3: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '3rem',
  //     lineHeight: 1.167,
  //     letterSpacing: '0em',
  //   },
  //   h4: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '2.125rem',
  //     lineHeight: 1.235,
  //     letterSpacing: '0.00735em',
  //   },
  //   h5: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '1.5rem',
  //     lineHeight: 1.334,
  //     letterSpacing: '0em',
  //   },
  //   h6: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 500,
  //     fontSize: '1.25rem',
  //     lineHeight: 1.6,
  //     letterSpacing: '0.0075em',
  //   },
  //   subtitle1: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '1rem',
  //     lineHeight: 1.75,
  //     letterSpacing: '0.00938em',
  //   },
  //   subtitle2: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 500,
  //     fontSize: '0.875rem',
  //     lineHeight: 1.57,
  //     letterSpacing: '0.00714em',
  //   },
  //   body1: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '1rem',
  //     lineHeight: 1.5,
  //     letterSpacing: '0.00938em',
  //   },
  //   body2: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '0.875rem',
  //     lineHeight: 1.43,
  //     letterSpacing: '0.01071em',
  //   },
  //   button: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 500,
  //     fontSize: '0.875rem',
  //     lineHeight: 1.75,
  //     letterSpacing: '0.02857em',
  //     textTransform: 'uppercase',
  //   },
  //   caption: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '0.75rem',
  //     lineHeight: 1.66,
  //     letterSpacing: '0.03333em',
  //   },
  //   overline: {
  //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //     fontWeight: 400,
  //     fontSize: '0.75rem',
  //     lineHeight: 2.66,
  //     letterSpacing: '0.08333em',
  //     textTransform: 'uppercase',
  //   },
  // },
  // shape: {
  //   borderRadius: 4,
  // },
  // transitions: {
  //   easing: {
  //     easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  //     easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  //     easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  //     sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  //   },
  //   duration: {
  //     shortest: 150,
  //     shorter: 200,
  //     short: 250,
  //     standard: 300,
  //     complex: 375,
  //     enteringScreen: 225,
  //     leavingScreen: 195,
  //   },
  // },
  // zIndex: {
  //   mobileStepper: 1000,
  //   speedDial: 1050,
  //   appBar: 1100,
  //   drawer: 1200,
  //   modal: 1300,
  //   snackbar: 1400,
  //   tooltip: 1500,
  // },
  // nprogress: {
  //   color: '#fff',
  // },
};
