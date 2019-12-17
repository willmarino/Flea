# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Shop.destroy_all
Product.destroy_all

artsandcollect = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/art-artistic-bright-colors-1170576.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/art-painting-on-walls-1227497.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/astronaut-graffiti-on-semi-trailers-163811.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/gray-metal-cubes-decorative-1005644.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/low-angle-photo-of-eiffel-tower-699466.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/multicolored-abstract-painting-1012982.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/nativity-painting-of-people-inside-a-dome-159862.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/painting-of-purple-crepe-myrtle-trees-1406863.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/selective-photograph-of-a-wall-with-grafitti-1194420.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/shallow-focus-photography-of-paper-crane-1272838.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artandcollectibles/worms-eye-view-of-spiral-stained-glass-decors-through-the-161154.jpg"
]

artsandcrafts = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/assorted-color-button-pin-on-brown-surface-1232131.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/assorted-commemorative-plates-716107.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/black-and-grey-star-sewing-machine-3119949.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/blue-scissor-neat-red-tape-1117543.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/brush-painting-color-paint-102127.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/bunch-of-green-beads-1331699.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/color-pencil-lot-2836955.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/four-green-yarns-on-chopping-board-2062061.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/paper-clips-and-thumb-tacks-750914.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/artsandcrafts/yellow-beads-1331703.jpg"
]

clothingandshoes = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/black-denim-jeans-on-white-panel-65676.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/black-framed-eyeglasses-on-white-jacket-and-blue-denim-934070.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/dachshund-dog-wearing-a-red-sweater-755380.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/jeans-levis-pants-6898.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/man-in-formal-suit-jacket-holding-his-necktie-1342609.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/man-wearing-black-notched-lapel-suit-jacket-1096849.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/photo-of-man-standing-near-flowers-2635315.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/sweater-cardigan-jumper-men-clothes-45982.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/clothingandshoes/woman-wearing-green-sweater-holding-dried-pine-leaf-2705753.jpg"
]

clothingandshoes_names = [
    "black jeans",
    "blue jeans & glasses",
    "red sweater for dogs",
    "jeans",
    "suit",
    "suit jacket",
    "nice shirt",
    "sweater",
    "green sweater"
]

gifts = [

]

homeandliving = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/apartment-architecture-carpet-chair-276583.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/apartment-contemporary-couch-curtains-275484.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/blanket-environment-foggy-haze-590137.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/blue-sofa-2986011.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/comfortable-grey-couch-with-pillows-5732.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/contemporary-design-112811.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/five-bulb-lights-1036936.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/four-gray-textiles-821649.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/red-chair-coach-sofa-96940.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/white-bedspread-beside-glass-sliding-door-1841149.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/homeandliving/white-ceramic-cup-on-saucer-2659387.jpg"
]

jewelry = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/armband-close-up-kunst-naerbillede-234798.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/assorted-silver-colored-pocket-watch-lot-selective-focus-859895.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/close-up-photo-of-diamond-earings-2849743.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/close-up-photo-of-diamond-stud-silver-colored-eternity-ring-691046.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/close-up-photo-of-person-holding-earrings-1721937.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/close-up-photography-of-blue-earrings-1413420.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/gold-pearl-and-rose-gold-flower-necklace-177332.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/love-gold-marriage-wedding-94843.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/person-holding-pink-suede-long-waller-910122.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/jewelry/silver-colored-pendant-with-green-gemstone-1458867.jpg"
]

jewelrynames = [
    "armband",
    "pocketwatch",
    "diamond earings",
    "diamond stud",
    "earings",
    "blue earings",
    "necklace",
    "gold bands",
    "suede thing",
    "shiny"
]

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

shops = [s1, s2, s3, s4, s5, s6, s7]

# debugger
# p1 = Product.create!(name: "gray sweater", shop_id: s1.id, high_level_category: "Clothing & Shoes", price: 20.87, stock_amt: 12)
# p2 = Product.create!(name: "gold chain", shop_id: s1.id, high_level_category: "Jewelry & Accessories", price: 21.87, stock_amt: 112)
# p3 = Product.create!(name: "green sweater", shop_id: s2.id, high_level_category: "Clothing & Shoes", price: 29.37, stock_amt: 121)
# p4 = Product.create!(name: "black sweater", shop_id: s2.id, high_level_category: "Clothing & Shoes", price: 1.87, stock_amt: 0)
# p5 = Product.create!(name: "desk", shop_id: s2.id, high_level_category: "Home & Living", price: 204.87, stock_amt: 23)
# p6 = Product.create!(name: "blue jeans", shop_id: s2.id, high_level_category: "Clothing & Shoes", price: 98.87, stock_amt: 0)
# p7 = Product.create!(name: "some denim", shop_id: s2.id, high_level_category: "Clothing & Shoes", price: 14.87, stock_amt: 235)
# p8 = Product.create!(name: "bouquet", shop_id: s2.id, high_level_category: "Wedding & Party", price: 4.87, stock_amt: 273)
# p9 = Product.create!(name: "dark gray sweater", shop_id: s2.id, high_level_category: "Clothing & Shoes", price: 20.10, stock_amt: 98)
# p10 = Product.create!(name: "glue", shop_id: s2.id, high_level_category: "Craft Supplies", price: 76.87, stock_amt: 9001)
# p11 = Product.create!(name: "blue t shirt", shop_id: s4.id, high_level_category: "Clothing & Shoes", price: 82.87, stock_amt: 3)
# p12 = Product.create!(name: "scarf", shop_id: s5.id, high_level_category: "Clothing & Shoes", price: 81.87, stock_amt: 8)
# p13 = Product.create!(name: "silver chain", shop_id: s1.id, high_level_category: "Jewelry & Accessories", price: 21.87, stock_amt: 112)
# p14 = Product.create!(name: "ring", shop_id: s1.id, high_level_category: "Jewelry & Accessories", price: 21.87, stock_amt: 112)
# p15 = Product.create!(name: "necklace", shop_id: s1.id, high_level_category: "Jewelry & Accessories", price: 21.87, stock_amt: 112)
# p16 = Product.create!(name: "bracelet", shop_id: s1.id, high_level_category: "Jewelry & Accessories", price: 21.87, stock_amt: 112)
# p17 = Product.create!(name: "choker", shop_id: s1.id, high_level_category: "Jewelry & Accessories", price: 21.87, stock_amt: 112)



i = 0
while i < 9
    x = Product.create!(
        name: clothingandshoes_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Clothing & Shoes",
        price: rand(200.00),
        stock_amt: rand(50)
    )
    file = open(clothingandshoes[i])
    indiv_file = clothingandshoes[i].split("clothingandshoes/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1

end


i = 0
while i < 10
    x = Product.create!(
        name: jewelrynames[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Jewelry & Accessories",
        price: rand(200.00),
        stock_amt: rand(50)
    )
    file = open(jewelry[i])
    indiv_file = jewelry[i].split("jewelry/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end