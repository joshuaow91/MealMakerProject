const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse (courseName, dishName, dishPrice) {
        dish = {
            name: dishName,
            price: dishPrice
        }
        this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
     const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    }
};

menu.addDishToCourse('appetizers', 'Salad', 4.25);
menu.addDishToCourse('appetizers', 'Ceviche', 4.25);
menu.addDishToCourse('appetizers', 'Bread', 3.50);

menu.addDishToCourse('mains', 'Pasta', 9.75);
menu.addDishToCourse('mains', 'Steak', 14.95);
menu.addDishToCourse('mains', 'Salmon', 12.95);

menu.addDishToCourse('desserts', 'Cake', 4.50);
menu.addDishToCourse('desserts', 'Ice Cream', 4.25);
menu.addDishToCourse('desserts', 'Affogato', 3.25);

let meal = menu.generateRandomMeal();

console.log(meal);
