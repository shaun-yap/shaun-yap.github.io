var restaurant = [
    'Sukiya',
    'Sushi Zanmai',
    'Chilli\'s'
]

var cuisine = [
    'Hot Pot',
    'Japanese/Sushi',
    'Western'
]

// It is very important that both restaurant and cuisine lines up properly!


function pick() {
    var randomRestaurant = Math.floor(Math.random() * (restaurant.length));
    document.getElementById('restaurant').innerHTML = restaurant[randomRestaurant];
    document.getElementById('cuisine').innerHTML = cuisine[randomRestaurant];
}