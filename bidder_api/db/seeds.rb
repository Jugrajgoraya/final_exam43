# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Bid.destroy_all
Auction.destroy_all
User.destroy_all

PASSWORD = 'abcd'

5.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name}@#{last_name}.com",
        password: PASSWORD
    )
end

users = User.all

20.times do
    end_date = Faker::Date.between(from: '2022-04-23', to: '2022-09-25')
    a = Auction.create(
        title: Faker::Company.name,
        description: Faker::Quote.matz,
        user: users.sample,
        reserve_price: 200,
        end_date: end_date,
        state: "published"
    )
    if a.valid?
        rand(1..3).times do
            r = Bid.create(
                price: 140,
                auction: a,
                user: users.sample,
            )
        end
    end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} bids", :cow)
puts Cowsay.say("Generated #{users.count} users", :koala)
