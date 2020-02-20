
export const createSearch = (query) => (
  $.ajax({
    method: "POST",
    url: "/api/searches",
    data: { query }
  })
)

export const fetchPopularTerms = () => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/searches/popular"
    })
  )
}

export const fetchSuggestedTerms = (queryStr) => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/searches/suggested",
      data : { queryStr }
    })
  )
}

export const fetchSearchMain = (queryStr) => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/searches/search_main",
      data: { queryStr }
    })
  )
}