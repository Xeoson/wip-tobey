
export default {
  home: "/",
  profile: (userId: string = ":userId") => `/profile/${userId}`,
  cart: "/cart",
  product: (productId: string = ":productId") => `/product/${productId}`,
};