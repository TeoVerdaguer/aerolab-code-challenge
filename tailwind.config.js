/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'neutral0': '#FFFFFF',
        'neutral100': '#F5F9FF',
        'neutral200': '#E6EDF7',
        'neutral300': '#DAE4F2',
        'neutral500': '#8FA3BF',
        'neutral600': '#7C899C',
        'neutral900': '#252F3D',
        'brandLight': '#E5F0FF',
        'brandLight2': '#CCE1FF',
        'greenDefault': '#29CC74',
        'greenLight': '#CCFFE3',
        'redDefault': '#E07F4F',
        'redLight': '#FFDFD9',
      },
      backgroundImage: {
        'singleWavePattern': "url('./assets/illustrations/single-wave-pattern.svg')",
      }
    },
  },
  plugins: [],
}
