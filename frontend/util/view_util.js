

export const fetchUserViews = () => (
  $.ajax({
    method: "GET",
    url: "/api/views/user_views"
  })
);

export const fetchProductViews = (prod_id) => (
  $.ajax({
    method: "GET",
    url: "/api/views/product_views",
    data : {prod_id}
  })
);

export const addView = (prod_id) => (
  $.ajax({
    method: "POST",
    url: "/api/views/add",
    data: {prod_id}
  })
)