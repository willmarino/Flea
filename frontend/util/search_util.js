// create search is used whenever a user enters a query into the search bar.
// search data is saved so that new searches and products can be recommended to the user.
export const createSearch = (query) => (
  $.ajax({
    method: "POST",
    url: "/api/searches",
    data: { query }
  })
)

// popular terms are the terms which have recently been most popular across the whole site.
// this means all users, not just the user's own searches
// right now popular terms just means recently searched.
// I must add additional data into my seed file to be able to create a real popularity function.
export const fetchPopularSearches = () => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/searches/popular"
    })
  )
}

// suggested terms are the terms that are suggested based off what a user has already typed
// into the search bar. This is done via keyword.
export const fetchSuggestedTerms = (queryStr) => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/searches/suggested",
      data : { queryStr }
    })
  )
}

// searchMain, as the name implies, is the programs main search util function.
// it grabs a littany of data for the frontend - products, tags, associated of both.
export const fetchSearchMain = (queryStr) => {
  return(
    $.ajax({
      method: "GET",
      url: "/api/searches/search_main",
      data: { queryStr }
    })
  )
}

export const fetchSearchMainFooter = () => (
  $.ajax({
    method: "GET",
    url: "/api/searches/search_main_footer"
  })
)

// suggested searches fetches search queries which should bring up content that the user is interested in,
// based on previous product viewings.
export const fetchSuggestedSearches = () => (
  $.ajax({
    method: "GET",
    url: "/api/searches/suggested_searches"
  })
)
