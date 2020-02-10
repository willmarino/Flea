class EditTags < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :tagging_id
  end
end
