/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "mobile": "400px",
      "xmobile": "500px",
      "xtablet":"600px",
      "tablet": "800px",
      'laptop': '1024px',
      'desktop': '1280px'
     }
  },
  plugins: [],
}

