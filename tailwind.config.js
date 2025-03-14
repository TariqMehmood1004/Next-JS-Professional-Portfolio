const {heroui} = require('@heroui/theme');
// tailwind.config.js
module.exports = {
  darkMode: "class",
 plugins: [heroui()],
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
],
    theme: {
      extend: {
        keyframes: {
          expand: {
            '0%': { width: '13rem' },  // Initial small width
            '100%': { width: '18rem' } // Final expanded width
          }
        },
        animation: {
          expand1: 'expand 1s ease-in-out 1s forwards', // 1s delay
          expand2: 'expand 1s ease-in-out 2s forwards', // 2s delay
          expand3: 'expand 1s ease-in-out 3s forwards', // 3s delay
        }
      }
    }
  }
  