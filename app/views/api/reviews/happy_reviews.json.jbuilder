json.happy_reviews do
  json.reviews do
    json.array! @happy_reviews
  end
  json.products do
    json.array! @products
  end
  json.users do
    json.array! @users
  end

end