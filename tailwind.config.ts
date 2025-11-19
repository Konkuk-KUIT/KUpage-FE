/** @type {import('tailwindcss').Config} */

const createPxEntries = (size: number) => {
  return {
    0: '0',
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i * 4}`]: `${(i * 4) / 10}rem` };
    }),
  };
};

const PX_ENTRIES = createPxEntries(500);

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    spacing: PX_ENTRIES,
    fontSize: {
      8: '0.8rem',
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2.0rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
      36: '3.6rem',
      40: '4.0rem',
      48: '4.8rem',
      64: '6.4rem',
      80: '8.0rem',
      88: '8.8rem',
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
    },
    fontFamily: {
      sans: ['Pretendard', 'Arial'],
    },
    borderRadius: {
      none: '0px',
      4: '0.4rem',
      8: '0.8rem',
      10: '1rem',
      12: '1.2rem',
      16: '1.6rem',
      24: '2.4rem',
      full: '9999px',
    },
    zIndex: {
      base: '1',
      nav: '2',
      popup: '999',
      floating: '1000',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      main: '#4FE570',
      gray: '#2C373F',
      darkblue: '#16202b',
      border: '#868686',
      red: '#ea3414',
      yellow: '#D5DA40',
      deepGray: '#4F5E69',
    },
    extend: {
      backgroundImage: {
        'signup-gradient': 'linear-gradient(180deg, #16202B 0%, #1E2C33 50.01%, #203636 100%)',
      },
    },
  },
  plugins: [],
};
