



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const {withFrameworkConfig } = require("./framework/common/config")

// supply default config as parameter 
  module.exports = withFrameworkConfig({
    framework: {
      name: "shopify_local"
    },
    reactStrictMode: true,
    i18n: {
      locales: ["en-US", "es"],
      defaultLocale: "en-US"
    }
  })
  // exports config object 

  console.log("next.config.js", JSON.stringify(module.exports, null, 2))
  
