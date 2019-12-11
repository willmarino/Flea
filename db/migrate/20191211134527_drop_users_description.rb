class DropUsersDescription < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :description
    remove_column :users, :location
  end
end
