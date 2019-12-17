@orders.each do |order|
  json.set! order.id do
    json.user_id order.user_id
    json.cart_id order.cart_id
    json.delivered order.delivered
  end
end