# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'faker'

User.destroy_all
Shop.destroy_all
Product.destroy_all
Review.destroy_all
Order.destroy_all
Cart.destroy_all
CartItem.destroy_all
Image.destroy_all


# artsandcollect = [
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/art-artistic-bright-colors-1170576_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/art-painting-on-walls-1227497_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/astronaut-graffiti-on-semi-trailers-163811_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/gray-metal-cubes-decorative-1005644_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/low-angle-photo-of-eiffel-tower-699466_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/multicolored-abstract-painting-1012982_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/nativity-painting-of-people-inside-a-dome-159862_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/painting-of-purple-crepe-myrtle-trees-1406863_tn.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/selective-photograph-of-a-wall-with-grafitti-1194420-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/shallow-focus-photography-of-paper-crane-1272838-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcollectibles/worms-eye-view-of-spiral-stained-glass-decors-through-the-161154-min.jpg"
# ]


# artsandcollect_names = [
#     "pretty painting",
#     "wall painting",
#     "astronaut graffiti",
#     "cubes",
#     "eiffel tower print",
#     "abstract painting",
#     "painting of some randos",
#     "trees print",
#     "graffiti",
#     "paper crane print",
#     "stained glass print"
# ]

# artsandcrafts = [
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcrafts2/assorted-color-button-pin-on-brown-surface-1232131-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcrafts2/assorted-commemorative-plates-716107-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcrafts2/black-and-grey-star-sewing-machine-3119949-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcrafts2/blue-scissor-neat-red-tape-1117543-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcrafts2/brush-painting-color-paint-102127-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcrafts2/bunch-of-green-beads-1331699-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/artsandcrafts2/color-pencil-lot-2836955-min.jpg"
# ]

# artsandcrafts_names = [
#     "pins",
#     "plates",
#     "sewing machine",
#     "blue scissors",
#     "paint brushes",
#     "green beads",
#     "coloring pencils",
#     "green yarn",
#     "thumb tacks",
#     "yellow beads"
# ]

# clothingandshoes = [
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/black-denim-jeans-on-white-panel-65676-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/black-framed-eyeglasses-on-white-jacket-and-blue-denim-934070-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/dachshund-dog-wearing-a-red-sweater-755380-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/jeans-levis-pants-6898-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/man-in-formal-suit-jacket-holding-his-necktie-1342609-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/man-wearing-black-notched-lapel-suit-jacket-1096849-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/photo-of-man-standing-near-flowers-2635315-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/sweater-cardigan-jumper-men-clothes-45982-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/clothingandshoes2/woman-wearing-green-sweater-holding-dried-pine-leaf-2705753-min.jpg"
# ]

# clothingandshoes_names = [
#     "black jeans",
#     "blue jeans & glasses",
#     "red sweater for dogs",
#     "jeans",
#     "suit",
#     "suit jacket",
#     "nice shirt",
#     "sweater",
#     "green sweater"
# ]

# gifts = [

# ]

# homeandliving = [
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/apartment-architecture-carpet-chair-276583-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/apartment-contemporary-couch-curtains-275484-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/blanket-environment-foggy-haze-590137-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/blue-sofa-2986011-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/comfortable-grey-couch-with-pillows-5732-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/contemporary-design-112811-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/five-bulb-lights-1036936-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/four-gray-textiles-821649-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/red-chair-coach-sofa-96940-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/white-bedspread-beside-glass-sliding-door-1841149-min.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/homeandliving2/white-ceramic-cup-on-saucer-2659387-min.jpg"
# ]

# # 11
# homeandliving_names = [
#     "carpet chair",
#     "contemporary couch",
#     "blanket(s)",
#     "blue sofa",
#     "gray couch",
#     "nice couch",
#     "fancy light bulbs",
#     "gray linens",
#     "red chair",
#     "white sheets",
#     "white cup"
# ]

# jewelry = [
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/armband-close-up-kunst-naerbillede-234798.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/assorted-silver-colored-pocket-watch-lot-selective-focus-859895.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/close-up-photo-of-diamond-earings-2849743.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/close-up-photo-of-diamond-stud-silver-colored-eternity-ring-691046.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/close-up-photography-of-blue-earrings-1413420.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/gold-pearl-and-rose-gold-flower-necklace-177332.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/love-gold-marriage-wedding-94843.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/person-holding-pink-suede-long-waller-910122.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/jewelry2/silver-colored-pendant-with-green-gemstone-1458867.jpg"
# ]

