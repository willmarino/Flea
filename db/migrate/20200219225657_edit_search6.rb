class EditSearch6 < ActiveRecord::Migration[5.2]
  def change
    remove_column :searches, :user_id
    add_column :searches, :user_id, :integer
    add_index :searches, :user_id
  end
end
