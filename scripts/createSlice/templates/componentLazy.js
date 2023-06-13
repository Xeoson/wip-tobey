
module.exports = ({ filename }) => `
import { lazy } from 'react'

export default lazy(async () => await import('./${filename}'))`