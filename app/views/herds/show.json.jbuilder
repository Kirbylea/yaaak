json.extract! @herd, :id, :herd_radius, :geo_lat, :geo_long
json.grunts @grunts do |grunt|
  json.message grunt.message
  json.user_id grunt.yak.id
  json.user_name grunt.display_name
  json.created_at grunt.created_at
  json.user_color grunt.yak.color
end