

export const fetchCartItems = () => (
  $.ajax({
    method: "GET",
    url: "/api/cart_items"
  })
);

export const createCartItem = (cart_item) => (
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cart_item }
  })
);

export const deleteCartItem = (cartItemId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItemId}`
  })
);