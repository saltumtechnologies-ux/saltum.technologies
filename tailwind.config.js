/** @type {import('tailwindcss').Config} */ 
export default { 
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: { 
    extend: {}, 
  }, 
  plugins: [], 
} 


module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    }
  }
}