
@shops.each do |shop|
    json.set! shop.id do
        json.name shop.name
        json.location shop.location
        json.creator_id shop.creator_id
        json.description shop.description
        json.announcement shop.announcement
        json.image_url shop.image_url
    end
end