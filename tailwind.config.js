/** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {
            colors: {
              'medical-blue': '#1F6AE1',
              'health-green': '#2FBF71',
              'light-gray': '#F4F6F8',
              'text-gray': '#4A4A4A',
              'dark-blue': '#0B2A4A',
            },
            fontFamily: {
              'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
          },
        },
        plugins: [],
      }