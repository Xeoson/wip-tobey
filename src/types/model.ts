
export interface IVariant {
	type: 'color' | 'spec',
	variants: string[]
}

export interface IProduct {
	id?: string,
	title: string,
	description: string,
	price: number,
	rating: number,
	images: string[]
}

export interface ICategory {
	title: string,
	preview: string
}