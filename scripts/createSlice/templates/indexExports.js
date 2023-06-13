module.exports = ({ exportsDeps }) => `
	${Object.entries(exportsDeps)
    .map(
      ([filename, pathArr]) => `export ${filename} from '${pathArr.join('/')}'`
    )
    .join('\n')}
`
