class User < ApplicationRecord

    has_secure_password
    has_many :auctions
    has_many :bids

    def full_name
        self.first_name + " " + self.last_name
    end
end