# jewelrynames = [
#     "armband",
#     "pocketwatch",
#     "diamond earings",
#     "diamond stud",
#     "earings",
#     "blue earings",
#     "necklace",
#     "gold bands",
#     "suede thing",
#     "shiny"
# ]

# gifts = [
#     "https://flea-seeds-two.s3.amazonaws.com/gifts2/a-pomeranian-inside-a-gift-box-3309884.min-jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/gifts2/happy-anniversary-signage-2072175.min-jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/gifts2/photo-of-cookies-on-string-3334477.min-jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/gifts2/pink-and-teal-heart-box-2072148.min-jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/gifts2/red-petaled-flowers-1899631.min-jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/gifts2/woman-carrying-christmas-presents-3264665.min-jpg"
# ]

# gift_names = [
#     "small dog",
#     "anniversary gift",
#     "cookies and a letter",
#     "heart shaped mystery box",
#     "flowers!",
#     "christmas presents"
# ]

# toysandentertainment = [
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/accomplishment-accuracy-accurate-aim-226601.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/art-color-colorful-coloring-157526.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/brain-color-colorful-cube-19677.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/brown-colored-pencils-on-white-printer-paper-1158682.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/brown-teddy-bear-on-brown-wooden-bench-outside-207891.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/child-children-close-up-colorful-270949.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/danboard-on-top-of-toy-train-675266.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/man-and-woman-dolls-2187606.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/tilt-shift-photography-of-motorcycle-toy-1203997.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/toy-soldiers-macro-photo-1214270.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/toysandentertainment2/two-brown-and-white-rabbit-figurines-2156261.jpg"
# ]

# tande_names = [
#     "rubber ducky darts",
#     "colorful art",
#     "colorful cube",
#     "rainbow pencils",
#     "teddy bear",
#     "dradle",
#     "amazon man on a train",
#     "dolls",
#     "motorcycle",
#     "toy soldiers",
#     "rabbits"
# ]

# vintage = [
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/abandoned-antique-close-up-design-333984.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/antique-camera-classic-lens-242433.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/black-and-silver-cassette-player-159613.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/black-cassette-tape-on-top-of-red-and-yellow-surface-1626481.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/black-rotary-telephone-on-white-surface-1416530.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/black-vintage-typewriter-163084.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/black-vinyl-record-playing-on-turntable-1389429.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/curve-industry-photography-vintage-65128.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/vintage2/game-cartridges-1373100.jpg"
# ]

# vintage_names = [
#     "antique",
#     "camera",
#     "gauge",
#     "casette",
#     "casette-tape",
#     "rotary phone",
#     "typewriter",
#     "vinyl",
#     "old camera",
#     "old games",
#     "cafe racer?"
# ]

# weddingandparty = [
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/beautiful-bridal-design-dress-291759.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/gold-wedding-bands-265730.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/photo-of-pineapple-wearing-black-aviator-style-sunglasses-1071878.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/photo-of-three-pineapples-surrounded-by-balloons-1071882.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/plates-and-wine-glass-on-table-1114425.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/selective-focus-of-candlesticks-on-table-with-wedding-set-up-1128783.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/wedding-preparation-313707.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/white-icing-cover-cake-1702373.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/yellow-balloon-beside-white-balloon-226737.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/weddingandparty2/yellow-pink-and-blue-party-balloons-796606.jpg"
# ]

# weddingandparty_names = [
#     "wedding dress",
#     "wedding bands",
#     "cool pineapple",
#     "party pineapples",
#     "39 wine glasses",
#     "candlesticks",
#     "bouquet and shoes",
#     "cake",
#     "balloons",
#     "more balloons"
# ]



# user_avatars = [
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/adult-beard-boy-casual-220453.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/blur-boy-casual-close-up-428333.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/close-up-photography-of-man-wearing-sunglasses-1212984.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/brown-haired-girl-in-white-sleeveless-dress-standing-beside-756453.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/close-up-photography-of-a-woman-near-wall-1065084.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/woman-wearing-black-eyeglasses-1239291.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/woman-wearing-eyeglasses-773371.jpg",
#     "https://flea-seeds-two.s3.amazonaws.com/avatar-photos/photography-of-a-guy-wearing-green-shirt-1222271.jpg"


# ]




# ------------------------------------------------------------------------------------------------------------------------------------------------


