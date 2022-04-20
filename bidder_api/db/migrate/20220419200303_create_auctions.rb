class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.datetime :end_date
      t.integer :reserve_price
      t.string :state, default: "draft"
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
