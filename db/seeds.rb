# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Shop.destroy_all
Product.destroy_all

u1 = User.create!(username: "Lary", password: "password", email: "lary@mail.com")
u2 = User.create!(username: "demouser", password: "password", email: "demo@mail.com")
u3 = User.create!(username: "Greg", password: "password", email: "greg@mail.com")
u4 = User.create!(username: "Lisa", password: "password", email: "lisa@mail.com")
u5 = User.create!(username: "Sarah", password: "password", email: "sarah@mail.com")
u6 = User.create!(username: "Eve", password: "password", email: "eve@mail.com")
u7 = User.create!(username: "Morty", password: "password", email: "morty@mail.com")
u8 = User.create!(username: "Bert", password: "password", email: "bert@mail.com")
u9 = User.create!(username: "Hillary", password: "password", email: "hillary@mail.com")

s1 = Shop.create!(name: "a nice shop", creator_id: u1.id, description: "its a pretty nice shop, but its not that nice")
s2 = Shop.create!(name: "a shop", creator_id: u2.id, description: "its a pretty wierd shop, but its not that wierd")
s3 = Shop.create!(name: "a dark shop", creator_id: u3.id, description: "its a pretty dark shop, but its not that dark")
s4 = Shop.create!(name: "a brightly lit shop", creator_id: u4.id, description: "its a pretty bright shop, but its not that bright")
s5 = Shop.create!(name: "a spooky shop", creator_id: u5.id, description: "its a pretty spooky shop, but its not that spooky")
s6 = Shop.create!(name: "a thought-provoking shop", creator_id: u6.id, description: "its a pretty thoughtful shop, but its not that thoughtful")
s7 = Shop.create!(name: "a not so nice shop", creator_id: u7.id, description: "not great")



# debugger
p1 = Product.create!(name: "gray sweater", shop_id: s1.id, high_level_category: "Clothing and Shoes", price: 20.87, stock_amt: 12)
p2 = Product.create!(name: "gold chain", shop_id: s1.id, high_level_category: "Jewelry and Accessories", price: 21.87, stock_amt: 112)
p3 = Product.create!(name: "green sweater", shop_id: s2.id, high_level_category: "Clothing and Shoes", price: 29.37, stock_amt: 121)
p4 = Product.create!(name: "black sweater", shop_id: s2.id, high_level_category: "Clothing and Shoes", price: 1.87, stock_amt: 0)
p5 = Product.create!(name: "desk", shop_id: s2.id, high_level_category: "Home and Living", price: 204.87, stock_amt: 23)
p6 = Product.create!(name: "blue jeans", shop_id: s2.id, high_level_category: "Clothing and Shoes", price: 98.87, stock_amt: 0)
p7 = Product.create!(name: "some denim", shop_id: s2.id, high_level_category: "Clothing and Shoes", price: 14.87, stock_amt: 235)
p8 = Product.create!(name: "bouquet", shop_id: s2.id, high_level_category: "Wedding and Party", price: 4.87, stock_amt: 273)
p9 = Product.create!(name: "dark gray sweater", shop_id: s2.id, high_level_category: "Clothing and Shoes", price: 20.10, stock_amt: 98)
p10 = Product.create!(name: "glue", shop_id: s2.id, high_level_category: "Craft Supplies", price: 76.87, stock_amt: 9001)
p11 = Product.create!(name: "blue t shirt", shop_id: s4.id, high_level_category: "Clothing and Shoes", price: 82.87, stock_amt: 3)
p12 = Product.create!(name: "scarf", shop_id: s5.id, high_level_category: "Clothing and Shoes", price: 81.87, stock_amt: 8)



# 10.times do
#     seed_name = Faker::Name.unique.first_name
#     User.create!(
#         username: seed_name,
#         password: password,
#         email: "#{seed_name}@mail.com"
#     )
# end

