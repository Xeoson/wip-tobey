
export default {
  home: "/",
	userProfile: '/profile',
  profile: (userId: string = ":userId") => `/profile/${userId}`,
  cart: "/cart",
  product: (productId: string = ":productId") => `/product/${productId}`,
	addresses: '/profile/address',
	favorites: '/profile/favorite',
	orderHistory: '/profile/order-history'
};