# artsandcollect = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/art-artistic-bright-colors-1170576_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/art-painting-on-walls-1227497_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/astronaut-graffiti-on-semi-trailers-163811_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/gray-metal-cubes-decorative-1005644_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/low-angle-photo-of-eiffel-tower-699466_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/multicolored-abstract-painting-1012982_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/nativity-painting-of-people-inside-a-dome-159862_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/painting-of-purple-crepe-myrtle-trees-1406863_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/selective-photograph-of-a-wall-with-grafitti-1194420_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/shallow-focus-photography-of-paper-crane-1272838_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artandcollectibles/worms-eye-view-of-spiral-stained-glass-decors-through-the-161154_tn.jpg"
# ]


# artsandcollect_names = [
#     "pretty painting",
#     "wall painting",
#     "astronaut graffiti",
#     "cubes",
#     "eiffel tower print",
#     "abstract painting",
#     "painting of some randos",
#     "trees print",
#     "graffiti",
#     "paper crane print",
#     "stained glass print"
# ]

# artsandcrafts = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artsandcrafts/assorted-color-button-pin-on-brown-surface-1232131_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artsandcrafts/assorted-commemorative-plates-716107_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artsandcrafts/black-and-grey-star-sewing-machine-3119949_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artsandcrafts/blue-scissor-neat-red-tape-1117543_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artsandcrafts/brush-painting-color-paint-102127_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artsandcrafts/bunch-of-green-beads-1331699_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/artsandcrafts/color-pencil-lot-2836955_tn.jpg"
# ]

# artsandcrafts_names = [
#     "pins",
#     "plates",
#     "sewing machine",
#     "blue scissors",
#     "paint brushes",
#     "green beads",
#     "coloring pencils",
#     "green yarn",
#     "thumb tacks",
#     "yellow beads"
# ]

# clothingandshoes = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/black-denim-jeans-on-white-panel-65676_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/black-framed-eyeglasses-on-white-jacket-and-blue-denim-934070_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/dachshund-dog-wearing-a-red-sweater-755380_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/jeans-levis-pants-6898_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/man-in-formal-suit-jacket-holding-his-necktie-1342609_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/man-wearing-black-notched-lapel-suit-jacket-1096849_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/photo-of-man-standing-near-flowers-2635315_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/sweater-cardigan-jumper-men-clothes-45982_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/clothingandshoes/woman-wearing-green-sweater-holding-dried-pine-leaf-2705753_tn.jpg"
# ]

# clothingandshoes_names = [
#     "black jeans",
#     "blue jeans & glasses",
#     "red sweater for dogs",
#     "jeans",
#     "suit",
#     "suit jacket",
#     "nice shirt",
#     "sweater",
#     "green sweater"
# ]

# gifts = [

# ]

# homeandliving = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/apartment-architecture-carpet-chair-276583_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/apartment-contemporary-couch-curtains-275484_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/blanket-environment-foggy-haze-590137_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/blue-sofa-2986011_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/comfortable-grey-couch-with-pillows-5732_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/contemporary-design-112811_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/five-bulb-lights-1036936_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/four-gray-textiles-821649_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/red-chair-coach-sofa-96940_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/white-bedspread-beside-glass-sliding-door-1841149_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/homeandliving/white-ceramic-cup-on-saucer-2659387_tn.jpg"
# ]

# # 11
# homeandliving_names = [
#     "carpet chair",
#     "contemporary couch",
#     "blanket(s)",
#     "blue sofa",
#     "gray couch",
#     "nice couch",
#     "fancy light bulbs",
#     "gray linens",
#     "red chair",
#     "white sheets",
#     "white cup"
# ]

# jewelry = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/armband-close-up-kunst-naerbillede-234798_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/assorted-silver-colored-pocket-watch-lot-selective-focus-859895_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/close-up-photo-of-diamond-earings-2849743_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/close-up-photo-of-diamond-stud-silver-colored-eternity-ring-691046_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/close-up-photography-of-blue-earrings-1413420_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/gold-pearl-and-rose-gold-flower-necklace-177332_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/love-gold-marriage-wedding-94843_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/person-holding-pink-suede-long-waller-910122_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/jewelry/silver-colored-pendant-with-green-gemstone-1458867_tn.jpg"
# ]

# jewelrynames = [
#     "armband",
#     "pocketwatch",
#     "diamond earings",
#     "diamond stud",
#     "earings",
#     "blue earings",
#     "necklace",
#     "gold bands",
#     "suede thing",
#     "shiny"
# ]

