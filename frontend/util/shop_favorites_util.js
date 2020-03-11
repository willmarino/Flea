
export const fetchShopFavorites = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/shop_favorites/by_shop`,
    data: { id }
  })
)

export const createShopFavorite = (id) => (
  $.ajax({
    method: "POST",
    url: `/api/shop_favorites`,
    data: { id }
  })
);

export const deleteShopFavorite = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/shop_favorites/${id}`
  })
);