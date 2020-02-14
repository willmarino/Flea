json.extract! @user, :id, :username, :email, :viewed

json.login_obj do
  json.user @user
  json.cart @cart
  json.cart_items do
    json.array! @cart_items
  end
end