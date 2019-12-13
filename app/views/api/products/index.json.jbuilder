@products.each do |product|
  product.set! product.id do
    json.partial! 'product', product: product
  end
end