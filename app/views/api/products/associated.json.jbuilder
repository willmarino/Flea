json.associated_products do
  json.products do
    json.array! @products
  end
  json.shops do
    json.array! @shops
  end
end