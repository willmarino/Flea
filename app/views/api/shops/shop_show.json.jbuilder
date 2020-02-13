json.shop_show do
  json.shop @shop
  json.owner @owner
  json.products do
    json.array! @products
  end
end