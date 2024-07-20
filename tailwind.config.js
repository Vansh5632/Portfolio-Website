export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#2C3E50',
        secondary: '#FF6F61',
        accent: '#88D8B0',
        highlight: '#FFC107',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [
   
  ],
};