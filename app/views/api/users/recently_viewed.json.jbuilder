json.recently_viewed do
    @recently_viewed.each do |prod|
        json.set! prod.id do
            json.name prod.name
            json.shop_id prod.shop_id
            json.description prod.description
            json.high_level_category prod.high_level_category
            json.mid_level_category prod.mid_level_category
            json.low_level_category prod.low_level_category
            json.price prod.price
            json.stock_amt prod.stock_amt
            json.photoURL url_for(prod.photo)
        end
    end
end