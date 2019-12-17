@cart_items.each do |ci|
  json.set! ci.id do
    json.item_id ci.item_id
    json.cart_id ci.cart_id
  end
end