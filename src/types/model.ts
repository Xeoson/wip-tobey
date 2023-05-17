
export interface IVariant {
	type: 'color' | 'spec',
	variants: string[]
}

export interface IProduct {
	id: string,
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


export interface IUser {
	id: string,
	name: string,
	surname?: string,
	avatar?: string,
	email: string,
	phone: string,
}

export interface IUserOrderPopulated {
	id: string,
	createdAt: number,
	productId: string,
	product: IProduct,
	isCompleted: boolean
}
export interface IUserOrder {
	id: string,
	createdAt: number,
	productIds: string[],
	status: 'created' | 'delivery' | 'canceled' | 'finished',
	totalPrice: number
}