# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

genres = Genre.create([  {name: 'Vegetarian', icon:'H'},
                                  {name: 'Pizza', icon:'I'},
                                  {name: 'Hamburger', icon:'A'},
                                  {name: 'Coffee', icon:'b'}
                                  ])

restaurants = Restaurant.create( [{name:'Vegi-Vegi', ten_bis:true, genre: genres[0]},
                                           {name:'Big Mamma', ten_bis:false, genre: genres[1], geo:'32.0674777,34.78097768'},
                                           {name:'Moses', ten_bis:true, genre: genres[3]},
                                           {name:'Aroma', ten_bis:true, genre: genres[3]}
                                          ])
Review.create( [ {name: 'Ben', text: 'Good Place', restaurant: restaurants[0], rating: 1},
                          {name: 'Dan', text: 'OK Place', restaurant: restaurants[0], rating: 3},
                          {name: 'Moshe', text: 'Bad Place', restaurant: restaurants[1], rating: 1}

               ])
