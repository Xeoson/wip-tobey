

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