

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

export const createUser = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user}
  })
);

