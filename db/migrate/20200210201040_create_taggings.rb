class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :product_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end
    add_index :taggings, :product_id
    add_index :taggings, :tag_id
  end
end
