json.products do
  json.array! @res
end
json.categories do
  json.array! @categories
end