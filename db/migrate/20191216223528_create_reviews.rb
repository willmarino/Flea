class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :item_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :reviews, :item_id
    add_index :reviews, :author_id
  end
end
