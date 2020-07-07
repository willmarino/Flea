class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :creator_id, null: false
      t.integer :receiver_id, null: false
      t.timestamps
    end
    add_index :conversations, :creator_id
    add_index :conversations, :receiver_id
  end
end
