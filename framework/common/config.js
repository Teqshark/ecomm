



// configure for products call 

const path = require("path")
const fs = require("fs")
const merge = require("deepmerge")
const prettier = require("prettier")

// supported frameworks
const ALLOWED_FW =  ["shopify", "bigcommerce", "shopify_local"]

// fallback option if option entered is not supported
const FALLBACK_FW = "shopify"


// confijures tsconfig programatically depending on framework selected, edits paths to framwork being used. 
function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name 
  
  if (!framework) {
    throw new Error("The api framework is missing. Please add a valid provider.")
  }
  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(`
      The api framework: ${framework}
      cannot be found, please use one of ${ALLOWED_FW.join(", ")}`)
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FW
  }

  // selects next.config from specific framework
  const frameworkNextConfig = require(path.join("../", framework, "next.config"))


  // merges defaultConfig and framework config into single config object
  const config = merge(defaultConfig, frameworkNextConfig)

  
  // selects project txconfig.json file 
  const tsPath = path.join(process.cwd(), "tsconfig.json")

  // ensures tsConfig object is present
  const tsConfig = require(tsPath)


  // edits compilerOptions config object paths for framework
  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`]

  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`]

  // writes to project tsconfig.json file 
  fs.writeFileSync(
    tsPath,
    prettier.format(
      JSON.stringify(tsConfig), { parser: "json" }
    )
  )

  // returns config object drom merged default config and frameworkconfig
  return config 
}

module.exports = { withFrameworkConfig}