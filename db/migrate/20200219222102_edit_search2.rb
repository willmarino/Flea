class EditSearch2 < ActiveRecord::Migration[5.2]
  def change
    add_index :searches, :quantity
  end
end
