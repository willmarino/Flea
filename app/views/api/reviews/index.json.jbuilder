@reviews.each do |r|
  json.set! r.id do
    json.title r.title
    json.body r.body
    json.rating r.rating
    json.item_id r.item_id
    json.author_id r.author_id
    json.created_at r.created_at
  end
end