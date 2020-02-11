
export const createProduct = (product) => (
  $.ajax({
    method: "POST",
    url: `/api/products`,
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

export const fetchIndex = () => (
  $.ajax({
    method: "GET",
    url: '/api/products/grab_index'
  })
)

export const removeProduct = (productId) => (
  $.ajax({
    method: "DELETE",
    url: `api/products/${productId}`
  })
);

export const fetchByCategory = (category) => (
  $.ajax({
      method: "GET",
      url: "/api/products/grab_by_category",
      data: { category }
  })
);

export const fetchProductReviews = (id) => (
  $.ajax({
      method: "GET",
      url: `/api/products/${id}/product_reviews`
  })
);

export const fetchProductCategories = () => (
  $.ajax({
    method: "GET",
    url: "/api/products/categories"
  })
);

export const fetchShopByProduct = (prodId) => (
  $.ajax({
    method: "GET",
    url: `/api/products/${prodId}`
  })
)

export const fetchProductShow = (prodId) => (
  $.ajax({
    method: "GET",
    url: `/api/products/${prodId}/product_show`
  })
)

export const fetchProductsByShop = (shopId) => {
  // debugger;
  return(
    $.ajax({
      method: "GET",
      url: `/api/shops/${shopId}/products`
    })
  )
}