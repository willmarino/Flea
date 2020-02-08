json.happy_reviews do
    json.reviews do
        @happy_reviews.each do |hr|
            json.set! hr.id do
                json.extract! hr, :id, :title, :body, :rating, :item_id, :author_id
            end
        end
    end
    json.products do
        @products.each do |p|
            json.set! p.id do
                json.extract! p, :id, :name, :description, :high_level_category, :shop_id
                json.photoURL url_for(p.photo)
            end
        end
    end
end