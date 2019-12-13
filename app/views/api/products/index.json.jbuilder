
@products.each do |product|
  json.set! product.id do
    json.id product.id
    json.name product.name
    json.shop_id product.shop_id
    json.description product.description
    json.high_level_category product.high_level_category
    json.mid_level_category product.mid_level_category
    json.low_level_category product.low_level_category
    json.price product.price
    json.stock_amt product.stock_amt
  end
end