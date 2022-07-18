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


function pickClick() {
    var randomRestaurant = Math.floor(Math.random() * (restaurant.length));
    document.getElementById('restaurantHTML').innerHTML = restaurant[randomRestaurant];
    document.getElementById('cuisineHTML').innerHTML = cuisine[randomRestaurant];
}