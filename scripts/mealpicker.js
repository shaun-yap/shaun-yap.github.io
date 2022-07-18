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
    'Japanese Sushi',
    'Western',
    'Chinese Hot Pot',
    'Western Fast Food',
    'Western Fast Food',
    'Malay',
    'Malay',
    'Chinese',
    'Italian',
    'Japanese Sushi',
    'Indian',
    'Indian',
    'Cafe',
    'Chinese',
    'Expensive Hawker Fare',
    'ABSOLUTE FANTASTIC MEXICAN FOOD, but also expense',
    'Mexican Fast Food',
    'Burggssss(Burger)',
    'Chinese, but Cheaper',
    'Hawker fare',
    'Chicken Rice',
    'Cafe',
    'Cafe',
    'Japanese BBQ Steamboat',
    'Japanese Hot Pot, overpriced but the Haagen Daz makes it slightly worth it',
    'Mmmmmm sick people food',
    'Good luck bby!',
    'AH AH AH WHO ASK YOU ADD REYSHMI INTO THE GENERATOR'
]

// It is very important that both restaurant and cuisine lines up properly!


function pickClick() {
    var randomRestaurant = Math.floor(Math.random() * (restaurant.length));
    document.getElementById('restaurantHTML').innerHTML = restaurant[randomRestaurant];
    document.getElementById('cuisineHTML').innerHTML = cuisine[randomRestaurant];
}