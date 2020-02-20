

export const fetchAllCategories = () => (
  $.ajax({
    method: "GET",
    url: "/api/categories"
  })
)