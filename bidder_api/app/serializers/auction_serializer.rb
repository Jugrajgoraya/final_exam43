class AuctionSerializer < ActiveModel::Serializer

  attributes :id, :title, :description, :reserve_price, :end_date, :state, :created_at, :updated_at

  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id,:price, :created_at

    def customer_full_name
      object.user&.full_name
    end
    belongs_to :user, key: :customer
  end

end
