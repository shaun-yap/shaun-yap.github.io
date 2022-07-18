var restaurant = [
    'Sukiya',
    'Sushi Zanmai',
    'Chilli\'s',
    'Fei Fan Hotpot',
    'McDonalds',
    'KFC',
    'Nasi Lemak Bumbung',
    'Mamak',
    'Paradigm\'s Hong Kong Restaurant',
    'Pizza Hut',
    'Sushi Mentai',
    'Asian Rice Pot',
    'Acha\'s Curry House',
    'Provisions',
    'Big Wanton Mee',
    'Old Town White Coffee',
    'Chicha Bonita',
    'Taco Bell',
    'myBurgerLab',
    'Economy Rice',
    'A Kopitiam',
    'Kar Heong Chicken Rice/Any Chicken Rice',
    'Undisclosed Location',
    'doudou',
    'Rocku Yakiniku',
    'Kuro',
    'Kenny\'s Food Cart',
    'Reyshmi Picks',
    'Shaun Picks'

]

var cuisine = [
    'Japanese Hot Pot',
    'Japanese/Sushi',
    'Western',
    'Chinese Hot Pot',
    'Fast Food/Western',
    'Fast Food/Western',
    'Malay',
    'Chinese',
    'Italian',
    'Japanese/Sushi',
    'Indian',
    'Indian',
    'Cafe',
    'Chinese',
    'Expensive Hawker Fare',
    'GOOD MEXICAN, but also expense',
    'Mexican',
    'Burgers',
    'Cheap Chinese Food',
    'Cheap Chinese Food',
    'Chinese',
    'Cafe',
    'Cafe',
    'Japanese BBQ Buffet',
    'Japanese Hot Pot, expense but only worth for ice cream',
    'Mmmm, sick people food',
    'HAHAHAHAHA, good luck.',
    'Ah who ask you put Reyshmi into the generator ah ah.'
]

// It is very important that both restaurant and cuisine lines up properly!


function pickClick() {
    var randomRestaurant = Math.floor(Math.random() * (restaurant.length));
    document.getElementById('restaurantHTML').innerHTML = restaurant[randomRestaurant];
    document.getElementById('cuisineHTML').innerHTML = cuisine[randomRestaurant];
}