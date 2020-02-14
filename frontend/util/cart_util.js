

export const fetchCart = () => (
  $.ajax({
    method: "GET",
    url: `/api/carts/fetch`
  })
);


export const addItemToCart = (item, cartId) => (
  $.ajax({
    method: "POST",
    url: `/api/carts/${cartId}/add_item`,
    data: { item }
  })
)

export const createCart = (cart) => (
  $.ajax({
    method: "POST",
    url: "/api/carts",
    data: { cart }
  })
);

export const deleteCart = (cartId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/carts/${cartId}`
  })
);

export const fetchCartShow = () => (
  $.ajax({
    method: "GET",
    url: "api/carts/cart_show"
  })
)