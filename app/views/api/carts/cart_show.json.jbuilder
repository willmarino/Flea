json.cart_show do
  json.cart @cart
  json.cart_items do
    json.array! @cart_items
  end
  json.cart_products do
    json.array! @cart_products
  end
  json.shops do
    json.array! @shops
  end
  json.shop_products do
    json.array! @shop_products
  end
end