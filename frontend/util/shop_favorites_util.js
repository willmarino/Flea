
export const fetchShopFavorites = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/shop_favorites/by_shop`
  })
)

export const createShopFavorite = (id) => (
  $.ajax({
    method: "POST",
    url: `/api/shop_favorites`,
    data: { id }
  })
);