const component = require('../templates/component')
const componentLazy = require('../templates/componentLazy')
const scssModule = require('../templates/scssModule')
const story = require('../templates/story')

module.exports = ({filename, layer, slice}) => ({
  [`${filename}.tsx`]: [component, { default: true }],
  [`${filename}Lazy.tsx`]: [componentLazy, { default: true }],
  [`${filename}.module.scss`]: [scssModule],
  [`${filename}.stories.tsx`]: [story, { layer, slice}],
})