# gifts = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/gifts/a-pomeranian-inside-a-gift-box-3309884_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/gifts/happy-anniversary-signage-2072175_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/gifts/photo-of-cookies-on-string-3334477_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/gifts/pink-and-teal-heart-box-2072148_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/gifts/red-petaled-flowers-1899631_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/gifts/woman-carrying-christmas-presents-3264665_tn.jpg"
# ]

# gift_names = [
#     "small dog",
#     "anniversary gift",
#     "cookies and a letter",
#     "heart shaped mystery box",
#     "flowers!",
#     "christmas presents"
# ]

# toysandentertainment = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/accomplishment-accuracy-accurate-aim-226601_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/art-color-colorful-coloring-157526_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/brain-color-colorful-cube-19677_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/brown-colored-pencils-on-white-printer-paper-1158682_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/brown-teddy-bear-on-brown-wooden-bench-outside-207891_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/child-children-close-up-colorful-270949_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/danboard-on-top-of-toy-train-675266_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/man-and-woman-dolls-2187606_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/tilt-shift-photography-of-motorcycle-toy-1203997_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/toy-soldiers-macro-photo-1214270_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/toysandentertainment/two-brown-and-white-rabbit-figurines-2156261_tn.jpg"
# ]

# tande_names = [
#     "rubber ducky darts",
#     "colorful art",
#     "colorful cube",
#     "rainbow pencils",
#     "teddy bear",
#     "dradle",
#     "amazon man on a train",
#     "dolls",
#     "motorcycle",
#     "toy soldiers",
#     "rabbits"
# ]

# vintage = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/abandoned-antique-close-up-design-333984_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/antique-camera-classic-lens-242433_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/black-and-silver-cassette-player-159613_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/black-cassette-tape-on-top-of-red-and-yellow-surface-1626481_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/black-rotary-telephone-on-white-surface-1416530_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/black-vintage-typewriter-163084_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/black-vinyl-record-playing-on-turntable-1389429_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/curve-industry-photography-vintage-65128_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/vintage/game-cartridges-1373100_tn.jpg"
# ]

# vintage_names = [
#     "antique",
#     "camera",
#     "gauge",
#     "casette",
#     "casette-tape",
#     "rotary phone",
#     "typewriter",
#     "vinyl",
#     "old camera",
#     "old games",
#     "cafe racer?"
# ]

# weddingandparty = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/beautiful-bridal-design-dress-291759_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/gold-wedding-bands-265730_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/photo-of-pineapple-wearing-black-aviator-style-sunglasses-1071878_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/photo-of-three-pineapples-surrounded-by-balloons-1071882_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/plates-and-wine-glass-on-table-1114425_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/selective-focus-of-candlesticks-on-table-with-wedding-set-up-1128783_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/wedding-preparation-313707_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/white-icing-cover-cake-1702373_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/yellow-balloon-beside-white-balloon-226737_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/weddingandparty/yellow-pink-and-blue-party-balloons-796606_tn.jpg"
# ]

# weddingandparty_names = [
#     "wedding dress",
#     "wedding bands",
#     "cool pineapple",
#     "party pineapples",
#     "39 wine glasses",
#     "candlesticks",
#     "bouquet and shoes",
#     "cake",
#     "balloons",
#     "more balloons"
# ]



# user_avatars = [
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/adult-beard-boy-casual-220453(1)_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/blur-boy-casual-close-up-428333(1)_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/close-up-photography-of-man-wearing-sunglasses-1212984(1)_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/brown-haired-girl-in-white-sleeveless-dress-standing-beside-756453(1)_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/close-up-photography-of-a-woman-near-wall-1065084(1)_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/woman-wearing-black-eyeglasses-1239291_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/woman-wearing-eyeglasses-773371(1)_tn.jpg",
#     "https://flea-seeds-three.s3.amazonaws.com/thumbnails/avatarphotos/photography-of-a-guy-wearing-green-shirt-1222271_tn.jpg"
# ]

# ---------------------------------------------------------------------------------------

