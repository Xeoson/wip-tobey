const fs = require('fs')
const path = require('path')
const createComponent = require('./creators/createComponent')
const reduxSlice = require('./templates/reduxSlice')
const indexExports = require('./templates/indexExports')
const queries = require('./templates/queries')
const blank = require('./templates/blank')

const resolve = (...pathList) => path.resolve('src', ...pathList)
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const [, , layer, slice, ...filepath] = process.argv

const layers = {
  pages: {
    api: {
      'queries.ts': [blank],
    },
    ui: {
      [slice]: createComponent({ filename: slice, layer }),
    },
    lib: {},
    model: {
      types: {
        'index.ts': [blank],
      },
    },
  },
  features: {
    ui: {
      [slice]: createComponent({ filename: slice, layer }),
    },
    model: {
      types: {},
      selectors: {},
      'slice.tsx': [reduxSlice, { default: true }],
    },
  },
  entities: {},
	shared: {}
}

const exportsDeps = {}

const layersKeys = Object.keys(layers)
if (!layer | !slice | !layersKeys.includes(layer))
  throw new Error(
    `Неверные параметры: npm run <script> (${layersKeys.join('|')}) <slicename>`
  )

const create = (path, tree) => {
  for (const [key, value] of Object.entries(tree)) {
    if (Array.isArray(value)) {
      const [templateCreator, options] = value
      const filename = capitalize(key.split('.')[0])
      const filepath = [...path, capitalize(key)]
      if (options?.export) {
        exportsDeps[`{${filename}}`] = filepath
      } else if (options?.default) {
        exportsDeps[`{default as ${filename}}`] = filepath
      }
			const dir = resolve(...path)
			if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(
        resolve(...filepath),
        templateCreator({ filename, ...options })
      )
    } else {
      fs.mkdirSync(resolve(...path, key), { recursive: true })
      create([...path, key], value)
    }
  }
}

create(
  [layer, slice, ...filepath],
  filepath.length
    ? createComponent({ filename: filepath.at(-1), layer })
    : layers[layer]
)
fs.writeFileSync(
  resolve(layer, slice, 'index.ts'),
  indexExports({ exportsDeps })
)
