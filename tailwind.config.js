/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],/*The content field in tailwind.config.js tells Tailwind which files to scan for class names so it can generate the corresponding CSS.*/
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   // custom blue
        secondary: '#F59E0B', // custom amber
        accent: '#10B981',    // custom green
        // Add as many as you want
        customGray: {
          100: '#f5f5f5',
          200: '#e5e5e5',
        },
      },
    },
  },
  plugins: [],
}

