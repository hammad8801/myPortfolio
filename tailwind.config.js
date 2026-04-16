// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ['class'],
//   content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
//   theme: {
//     extend: {
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       fontFamily: {
//         protest: ['Protest', 'sans-serif'], // Use Protest font
//         poppins: ['Poppins', 'sans-serif'], // Use Poppins font
//         canela: ['Canela', 'serif'], // Use Canela font
//       },
//       animation: {
//         blob: 'blob 7s infinite',
//       },
//       colors: {
//         primary: '#c5f9d7',
//         secondary: '#f7d486',
//         accent: '#f27a7d',
//       },
//     },
//   },
//   plugins: [require('tailwindcss-animate')],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#c5f9d7',
        secondary: '#f7d486',
        accent: '#f27a7d',
      },
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 4s ease-in-out infinite',
        gradient: 'gradient 6s ease infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        shimmer: 'shimmer 1.5s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        protest: ['Protest Revolution', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        xs: '475px',
      },
      spacing: {
        safe: 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
};
