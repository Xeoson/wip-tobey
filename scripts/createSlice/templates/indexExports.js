module.exports = ({ exportsDeps }) => `
	${Object.entries(exportsDeps)
    .map(
      ([filename, pathArr]) => `export ${filename} from '.${pathArr.slice(2).join('/')}'`
    )
    .join('\n')}
`
