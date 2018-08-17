# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "asff", password: "123456", fname: "Demo User", lname: "1")
User.create(email: "demo2", password: "123456", fname: "Henry", lname: "Chen")
User.create(email: "demo3", password: "123456", fname: "Jane", lname: "Smith")

photo_arr = []
p1 = Photo.new(name: "Orca", description: "Took this picture at the local marine theme park", owner_id: 1)
p1.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/animal-aquarium-fish-34809.jpg'), filename: 'orca.jpg')
photo_arr << p1
p2 = Photo.new(name: "Underwater Dolphin", description: "Underwater shot of a dolphin at the local water park", owner_id: 1)
p2.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/animal-close-up-cute-64219.jpg'), filename: 'dolphin.jpg')
photo_arr << p2
p3 = Photo.new(name: "Dolphin", description: "A dolphin at the marine theme park", owner_id: 1)
p3.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/compressjpeg/damian-patkowski-263169-unsplash-min.jpg'), filename: 'dolphin2.jpg')
photo_arr << p3
p4 = Photo.new(name: "Whale Flipper", description: "A quick trigger finger on the capture button led to this lucky shot", owner_id: 1)
p4.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/compressjpeg/iswanto-arif-589937-unsplash-min.jpg'), filename: 'flipper.jpg')
photo_arr << p4

p5 = Photo.new(name: "Turtle", description: "Underwater shot of a sea turtle", owner_id: 1)
p5.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/compressjpeg/jeremy-bishop-136677-unsplash-min.jpg'), filename: 'turtle.jpg')

photo_arr << p5

p6 = Photo.new(name: "Swimming Dolphins", description: "Artistic, black and white shot of dolphins swimming underwater", owner_id: 1)
p6.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/compressjpeg/pascal-van-de-vendel-673620-unsplash-min.jpg'), filename: 'bwdolphin.jpg')

photo_arr << p6

p7 = Photo.new(name: "Dolphin3", description: "Dolphin at the local marine theme park, seems like he is smiling", owner_id: 1)
p7.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/dolphin.jpg'), filename: 'dolphinsmiling.jpg')

photo_arr << p7

p8 = Photo.new(name: "Another Turtle", description: "A photo of another turtle, taken underwater", owner_id: 1)
p8.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/Turtle.jpg'), filename: 'turtle2.jpg')

photo_arr << p8

p18 = Photo.new(name: "Whale Flipper 2", description: "Another photo of whale breaching the surface with its flipper", owner_id: 1)
p18.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/WhaleFlipper2.jpg'), filename: 'flipper2.jpg')

photo_arr << p18

p9 = Photo.new(name: "Golden Gate Bridge", description: "Fog is rolling in under the Golden Gate Bridge", owner_id: 2)
p9.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/img_0861.jpg'), filename: 'ggb.jpg')

photo_arr << p9

p10 = Photo.new(name: "Hong Kong", description: "Buildings in Hong Kong", owner_id: 2)
p10.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/HongKong.jpg'), filename: 'hk.jpg')

photo_arr << p10

p11 = Photo.new(name: "Suzhou River", description: "A river in Suzhou, China", owner_id: 2)
p11.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/River3.jpg'), filename: 'SZ.jpg')

photo_arr << p11

p12 = Photo.new(name: "Suzhou River 2", description: "Another shot of a river in Suzhou", owner_id: 2)
p12.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/River2.jpg'), filename: 'SZ2.jpg')

photo_arr << p12

p13 = Photo.new(name: "Shanghai City Lights", description: "Night time shot of Shanghai city", owner_id: 2)
p13.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/CityLights.jpg'), filename: 'SH.jpg')

photo_arr << p13

p14 = Photo.new(name: "Fish Statue", description: "Fish Statue in China", owner_id: 2)
p14.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/czPyFb/fishstatue.jpg'), filename: 'FS.jpg')

photo_arr << p14

p15 = Photo.new(name: "Golden Gate Bridge in the Fog", description: "Early morning shot of the Golden Gate Bridge, under the cover of fog", owner_id: 3)
p15.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/Golden gate bridge.jpeg'), filename: 'GGB2.jpg')

photo_arr << p15

p16 = Photo.new(name: "Milky Way", description: "Drove 2 hours away from light pollution to get this shot. Totally worth it!", owner_id: 3)
p16.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/pexels-photo-355465.jpeg'), filename: 'MilkyWay.jpg')

photo_arr << p16

p17 = Photo.new(name: "China Town", description: "SF China Town, looking towards the Bay Bridge", owner_id: 3)
p17.photo.attach(io: File.open('/Users/rongyi/Downloads/seed images/pexels-photo-1115187.jpeg'), filename: 'CT.jpg')

photo_arr << p17

photo_arr.each do |photo|
  photo.save
end
