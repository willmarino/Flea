json.user do
  json.set! @user.id do
    json.id @user.id
    json.username @user.username
    json.email @user.email
    json.description @user.description
    json.location @user.location
  end
end