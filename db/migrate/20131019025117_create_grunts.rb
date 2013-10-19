class CreateGrunts < ActiveRecord::Migration

  def change
    create_table :grunts do |t|
      t.references :yak, :index => true
      t.references :herd, :index => true
      t.text :message
      t.float :geo_lat
      t.float :geo_long
      t.timestamps
    end
  end

end
