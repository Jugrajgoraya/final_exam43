class AuctionCollectionSerializer < ActiveModel::Serializer

  attributes :id, :title, :created_at, :state

end
