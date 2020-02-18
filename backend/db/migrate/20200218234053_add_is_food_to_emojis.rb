class AddIsFoodToEmojis < ActiveRecord::Migration[6.0]
  def change
    add_column :emojis, :is_food?, :boolean
  end
end
