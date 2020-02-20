

export const createSearch = (query) => (
  $.ajax({
    method: "POST",
    url: "/api/searches",
    data: {query}
  })
)

// export const fetchPopularTerms = () => (
//   $.ajax({
//     method: "GET",
//     url: 
//   })
// )