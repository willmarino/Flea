json.product_show do
  json.product @product
  json.shop @shop
  json.product_reviews do
    json.array! @product_reviews
  end
  json.shop_reviews do
    json.array! @shop_reviews
  end
  json.shop_review_authors do
    json.array! @shop_review_authors
  end
  json.product_review_authors do
    json.array! @product_review_authors
  end
  json.shop_review_products do
    json.array! @shop_review_products
  end
end