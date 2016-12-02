import path from 'path'
import webpack from 'webpack'
import postcss from 'postcss'

// Use Future CSS, Today
import cssnext from 'postcss-cssnext'
import rucksack from 'rucksack-css'
const futureCss = [
  cssnext({
    browsers: 'last 2 versions',
    warnForDuplicates: false,
    features: {
      autoprefixer: {
        remove: false
      }
    }
  }),
  rucksack({
    fallbacks: true
  })
]

// Better CSS Readability
import precss from 'precss'
import sorting from 'postcss-sorting'
import utilities from 'postcss-utilities'
import postcssShort from 'postcss-short'
const readability = [
  precss,
  sorting,
  utilities,
  postcssShort
]

// Images and Fonts
import assets from 'postcss-assets'
import sprites from 'postcss-sprites'
import magician from 'postcss-font-magician'
import inlineSvg from 'postcss-inline-svg'
import whriteSvg from 'postcss-write-svg'
const imagesAndFonts = [
  assets({ loadPaths: ['src/images/']}),
  // sprites, // TODO
  magician,
  inlineSvg,
  whriteSvg
]

// Linters
import rules from 'stylelint-config-standard'
import stylelint from 'stylelint'
import stylefmt from 'stylefmt'
import doiuse from 'doiuse'
import colorguard from 'colorguard'
import reporter from 'postcss-reporter'
import browserReporter from 'postcss-browser-reporter'
import filterStream from 'postcss-filter-stream'

const linters = [
  reporter({
    clearMessages: true,
    throwError: true,
    formatter(input) {
      return input.source + ' produced ' + input.messages.length + ' messages'
    }
  }),
  browserReporter({
    selector: 'body:before'
  }),
  // doiuse,
  // stylefmt,
  // colorguard, // TODO
]

// Syntaxes
import sugarss from 'sugarss'
import sassyImport from 'postcss-sassy-import'
const syntaxes = [
  // sugarss,
  sassyImport()
]

// Other
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
const others = [
  cssnano
]

// Solve Global CSS Problem
import use from 'postcss-use'
import modules from 'postcss-modules'
import reactModules from 'react-css-modules'
// import cqProlyfill from 'cq-prolyfill'
const globalProblsems = [ // TODO
  // use({
  //   modules: '*'
  // }),
  // modules,
  // reactModules,
  // cqProlyfill
]


const postcssArr = [
  ...readability,
  ...futureCss,
  ...imagesAndFonts,
  // ...syntaxes,
  ...others,
  ...globalProblsems,
  ...linters
]

export default function postCss(webpack) {
  return [
    postcssImport({
      addDependencyTo: webpack,
      path: [
        path.join(__dirname, '..', '/src'),
        path.join(__dirname, '..', '/src', '/stylesheets'),
      ]
    }),
    filterStream(
      '**/node_modules/**',
      stylelint({
        configFile: '.stylelintrc',
        context: path.join(__dirname, '../', 'src'),
        files: '**/*.s?(a|c)ss',
        failOnError: false
      })
    ),
    ...postcssArr
  ]
}
