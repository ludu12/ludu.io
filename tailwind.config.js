module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#F2F8F9',
          '100': '#E4F1F2',
          '200': '#C8E3E5',
          '300': '#ACD5D8',
          '400': '#91C7CB',
          '500': '#75B9BE',
          '600': '#50A4AB',
          '700': '#3E8084',
          '800': '#2C5B5E',
          '900': '#1A3638'
        },
        secondary: {
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFF6EE',
          '400': '#FFE0C5',
          '500': '#FFCB9C',
          '600': '#FFAE64',
          '700': '#FF902C',
          '800': '#F37300',
          '900': '#BB5900'
        }
      },
    },
  },
  variants: {
    extend: {
      extend: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
}
