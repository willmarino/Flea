json.shop_show do
  json.shop @shop
  json.owner @owner
  json.products do
    json.array! @products
  end
  json.reviews do
    json.array! @reviews
  end
  json.authors do
    json.array! @authors
  end
  json.review_products do
    json.array! @review_products
  end
  json.review_product_tags @review_product_tags
end