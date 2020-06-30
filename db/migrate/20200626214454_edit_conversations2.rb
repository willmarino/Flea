class EditConversations2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :conversations, :creator_id
    remove_column :conversations, :receiver_id
  end
end
