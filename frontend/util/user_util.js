

export const fetchUsers = users => (
  $.ajax({
    method: "GET",
    url: "/api/users"
  })
);

export const createUser = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user}
  })
);

