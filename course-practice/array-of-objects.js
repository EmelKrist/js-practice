/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: "BMW",
    price: 2356,
    isAvailableForSale: true,
  },
  {
    carBrand: "Audi",
    price: 3476,
    isAvailableForSale: false,
  },
  {
    carBrand: "Mersedes",
    price: 2374,
    isAvailableForSale: true,
  },
];

const newCar = {
  carBrand: "Volvo",
  price: 1243,
  isAvailableForSale: false,
};

cars.push(newCar);

console.log(cars);
