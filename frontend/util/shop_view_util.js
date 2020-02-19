
export const fetchShopViews = (shop_id) => (
  $.ajax({
    method: "GET",
    url: "/api/shop_views/views",
    data : {shop_id}
  })
);

export const addShopView = (shop_id) => (
  $.ajax({
    method: "POST",
    url: "/api/shop_views/add",
    data : {shop_id}
  })
)