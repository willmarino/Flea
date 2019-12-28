

export const fetchUsers = users => (
  $.ajax({
    method: "GET",
    url: "/api/users"
  })
);

export const fetchUser = user => (
  $.ajax({
    method: "GET",
    url: `/api/users/${user.id}`
  })
);

export const userById = userId => (
 $.ajax({
   method: "GET",
   url: `/api/users/${userId}`
 })
);

export const createUser = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user}
  })
);

export const addRecentlyViewed = (product) => (
  // product must be an obj => {product_id: 53}
  $.ajax({
    method: "POST",
    url: `api/users/add_viewed`,
    data: { product }
  })
);

export const fetchRecentlyViewed = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}/recently_viewed`
  })
);
