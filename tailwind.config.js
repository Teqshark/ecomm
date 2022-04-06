

module.exports = {
// Since Tailwind no longer uses PurgeCSS under the hood, we’ve renamed the purge option to content to better reflect what it’s for:
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  // darkMode: false, // or 'media' or 'class
  theme: {
    extend: {},
  },
  
  
  // In Tailwind CSS v3.0, every variant is automatically available for every utility by default, so you can remove the variants section from your tailwind.config.js file: tailwind.config.js


  // variants is outdated
  // variants: {
  //   extend: {},
  // },
  // plugins: [],
}