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
Review.destroy_all
Order.destroy_all
Cart.destroy_all
CartItem.destroy_all

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

artsandcollect_names = [
    "pretty painting",
    "wall painting",
    "astronaut graffiti",
    "cubes",
    "eiffel tower print",
    "abstract painting",
    "painting of some randos",
    "trees print",
    "graffiti",
    "paper crane print",
    "stained glass print"
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

artsandcrafts_names = [
    "pins",
    "plates",
    "sewing machine",
    "blue scissors",
    "paint brushes",
    "green beads",
    "coloring pencils",
    "green yarn",
    "thumb tacks",
    "yellow beads"
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

# 11
homeandliving_names = [
    "carpet chair",
    "contemporary couch",
    "blanket(s)",
    "blue sofa",
    "gray couch",
    "nice couch",
    "fancy light bulbs",
    "gray linens",
    "red chair",
    "white sheets",
    "white cup"
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

gifts = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/gifts/a-pomeranian-inside-a-gift-box-3309884.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/gifts/happy-anniversary-signage-2072175.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/gifts/photo-of-cookies-on-string-3334477.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/gifts/pink-and-teal-heart-box-2072148.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/gifts/red-petaled-flowers-1899631.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/gifts/woman-carrying-christmas-presents-3264665.jpg"
]

gift_names = [
    "small dog",
    "anniversary gift",
    "cookies and a letter",
    "heart shaped mystery box",
    "flowers!",
    "christmas presents"
]

toysandentertainment = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/accomplishment-accuracy-accurate-aim-226601.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/art-color-colorful-coloring-157526.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/brain-color-colorful-cube-19677.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/brown-colored-pencils-on-white-printer-paper-1158682.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/brown-teddy-bear-on-brown-wooden-bench-outside-207891.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/child-children-close-up-colorful-270949.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/danboard-on-top-of-toy-train-675266.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/man-and-woman-dolls-2187606.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/tilt-shift-photography-of-motorcycle-toy-1203997.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/toy-soldiers-macro-photo-1214270.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/toysandentertainment/two-brown-and-white-rabbit-figurines-2156261.jpg"
]

tande_names = [
    "rubber ducky darts",
    "colorful art",
    "colorful cube",
    "rainbow pencils",
    "teddy bear",
    "dradle",
    "amazon man on a train",
    "dolls",
    "motorcycle",
    "toy soldiers",
    "rabbits"
]

vintage = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/abandoned-antique-close-up-design-333984.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/antique-camera-classic-lens-242433.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/beige-analog-gauge-697662.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/black-and-silver-cassette-player-159613.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/black-cassette-tape-on-top-of-red-and-yellow-surface-1626481.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/black-rotary-telephone-on-white-surface-1416530.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/black-vintage-typewriter-163084.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/black-vinyl-record-playing-on-turntable-1389429.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/curve-industry-photography-vintage-65128.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/game-cartridges-1373100.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/vintage/street-motorcycle-60163.jpg"
]

vintage_names = [
    "antique",
    "camera",
    "gauge",
    "casette",
    "casette-tape",
    "rotary phone",
    "typewriter",
    "vinyl",
    "old camera",
    "old games",
    "cafe racer?"
]

weddingandparty = [
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/beautiful-bridal-design-dress-291759.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/gold-wedding-bands-265730.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/photo-of-pineapple-wearing-black-aviator-style-sunglasses-1071878.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/photo-of-three-pineapples-surrounded-by-balloons-1071882.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/plates-and-wine-glass-on-table-1114425.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/selective-focus-of-candlesticks-on-table-with-wedding-set-up-1128783.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/wedding-preparation-313707.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/white-icing-cover-cake-1702373.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/yellow-balloon-beside-white-balloon-226737.jpg",
    "https://flea-seeds.s3.amazonaws.com/stock_photos/weddingandparty/yellow-pink-and-blue-party-balloons-796606.jpg"
]

weddingandparty_names = [
    "wedding dress",
    "wedding bands",
    "cool pineapple",
    "party pineapples",
    "39 wine glasses",
    "candlesticks",
    "bouquet and shoes",
    "cake",
    "balloons",
    "more balloons"
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
users = [u1, u2, u3, u4, u5, u6, u7, u8, u9]

# debugger

# clothing and shoes
i = 0
while i < 9
    x = Product.create!(
        name: clothingandshoes_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Clothing & Shoes",
        price: rand(200.00),
        stock_amt: rand(50)
    )
    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(clothingandshoes[i])
    indiv_file = clothingandshoes[i].split("clothingandshoes/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1

end

# jewelry
i = 0
while i < 10
    x = Product.create!(
        name: jewelrynames[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Jewelry & Accessories",
        price: rand(200.00),
        stock_amt: rand(50)
    )
    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(jewelry[i])
    indiv_file = jewelry[i].split("jewelry/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end


# home and living
i = 0
while i < 11
    x = Product.create!(
        name: homeandliving[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Home & Living",
        price: rand(200.00),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(homeandliving[i])
    indiv_file = homeandliving[i].split("homeandliving/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end

# arts and crafts
i = 0
while i < 10
    x = Product.create!(
        name: artsandcrafts[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Craft Supplies",
        price: rand(200.00),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(artsandcrafts[i])
    indiv_file = artsandcrafts[i].split("artsandcrafts/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end
 

# art and collectibles
i = 0
while i < 11
    x = Product.create!(
        name: artsandcollect_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Arts & Collectibles",
        price: rand(200.00),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(artsandcollect[i])
    indiv_file = artsandcollect[i].split("artandcollectibles/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end


i = 0
while i < 10
    x = Product.create!(
        name: weddingandparty_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Wedding & Party",
        price: rand(200.00),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(weddingandparty[i])
    indiv_file = weddingandparty[i].split("weddingandparty/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end

i = 0
while i < 11
    x = Product.create!(
        name: vintage_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Vintage",
        price: rand(200.00),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(vintage[i])
    indiv_file = vintage[i].split("vintage/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end

i = 0
while i < 11
    x = Product.create!(
        name: vintage_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Vintage",
        price: rand(200.00),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(vintage[i])
    indiv_file = vintage[i].split("vintage/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end

i = 0
while i < 11
    x = Product.create!(
        name: tande_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Toys & Entertainment",
        price: rand(200.00),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: "placeholder title",
            body: "placeholder body",
            rating: rand(5),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(toysandentertainment[i])
    indiv_file = toysandentertainment[i].split("toysandentertainment/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end
# Orders ------------------------------------------------------------------

