/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-menu': 'linear-gradient(156deg, #5B7FD6 0%, #1BB1D0 100%)',
        'gradient-bg': 'linear-gradient(to bottom right, #009fff, #ec2f4b)',
        'gradient-D': 'conic-gradient(#F449F4,#0019C0,#7976E8)',
        'gradient-gray': 'linear-gradient(137.84deg, #3f3f40 2.69%, #303030 93.75%)',
        gradient: 'linear-gradient(137.84deg, #ffdb6e 26.31%, #ffbc5e 93.75%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(255, 218, 109, 0.0375) 0%, rgba(255, 189, 94, 0) 100%), #1e1e1f',
        'gradient-border': 'linear-gradient(155deg, #ffda6d 0%, rgba(255, 191, 96, 0) 50%)',
        'gradient-border-gray': 'linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%)',
        'gradient-icon': 'linear-gradient(135deg, rgba(255, 218, 109, 0.25) 0%, rgba(255, 189, 94, 0) 59.86%), #202021',
        'gradient-line': 'linear-gradient(to right, #ffdb6e, #ffbc5e)'
      },
      boxShadow: {
        'main-card': '0px 10px 20px 0px rgba(0, 0, 0, 0.50)',
        24: '-4px 8px 24px rgba(0, 0, 0, 0.25)',
        30: '0px 16px 30px rgba(0, 0, 0, 0.25)',
        40: '0px 16px 40px rgba(0, 0, 0, 0.25)',
        50: '0px 25px 50px rgba(0, 0, 0, 0.15)',
        80: '0px 24px 80px rgba(0, 0, 0, 0.7)'
      },
      stroke: {
        main: 'linear-gradient(to bottom right, #01B7C5, #782C96)'
      },
      borderRadius: {
        'menu-radius': '20px 0px 0px 20px',
        'radius-banner': '48px 48px 200px 48px'
      },
      borderWidth: {
        12: '12px'
      },
      borderColor: {
        'gradient-D': 'conic-gradient(#F449F4,#0019C0,#7976E8)'
      }
    },
    screens: {
      sm: '480px',
      // => @media (min-width: 480px) { Mobile }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px'
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: []
}
