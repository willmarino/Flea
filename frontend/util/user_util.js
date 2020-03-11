

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

export const fetchUserById = id => (
  $.ajax({
    method: "GET",
    url: `/api/users/by_id`,
    data: { id }
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

export const fetchUserCart = (userId) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/cart`
  })
);

export const fetchFavorites = (id) => (
  $.ajax({
    method: "GET",
    url: '/api/users/favorites',
    data: { id }
  })
)