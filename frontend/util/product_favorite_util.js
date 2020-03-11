

export const fetchProductFavorites = (id) => (
  $.ajax({
    method: "GET",
    url: '/api/product_favorites/by_product',
    data : { id }
  })
);

export const createProductFavorite = (id) => (
  $.ajax({
    method: "POST",
    url: '/api/product_favorites',
    data : { id }
  })
);

export const deleteProductFavorite = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/product_favorites/${id}`
  })
);