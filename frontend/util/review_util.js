

export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: { review }
  })
);

export const fetchReviews = () => (
  $.ajax({
    method: "GET",
    url: "/api/reviews"
  })
);

export const fetchHappyReviews = () => (
  $.ajax({
    method: "GET",
    url: "/api/reviews/happy_reviews"
  })
);
