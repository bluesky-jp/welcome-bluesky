// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        // disable Tailwind's reset
        preflight: false, 
    },
    // my markdown stuff is in ../docs, not /src
    content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], 
    // hooks into docusaurus' dark mode settigns
    darkMode: ['class', '[data-theme="dark"]'], 
    theme: {
      extend: {},
    },
    plugins: [],
  }