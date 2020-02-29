
export const fetchSuggestedTags = () => (
  $.ajax({
    method: "GET",
    url: "/api/tags/suggested"
  })
)