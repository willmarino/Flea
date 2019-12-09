# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

u1 = User.create!(username: "billy", password: "testuser1", email: "billy@mail.com", description: "a guy named billy", location: "New York City")
u2 = User.create!(username: "timmy", password: "testuser2", email: "timmy@mail.com", description: "a guy named timmmy", location: "Los Angeles")
u3 = User.create!(username: "jimmy", password: "testuser3",email: "jimmy@mail.com", description: "a guy named jimmmy", location: "Florida")

