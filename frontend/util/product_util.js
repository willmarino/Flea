
export const createProduct = (shopId, product) => (
  $.ajax({
    method: "POST",
    url: `/api/shops/${shopId}/products`,
    data: { product }
  })
);

export const updateProduct = (productId) => (
  $.ajax({
    method: "PATCH",
    url: `/api/products/${productId}`,
    data: { product }
  })
);

export const fetchProduct = (productId) => (
  $.ajax({
    method: "GET",
    url: `/api/products/${productId}`
  })
);

export const fetchProducts = () => (
  $.ajax({
    method: "GET",
    url: `/api/products`
  })
);

export const removeProduct = (productId) => (
  $.ajax({
    method: "DELETE",
    url: `api/products/${productId}`
  })
);