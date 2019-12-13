

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

