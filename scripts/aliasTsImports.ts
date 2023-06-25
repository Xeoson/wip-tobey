import {Project} from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths(['./src/**/*.ts', './src/**/*.tsx'])

const layers = ['entities', 'features', 'shared', 'stories', 'widgets', 'app', 'pages']
const files = project.getSourceFiles()
files.map((file) => {
	file.getImportDeclarations().map((decl) => {
		const declaration = decl.getModuleSpecifierValue()
		if (layers.some((l) => declaration.startsWith(l))) {
			decl.setModuleSpecifier(`@/${decl.getModuleSpecifierValue()}`)
		}
		console.log('decl :>> ', decl.getModuleSpecifierValue());
	})
})

project.saveSync()