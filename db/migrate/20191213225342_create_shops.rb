class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.string :image_url
      t.string :location
      t.integer :creator_id, null: false
      t.text :description, null: false
      t.text :announcement

      t.timestamps
    end
    add_index :shops, :creator_id
    add_index :shops, :name, unique: true
  end
end