artsandcollect = [
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/art-artistic-bright-colors-1170576_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/art-painting-on-walls-1227497_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/astronaut-graffiti-on-semi-trailers-163811_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/gray-metal-cubes-decorative-1005644_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/low-angle-photo-of-eiffel-tower-699466_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/multicolored-abstract-painting-1012982_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/nativity-painting-of-people-inside-a-dome-159862_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/painting-of-purple-crepe-myrtle-trees-1406863_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/selective-photograph-of-a-wall-with-grafitti-1194420_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/shallow-focus-photography-of-paper-crane-1272838_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artandcollectibles/worms-eye-view-of-spiral-stained-glass-decors-through-the-161154_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artsandcrafts/assorted-color-button-pin-on-brown-surface-1232131_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artsandcrafts/assorted-commemorative-plates-716107_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artsandcrafts/black-and-grey-star-sewing-machine-3119949_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artsandcrafts/blue-scissor-neat-red-tape-1117543_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artsandcrafts/brush-painting-color-paint-102127_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artsandcrafts/bunch-of-green-beads-1331699_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/artsandcrafts/color-pencil-lot-2836955_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/black-denim-jeans-on-white-panel-65676_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/black-framed-eyeglasses-on-white-jacket-and-blue-denim-934070_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/dachshund-dog-wearing-a-red-sweater-755380_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/jeans-levis-pants-6898_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/man-in-formal-suit-jacket-holding-his-necktie-1342609_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/man-wearing-black-notched-lapel-suit-jacket-1096849_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/photo-of-man-standing-near-flowers-2635315_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/sweater-cardigan-jumper-men-clothes-45982_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/clothingandshoes/woman-wearing-green-sweater-holding-dried-pine-leaf-2705753_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/apartment-architecture-carpet-chair-276583_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/apartment-contemporary-couch-curtains-275484_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/blanket-environment-foggy-haze-590137_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/blue-sofa-2986011_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/comfortable-grey-couch-with-pillows-5732_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/contemporary-design-112811_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/five-bulb-lights-1036936_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/four-gray-textiles-821649_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/red-chair-coach-sofa-96940_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/white-bedspread-beside-glass-sliding-door-1841149_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/homeandliving/white-ceramic-cup-on-saucer-2659387_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/armband-close-up-kunst-naerbillede-234798_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/assorted-silver-colored-pocket-watch-lot-selective-focus-859895_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/close-up-photo-of-diamond-earings-2849743_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/close-up-photo-of-diamond-stud-silver-colored-eternity-ring-691046_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/close-up-photography-of-blue-earrings-1413420_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/gold-pearl-and-rose-gold-flower-necklace-177332_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/love-gold-marriage-wedding-94843_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/person-holding-pink-suede-long-waller-910122_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/jewelry/silver-colored-pendant-with-green-gemstone-1458867_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/gifts/a-pomeranian-inside-a-gift-box-3309884_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/gifts/happy-anniversary-signage-2072175_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/gifts/photo-of-cookies-on-string-3334477_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/gifts/pink-and-teal-heart-box-2072148_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/gifts/red-petaled-flowers-1899631_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/gifts/woman-carrying-christmas-presents-3264665_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/accomplishment-accuracy-accurate-aim-226601_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/art-color-colorful-coloring-157526_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/brain-color-colorful-cube-19677_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/brown-colored-pencils-on-white-printer-paper-1158682_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/brown-teddy-bear-on-brown-wooden-bench-outside-207891_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/child-children-close-up-colorful-270949_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/danboard-on-top-of-toy-train-675266_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/man-and-woman-dolls-2187606_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/tilt-shift-photography-of-motorcycle-toy-1203997_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/toy-soldiers-macro-photo-1214270_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/toysandentertainment/two-brown-and-white-rabbit-figurines-2156261_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/abandoned-antique-close-up-design-333984_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/antique-camera-classic-lens-242433_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/black-and-silver-cassette-player-159613_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/black-cassette-tape-on-top-of-red-and-yellow-surface-1626481_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/black-rotary-telephone-on-white-surface-1416530_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/black-vintage-typewriter-163084_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/black-vinyl-record-playing-on-turntable-1389429_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/curve-industry-photography-vintage-65128_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/vintage/game-cartridges-1373100_tn.jpg"
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
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/beautiful-bridal-design-dress-291759_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/gold-wedding-bands-265730_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/photo-of-pineapple-wearing-black-aviator-style-sunglasses-1071878_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/photo-of-three-pineapples-surrounded-by-balloons-1071882_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/plates-and-wine-glass-on-table-1114425_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/selective-focus-of-candlesticks-on-table-with-wedding-set-up-1128783_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/wedding-preparation-313707_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/white-icing-cover-cake-1702373_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/yellow-balloon-beside-white-balloon-226737_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/weddingandparty/yellow-pink-and-blue-party-balloons-796606_tn.jpg"
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



user_avatars = [
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/adult-beard-boy-casual-220453(1)_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/blur-boy-casual-close-up-428333(1)_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/close-up-photography-of-man-wearing-sunglasses-1212984(1)_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/brown-haired-girl-in-white-sleeveless-dress-standing-beside-756453(1)_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/close-up-photography-of-a-woman-near-wall-1065084(1)_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/woman-wearing-black-eyeglasses-1239291_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/woman-wearing-eyeglasses-773371(1)_tn.jpg",
    "https://flea-seeds-four.s3.amazonaws.com/thumbnails_v2/avatarphotos/photography-of-a-guy-wearing-green-shirt-1222271_tn.jpg"
]



u1 = User.create!(username: "Lary", viewed: [], password: "password", email: "lary@mail.com")
u2 = User.create!(username: "demouser", viewed: [], password: "password", email: "demo@mail.com")
u3 = User.create!(username: "Greg", viewed: [], password: "password", email: "greg@mail.com")
u4 = User.create!(username: "Lisa", viewed: [], password: "password", email: "lisa@mail.com")
u5 = User.create!(username: "Sarah", viewed: [], password: "password", email: "sarah@mail.com")
u6 = User.create!(username: "Eve", viewed: [], password: "password", email: "eve@mail.com")
u7 = User.create!(username: "Morty", viewed: [], password: "password", email: "morty@mail.com")
u8 = User.create!(username: "Bert", viewed: [], password: "password", email: "bert@mail.com")
u9 = User.create!(username: "Hillary", viewed: [], password: "password", email: "hillary@mail.com")

users = [u1, u2, u3, u4, u5, u6, u7, u8, u9]

users.each_with_index do |user, i|
    file = open(user_avatars[i])
    indiv_file = user_avatars[i].split("avatar-photos/")[-1]
    user.photo.attach(io: file, filename: indiv_file)
end


# 5 men, 4 women
s1 = Shop.create!(name: "#{u1.username}'s shop", creator_id: u1.id, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
s2 = Shop.create!(name: "#{u8.username}'s shop", creator_id: u2.id, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
s3 = Shop.create!(name: "#{u3.username}'s emporium", creator_id: u3.id, description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.")
s4 = Shop.create!(name: "#{u4.username}'s brightly lit shop", creator_id: u4.id, description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?")
s5 = Shop.create!(name: "#{u5.username}'s spooky shop", creator_id: u5.id, description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?")
s6 = Shop.create!(name: "#{u6.username}'s shop", creator_id: u6.id, description: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.")
s7 = Shop.create!(name: "#{u7.username}'s not so nice shop", creator_id: u7.id, description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.")

shops = [s1, s2, s3, s4, s5, s6, s7]
# users = [u1, u2, u3, u4, u5, u6, u7, u8, u9]


# clothing and shoes
i = 0
while i < 6
    x = Product.create!(
        name: clothingandshoes_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Clothing & Shoes",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )
    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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
while i < 6
    x = Product.create!(
        name: jewelrynames[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Jewelry & Accessories",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )
    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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
while i < 6
    x = Product.create!(
        name: homeandliving_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Home & Living",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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
while i < 6
    x = Product.create!(
        name: artsandcrafts_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Craft & Supplies",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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
while i < 6
    x = Product.create!(
        name: artsandcollect_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Art & Collectibles",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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
while i < 6
    x = Product.create!(
        name: weddingandparty_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Wedding & Party",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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
while i < 6
    x = Product.create!(
        name: vintage_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Vintage",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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
while i < 6
    x = Product.create!(
        name: gift_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Gifts",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
            item_id: x.id,
            author_id: users[rand(7)].id,
        )
        j += 1
    end

    file = open(gifts[i])
    indiv_file = gifts[i].split("gifts/")[-1]
    x.photo.attach(io: file, filename: indiv_file)

    i += 1
end

i = 0
while i < 6
    x = Product.create!(
        name: tande_names[i],
        shop_id: shops[i % shops.length].id,
        high_level_category: "Toys & Entertainment",
        price: (rand() * 200).round(2),
        stock_amt: rand(50)
    )

    j = 0
    while j < 4;
        Review.create!(
            title: Faker::Lorem.words(number: 3).join(" "),
            body: Faker::TvShows::Simpsons.quote,
            rating: rand(1..6),
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

