class ChangeShops < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :rating, :float
  end
end
