json.products do
  json.array! @products
end
json.categories do
  json.array! @categories
end